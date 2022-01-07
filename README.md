# TUGERENTE CHALLENGE

## DESCRIPCIÓN DEL PROBLEMA
Desarrollar usando reactjs un componente de tipo dropdown:
- Al desplegarlo consultará al backend por data buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto).
- Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados.
- Debe permitir parametrizar qué atributo del objeto consultado se mostrará al usuario.
- El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado.

Para realizar las pruebas, crearse una cuenta en https://auth.implementaconbubo.com/ y obtener la llave de integración desde Ajustes > Integración. Dicha llave se usará en los headers de las peticiones que se hagan al backend bajo el nombre de APIKEY

El endpoint para obtener resultados de búsqueda es: https://back.implementaconbubo.com/v1/sales/customer/?simple=true
Los filtros se deben mandar en los headers de la petición, bajo el nombre de Data-Operations. Un ejemplo del objeto data-operations para filtrar por texto:
{"filter":{"filters":[{"field":"reference_name","operator":"contains","ignoreCase":true,"value":""},{"field":"nit","operator":"contains","ignoreCase":true,"value":""},{"field":"name","operator":"contains","ignoreCase":true,"value":""},{"field":"reference_name","operator":"contains","ignoreCase":true,"value":""}],"logic":"or"},"skip":0,"take":5}

Al presentar la prueba resuelta, colocar el APIKEY en el readme o en el .env del proyecto, para realizar pruebas del proyecto

## DEPENDENCIAS
- react-select
- react-bootstrap

## CRITERIOS CUMPLIDOS
- Componente tipo Dropdown ✔️
- Consulta al desplegar ✔️
- Paginación de 20 en 20 ✔️
- Trae la siguiente página al scrollear cerca del final de la primera página ✔️
- Paremetrización del objeto consultado ❌
- El primer resultado del dropdown es una opción fija ❌
- La primera opción levanta un pop-up para ingresar datos/texto ✔️
- Permite agregar nuevo elemento ❌

## COMPLICACIONES
- Conocimiento de la API.
- Conocimiento de parametrización y busqueda por filtros.
- Manejo de Headers para consultas a traves de API con React.
