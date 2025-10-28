from flask import Flask, jsonify
import os

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "magradalapastanagaielbroquil")

@app.route('/')
def home():
    return jsonify({"message": "Hola des del backend Python!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

