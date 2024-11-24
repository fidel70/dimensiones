# app.py
from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('db_psicologia_clinic.db')
    conn.row_factory = sqlite3.Row
    return conn

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
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
