# WebSockets

Construir un canal de websocket que permita representa:

- Un formulario de carga de productos en la ruta raíz.
- Por debajo del formulario de ingreso, una tabla con la lista de productos en tiempo real.

### Tener en cuenta:

- Puede haber varios clientes conectados simultáneamente y en cada uno de ellos se reflejarán los cambios que se realicen en los productos sin necesidad de recarga la vista.
- Cuando un cliente se conecte, recibirá la lista de productos a representar en la vista.

### Aspectos a incluir:

- Para construir la tabla dinámica con los datos recibidos por websocket utilizar Handlebars en el frontend.

## Canal de chat

Añadir al proyecto un canal de chat entre clientes y el servidor:

### Aspectos a incluir:

- En la parte inferior del formulario de ingreso se presentará el centro de mensajes almacenados en el servidor, donde figuren los mensajes de todos los usuarios identificados por su email.
- El formato a representar será: email (texto negrita en azul) [fecha y hora (DD/MM/YYYY HH:MM:SS)] (texto normal en marrón) : mensaje (texto italic en verde).
- Además incorporar dos elementos de entrada: uno para que el usuario ingrese su email (obligatorio para poder utilizar el chat) y otro para ingresar mensajes y enviarlos mediante un botón.
- Los mensajes deben persistir en el servidor.
