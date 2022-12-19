from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/dbplaylist'
# desde el objeto app configuro la URI de la BBDD    user:clave@localhost/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)
 
class Producto(db.Model):   # la clase Producto hereda de db.Model    
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    name=db.Column(db.String(50))
    image=db.Column(db.String(400))
    preview=db.Column(db.String(400))
    spotify=db.Column(db.String(400))
    youtube=db.Column(db.String(400))
    
    def __init__(self,name,image,preview,spotify, youtube):   #crea el  constructor de la clase
        self.name=name   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.image=image
        self.preview=preview
        self.spotify=spotify
        self.youtube=youtube
        
with app.app_context():
    db.create_all()  # crea las tablas
#  ******************************
class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','name','image','preview','spotify','youtube')
producto_schema=ProductoSchema()            # para crear un producto
productos_schema=ProductoSchema(many=True)  # multiples registros
 
# crea los endpoint o rutas (json)
@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()     # query.all() lo hereda de db.Model
    result=productos_schema.dump(all_productos)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto=Producto.query.get(id)
    return producto_schema.jsonify(producto)
#endpoint para el metodo Delete

@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)

@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    print(request.json)  # request.json contiene el json que envio el cliente
    name=request.json['name']
    image=request.json['image']
    preview=request.json['preview']
    spotify=request.json['spotify']
    youtube=request.json['youtube']
    new_producto=Producto(name,image,preview,spotify,youtube)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)

@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)
   
    name=request.json['name']
    image=request.json['image']
    preview=request.json['preview']
    spotify=request.json['spotify']
    youtube=request.json['youtube']
    
 
    producto.name=name
    producto.image=image
    producto.preview=preview
    producto.spotify=spotify
    producto.youtube=youtube
    
    db.session.commit()
    return producto_schema.jsonify(producto)



 
# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)  