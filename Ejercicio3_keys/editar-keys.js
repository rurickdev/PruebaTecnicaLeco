//* Import de la funcion [camelCase] de Lodash
const camelCase = require('lodash.camelcase')
//* Import del paquete [util] para mostrar
//* correctamete el objeto con [console.log]
const util = require('util')

const cliente = {
    Nombre: 'Jorge Rodriguez',
    Edad: 35,
    DireccionOficina: 'Oaxaca 96 Roma Norte',
    DireccionCasa: 'Salamanca 15',
    HistorialDeLentesComprados: {
        Notorious: {
            Color: 'negro',
            TipoDeMica: 'bluelight',
            Graduacion: {
                OjoDerecho: 3,
                OjoIzquierdo: 2
            }
        },
        Air: {
            Color: 'plata',
            TipoDeMica: 'Sencilla',
            Graduacion: {
                OjoDerecho: 3,
                OjoIzquierdo: 2
            }
        }
    }
}

function lowerCamelCaseObject(object) {

    //* Recorremos todas las [keys] del [object]
    for (let key in object) {
        //* Si el valor de alguna [key] es un objeto
        //* invocamos la recursividad
        if (typeof (object[key]) === 'object') {
            lowerCamelCaseObject(object[key])
        }
        //* Agregarmos una nueva [key] en fomato camelCase
        //* copiando el valor de la [key] original
        Object.defineProperty(object, camelCase(key), Object.getOwnPropertyDescriptor(object, key))
        //* Eliminamos la [key] original que NO es camelCase
        delete object[key]
    }
    //* Retornamos el objeto para poder usarlo en otro lado
    return object
}

let objectCamelCased = lowerCamelCaseObject(cliente)

//* Usamos [util.inspect()] para imprimir correctamente el objeto
console.log(util.inspect(objectCamelCased, false, null, true))