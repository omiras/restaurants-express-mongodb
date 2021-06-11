# ¿Dónde se come hoy?

Queremos crear una formulario de búsqueda de restaurantes.

## Metodología y campos a buscar
Implementa uno a uno los campos requeridos, y cerciórate que funciona bien a cada paso. Piensa el control HTML más adecuado para implementar la entrada de valor para dicha búsqueda (text, number, select, etc.)

Importante: Para simplificar, vamos a hacer la búsqueda solamente por UN CAMPO cada vez.

### Campos a buscar

* Queremos poder buscar por identificador de restaurante

* Queremos poder buscar por el barrio donde se ubican los restaurantes

* Queremos poder buscar por nombre. Es decir, si buscamos por "Cafe" ; deberíamos obtener todos los restaurantes que tienen en su "name" la palabra "Cafe"; como el resutarante_id = 40364681

* Queremos poder buscar por código postal (campo "address.zipcode")

* Queremos poder buscar por tipo de cocina. Echa un vistazo a de la manera que está guardada la cocina en los diferentes documentos de la colección.

### Modificadores de ordenación

* Queremos por defecto ordenar los restaurantes por el campo "restaurant_id"; de forma ascendente. 
* Añade un control para ordenador los restaurantes de manera descontente por el campo "restaurant_id"

**DIFICIL**

* Queremos poder buscar todos aquellos restaurantes que tienen una nota media superior a cierto número. Por ejemplo, Si buscaremos todos los restaurantes que tiene una nota mínima de **10 puntos**; el restaurante con identificador restaurant_id=40356151 cumpliría este criterio.

[Funciones de agragación](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/)

-----

Para practicar, intenta no usar métodos de array o filtrar los datos usando bucles for o while. Usa las funciones adecuadas del módulo NodeJS para obtener los resultados esperados.

## BONUS

1. Añade un botón para limpiar todos los filtros

2. En el caso que la búsqueda no arroje resultados; muestra un mensaje informando de ello al usuario

3. Haz que la búsqueda se realice teniendo en cuenta **todos** los criterios de búsqueda informados. Así, una persona podría buscar los "restaurantes que están en Queens y además sirven comida del tipo italiana".

4. Añade paginación a la lista resultados. Es decir, poder ir buscando de 20 en 20 resultados; usando los métodos __limit__ y __skip__

5. Modifica el diseño usando clases de W3CSS para que los resultados aparezcan en dos columnas
