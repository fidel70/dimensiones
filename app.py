import os
import sqlite3
from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Configuración de la base de datos
DATABASE_PATH = os.environ.get('DATABASE_URL', 'db_psicologia_clinic.db')

def init_db():
    """Inicializa la base de datos si no existe"""
    if not os.path.exists(DATABASE_PATH):
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
        pensamientos_ejemplo = [
            ('P001-1', 'Me siento preocupado por mi rendimiento en el trabajo'),
            ('P001-2', 'Temo no ser lo suficientemente bueno'),
            ('P001-3', 'Me cuesta concentrarme en las tareas'),
            ('P001-4', 'Siento que no tengo control sobre las situaciones'),
            ('P001-5', 'Me preocupa el futuro constantemente')
        ]
        
        for codigo, pensamiento in pensamientos_ejemplo:
            conn.execute("INSERT OR IGNORE INTO pensamientos (codigo, pensamiento) VALUES (?, ?)",
                        (codigo, pensamiento))
        
        conn.commit()
        conn.close()

def get_db_connection():
    """Establece una conexión con la base de datos"""
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.before_first_request
def setup():
    """Inicializa la base de datos antes de la primera petición"""
    init_db()

@app.route('/')
def index():
    """Ruta principal que muestra la interfaz de usuario"""
    try:
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
    except Exception as e:
        return f"Error al cargar la página: {str(e)}", 500

@app.route('/api/dimensions/<string:thought_code>/<string:date>', methods=['GET'])
def get_dimensions(thought_code, date):
    """Obtiene las dimensiones de un pensamiento para una fecha específica"""
    try:
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
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/dimensions', methods=['POST'])
def save_dimension():
    """Guarda una nueva dimensión para un pensamiento"""
    try:
        data = request.json
        thought_code = data['thoughtCode']
        date = data['date']
        
        # Validar los datos
        quantity = int(data['quantity'])
        duration = int(data['duration']) if data.get('duration') else None
        intensity = int(data['intensity'])
        
        if quantity < 0 or quantity > 10:
            return jsonify({'success': False, 'error': 'La cantidad debe estar entre 0 y 10'}), 400
            
        if duration is not None and (duration < 0 or duration > 60):
            return jsonify({'success': False, 'error': 'La duración debe estar entre 0 y 60 minutos'}), 400
            
        if intensity < 0 or intensity > 10:
            return jsonify({'success': False, 'error': 'La intensidad debe estar entre 0 y 10'}), 400
        
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
            quantity,
            duration,
            intensity
        ))
        conn.commit()
        conn.close()
        return jsonify({'success': True})
        
    except ValueError as e:
        return jsonify({'success': False, 'error': 'Datos inválidos'}), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/thought/<string:thought_code>', methods=['GET'])
def get_thought(thought_code):
    """Obtiene el detalle completo de un pensamiento"""
    try:
        conn = get_db_connection()
        cursor = conn.execute("""
            SELECT pensamiento
            FROM pensamientos
            WHERE codigo = ?
        """, (thought_code,))
        thought = cursor.fetchone()
        conn.close()
        
        if thought:
            return jsonify({'success': True, 'thought': thought['pensamiento']})
        else:
            return jsonify({'success': False, 'error': 'Pensamiento no encontrado'}), 404
            
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.errorhandler(404)
def not_found_error(error):
    """Manejador de error 404"""
    return jsonify({'error': 'Recurso no encontrado'}), 404

@app.errorhandler(500)
def internal_error(error):
    """Manejador de error 500"""
    return jsonify({'error': 'Error interno del servidor'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
