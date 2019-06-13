# PruebaTecnicaLeco
Repositorio con los ejercicios para la prueba técnica de Leco

## Ejercicio 1
### Elaborar un layout resposive utilizando Vanilla HTML5 y CSS3

El codigo se encuentra en la carpeta [_Ejercicio1_](https://github.com/skintigth/PruebaTecnicaLeco/tree/master/Ejercicio1) dentro se encuentra el _index.html_ y la carpeta _css_ con el la hoja de estilos _style.css_

El resultado que se obtuvo fue el sigiente:

| Desktop                                                                                                                           | Movil                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![Version Desktop con width mayor a 600 px](https://github.com/skintigth/PruebaTecnicaLeco/blob/master/docs/previews/desktop.png) | ![Version Movil con width menor a 600 px](https://github.com/skintigth/PruebaTecnicaLeco/blob/master/docs/previews/movil.png) |

[Se puede acceder a una version funcional con github pages](https://skintigth.github.io/PruebaTecnicaLeco/)

___

## Ejercicio 2
### Elaborar un programa en NodeJs que calcule el valor absoluto de la resta de la suma de los elementos de las diagonales de una matriz.

#### Por ejemplo:

| 1, 2,-1|

| 6, 5, 4|

|-9, 8, 9|

#### En esta matriz las diagonales serian:
* Diagonal descendente 1 + 5 + 9 = 15
* Diagonal Ascendente -1 + 5 + (-9) = -5

#### El valor absoluto de su restaria
* x = | -5 - 15 | = | -20 | = 20

Para este ejercicio se usó la matriz

| 1, 2, 3|

|-1,-2,-3|

|-4, 5,-9|

* Diagonal descendente 1 + (-2) + (-9) = -10
* Diagonal Ascendente 3 + (-2) + (-4) = -3

donde el valor absoluto dió como resultado x =| -3 - (-10) | = | 7 | = 7

El codigo se encunetra en la carpeta nombrada [_Ejercicio2_](https://github.com/skintigth/PruebaTecnicaLeco/tree/master/Ejercicio2)

Y el metodo consiste basicamente en recorrer la matriz una sola vez sumando los valores de las respectivas diagonales y retornando directamente el valor absoluto de la resta de dichas sumas.

___

## Ejercicio 3
### Elaborar una funcion recursiva que transforme todas las _llaves_ de un objeto a [_lowerCamelCase_](http://wiki.c2.com/?LowerCamelCase) pudiendo usar la [funcion camelCase() de Lodash](https://lodash.com/docs/4.17.11#camelCase)

El programa se elaboró usando NodeJs y utilizando la funcion _camelCase()_ antes mencionada

| Objeto Original                                                                                                           | Objeto Modificado                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![Objeto Original - Entrada](https://github.com/skintigth/PruebaTecnicaLeco/blob/master/docs/previews/objeto_entrada.png) | ![Objeto Modificado - Salida](https://github.com/skintigth/PruebaTecnicaLeco/blob/master/docs/previews/objeto_salida.png) |

> **NOTA:** Las capturas de pantalla de los objetos se tomaron con Carbon.sh

El codigo consiste en una funcion que recibe un _objeto_, ésta recorre sus _llaves_ y si el valor de alguna es otro objeto se llama a si misma (aqui se ejecuta la recusividad), si el valor **no** es un objeto entonces se le agrega una nueva _llave_ al _objeto original_ con el mismo nombre de la _llave_ revisada pero aplicandole la funcion _camelCase()_, entonces se copia el valor de esta _llave_ a la _nueva llave_, luego se borra la _llave vieja_ y se retorna el _objeto_ ya modificado con sus _llaves_ respetando el lowerCamelCase.

