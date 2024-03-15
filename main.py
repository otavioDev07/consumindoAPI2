from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getall', methods=['GET'])
def get_all_products():
  products = [
    {'nome': 'Produto 1', 'descricao':'Descrição do Produto 1', 'valor': 10},
    {'nome': 'Produto 2', 'descricao':'Descrição do Produto 2', 'valor': 20},
    {'nome': 'Produto 3', 'descricao':'Descrição do Produto 3', 'valor': 30},
    {'nome': 'Produto 4', 'descricao':'Descrição do Produto 4', 'valor': 40},
    {'nome': 'Produto 5', 'descricao':'Descrição do Produto 5', 'valor': 50},
    {'nome': 'Produto 6', 'descricao':'Descrição do Produto 6', 'valor': 60},
    {'nome': 'Produto 7', 'descricao':'Descrição do Produto 7', 'valor': 70},
    {'nome': 'Produto 8', 'descricao':'Descrição do Produto 8', 'valor': 80},
    {'nome': 'Produto 9', 'descricao':'Descrição do Produto 9', 'valor': 90},
    {'nome': 'Produto 10', 'descricao':'Descrição do Produto 10', 'valor': 100},
    {'nome': 'Produto 11', 'descricao':'Descrição do Produto 11', 'valor': 110},
    {'nome': 'Produto 12', 'descricao':'Descrição do Produto 12', 'valor': 120}
  ]
  return jsonify(products)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=80)
