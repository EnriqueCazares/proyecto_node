var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'Id: ' + this.id + ' | Color: ' + this.color + ' | Modelo: ' + this.modelo;
}


Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
    Bicicleta.findById(aBiciId);
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
        }
    }
}

var a = new Bicicleta(1, 'rojo', 'urbana', [19.3914038,-99.1858417]);
var b = new Bicicleta(2, 'azul', 'urbana', [19.3849545,-99.1866624]);

Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;