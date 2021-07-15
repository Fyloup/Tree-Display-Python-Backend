from flask import Flask;
import json

app = Flask(__name__)

@app.route('/data')
def get_data():

    data = json.load(open('data.json'))
    return {'data': data}