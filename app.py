from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)

# Configuración de la base de datos
def get_db_connection():
    # Asegurar que el directorio instance existe
    os.makedirs('instance', exist_ok=True)
    conn = sqlite3.connect('instance/db_psicologia_clinic.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Inicializa la base de datos si no existe"""
    if not os.path.exists('instance/db_psicologia_clinic.db'):
        conn = get_db_connection()
        # Crear las tablas necesarias
        conn.execute('''
            CREATE TABLE IF NOT EXISTS pacientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                codigo TEXT UNIQUE NOT NULL,
                nombre TEXT NOT NULL
            )
        ''')
        
        conn.execute('''
            CREATE TABLE IF NOT EXISTS pensamientos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                codigo TEXT UNIQUE NOT NULL,
                pensamiento TEXT NOT NULL
            )
        ''')
        
        conn.execute('''
            CREATE TABLE IF NOT EXISTS dimensiones (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                pensamiento_id INTEGER,
                fecha DATE DEFAULT CURRENT_DATE,
                cantidad INTEGER CHECK(cantidad BETWEEN 0 AND 10),
                duracion INTEGER CHECK(duracion IS NULL OR duracion BETWEEN 0 AND 60),
                intensidad INTEGER CHECK(intensidad IS NULL OR intensidad BETWEEN 0 AND 10),
                FOREIGN KEY (pensamiento_id) REFERENCES pensamientos (id)
            )
        ''')
        
        # Insertar datos de ejemplo
        conn.execute("INSERT OR IGNORE INTO pacientes (codigo, nombre) VALUES (?, ?)", 
                    ('P001', 'Paciente Ejemplo'))
        
        # Insertar pensamientos de ejemplo
        pensamientos = [
            ('P001-1', 'Me siento ansioso cuando tengo que hablar en público'),
            ('P001-2', 'Pienso que no soy lo suficientemente bueno en mi trabajo'),
            ('P001-3', 'Me preocupa no poder cumplir con mis responsabilidades'),
            ('P001-4', 'Temo decepcionar a las personas que confían en mí')
        ]
        
        for pensamiento in pensamientos:
            conn.execute("INSERT OR IGNORE INTO pensamientos (codigo, pensamiento) VALUES (?, ?)", 
                        pensamiento)
        
        conn.commit()
        conn.close()

# Inicializar la base de datos al arrancar
init_db()

@app.route('/')
def index():
    conn = get_db_connection()
    # Obtener pensamientos del paciente P001
    cursor = conn.execute("""
        SELECT codigo, pensamiento
        FROM pensamientos
        WHERE codigo LIKE 'P001%'
        ORDER BY codigo
    """)
    pensamientos = cursor.fetchall()
    conn.close()
    return render_template('index.html', pensamientos=pensamientos)

@app.route('/api/dimensions/<string:thought_code>/<string:date>', methods=['GET'])
def get_dimensions(thought_code, date):
    conn = get_db_connection()
    cursor = conn.execute("""
        SELECT d.cantidad, d.duracion, d.intensidad
        FROM dimensiones d
        JOIN pensamientos p ON d.pensamiento_id = p.id
        WHERE p.codigo = ? AND d.fecha = ?
        ORDER BY d.id DESC
    """, (thought_code, date))
    dimensions = cursor.fetchall()
    
    # Calcular totales
    total_times = sum(dim['cantidad'] for dim in dimensions)
    total_minutes = sum(dim['duracion'] for dim in dimensions if dim['duracion'] is not None)
    
    conn.close()
    return jsonify({
        'dimensions': [dict(dim) for dim in dimensions],
        'totals': {
            'times': total_times,
            'minutes': total_minutes
        }
    })

@app.route('/api/dimensions', methods=['POST'])
def save_dimension():
    data = request.json
    thought_code = data['thoughtCode']
    date = data['date']
    
    try:
        conn = get_db_connection()
        cursor = conn.execute("""
            INSERT INTO dimensiones (pensamiento_id, fecha, cantidad, duracion, intensidad)
            VALUES (
                (SELECT id FROM pensamientos WHERE codigo = ?),
                ?, ?, ?, ?
            )
        """, (
            thought_code,
            date,
            data['quantity'],
            data.get('duration'),  # Puede ser None
            data['intensity']
        ))
        conn.commit()
        conn.close()
        return jsonify({'success': True})
    except sqlite3.Error as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    # Configuración para desarrollo local y Render
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
