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
        
        conn.execute("INSERT OR IGNORE INTO pensamientos (codigo, pensamiento) VALUES (?, ?)",
                    ('P001-1', 'Pensamiento de ejemplo 1'))
        
        conn.commit()
        conn.close()

def get_db_connection():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.before_first_request
def setup():
    init_db()

# Resto del código igual que antes...
[El resto del código se mantiene igual que en la versión anterior]
