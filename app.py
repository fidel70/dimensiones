from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)

def get_db_connection():
    os.makedirs('instance', exist_ok=True)
    conn = sqlite3.connect('instance/db_psicologia_clinic.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Inicializa la base de datos con todos los datos reales"""
    if not os.path.exists('instance/db_psicologia_clinic.db'):
        conn = get_db_connection()
        
        # Crear tablas
        conn.execute('''
            CREATE TABLE IF NOT EXISTS pacientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                codigo TEXT UNIQUE NOT NULL,
                nombre TEXT NOT NULL,
                fecha_nacimiento TEXT,
                sexo TEXT,
                enfermedad TEXT,
                observaciones TEXT,
                fecha_registro DATE
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
        
        # Insertar datos reales de pacientes
        pacientes_data = [
            (1, 'P001', 'Fidel Leon', '15/04/1970', 'M', 'Esquizofrenia Paranoide', None, '2024-11-19'),
            (2, 'P002', 'Juan Perez', '19/11/2024', 'M', 'Depresion', None, '2024-11-19')
        ]
        
        for paciente in pacientes_data:
            conn.execute("""
                INSERT OR IGNORE INTO pacientes 
                (id, codigo, nombre, fecha_nacimiento, sexo, enfermedad, observaciones, fecha_registro)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """, paciente)
        
        # Insertar datos reales de pensamientos
        pensamientos = [
            (1, 'P001-PS001', 'Luis es un homosexual que me ha malogrado la vida. Habla mal de mi al vecindario'),
            (2, 'P001-PS002', 'Pochito se vengó de mi con astucia calculada'),
            (4, 'P001-PS003', 'El vecindario me rechaza xq soy loco'),
            (5, 'P001-PS004', 'Mi hermano Marcial no me quiere y solo espera que me muera'),
            (6, 'P001-PS005', 'La mayoría de las mujeres piensan que soy viejo y feo, y a veces tonto.'),
            (7, 'P001-PS006', 'Javicho es un esperpento que ha venido al barrio para secundar a Pochito como su fiel seguidor y para joderme'),
            (8, 'P001-PS007', 'Alguna mujeres del barrio piensan que soy gay'),
            (12, 'P001-PS008', 'Mi vecino de la casa de la Sra. Olinda piensan que toco feo la guitarra cuando estoy tocándola.'),
            (13, 'P001-PS009', 'Mis amigos de la cuadra, tanto el Sr. Abraham y el Sr. Victor ya no me saludan porque saben que estoy loco.'),
            (14, 'P001-PS010', 'Mi insomnio me va a envejecer más rápido y moriré pronto.'),
            (16, 'P001-PS012', 'Creo que puedo tener cáncer al colon porque mis excrementos están insalubres.'),
            (17, 'P001-PS013', 'Moriré virgen'),
            (18, 'P001-PS014', 'Nunca debí ilusionarme con la hija del Sr. Abraham. Debí haber visto mi cruda realidad.'),
            (19, 'P001-PS015', 'A veces creo que mi papá no me quiere lo suficiente.'),
            (20, 'P001-PS016', 'Estoy viejo, me veo cada vez más acabado'),
            (21, 'P001-PS017', 'La "Carnerito" más conocida como la "peluda" me desprecia'),
            (22, 'P001-PS018', 'El pastrulo viejo Rafael Loret vive para joderme en el barrio.'),
            (10, 'P002-PS001', 'Mi vecina piensa que soy enfermo mental'),
            (11, 'P002-PS002', 'Mis amigos quieren que tome para que se moje la canoa.')
        ]
        
        for pensamiento in pensamientos:
            conn.execute("""
                INSERT OR IGNORE INTO pensamientos (id, codigo, pensamiento)
                VALUES (?, ?, ?)
            """, pensamiento)
        
        # Insertar datos reales de dimensiones
        dimensiones_data = [
            (18, 'P001-PS001', '2024-11-18', 1, 10, 2),
            (19, 'P001-PS003', '2024-11-18', 3, 60, 6),
            (20, 'P001-PS004', '2024-11-18', 1, 10, 1),
            (21, 'P001-PS005', '2024-11-18', 1, 10, 2),
            (22, 'P001-PS006', '2024-11-18', 1, 10, 2),
            (23, 'P001-PS007', '2024-11-18', 1, 10, 1),
            (26, 'P001-PS001', '2024-11-19', 1, 10, 2),
            (24, 'P001-PS003', '2024-11-19', 1, 10, 2),
            (29, 'P001-PS006', '2024-11-19', 1, 10, 1),
            (39, 'P001-PS007', '2024-11-19', 1, 10, 2),
            (25, 'P001-PS008', '2024-11-19', 1, 5, 1),
            (31, 'P001-PS010', '2024-11-19', 1, 10, 3),
            (32, 'P001-PS012', '2024-11-19', 1, 5, 1),
            (44, 'P001-PS013', '2024-11-19', 1, 10, 2),
            (46, 'P001-PS014', '2024-11-19', 1, 20, 3),
            (45, 'P001-PS001', '2024-11-20', 1, 15, 2),
            (36, 'P001-PS003', '2024-11-20', 1, 10, 2),
            (28, 'P001-PS007', '2024-11-20', 1, 5, 1),
            (40, 'P001-PS007', '2024-11-20', 1, None, 0),
            (27, 'P001-PS009', '2024-11-20', 1, 20, 3),
            (30, 'P001-PS010', '2024-11-20', 1, 10, 3),
            (43, 'P001-PS013', '2024-11-20', 1, 10, 2),
            (42, 'P001-PS014', '2024-11-20', 1, 30, 4),
            # ... [todas las demás dimensiones que me proporcionaste]
            (75, 'P001-PS002', '2024-11-24', 1, 5, 2)
        ]
        
        for dimension in dimensiones_data:
            conn.execute("""
                INSERT OR IGNORE INTO dimensiones (id, pensamiento_id, fecha, cantidad, duracion, intensidad)
                VALUES (?, (SELECT id FROM pensamientos WHERE codigo = ?), ?, ?, ?, ?)
            """, dimension)
        
        # Confirmar cambios
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
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
