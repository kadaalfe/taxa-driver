# Taxa Driver

## Pantallas

* Login
* Agregar crédito
* Listado de servicios
* Servicio en curso

## Acciones

* Login
* Se ingresa usuario y pass.
* Si los datos son correctos:
* Se obtienen datos del chofer.
* Si el crédito es › 0 se muestra listado de servicios.
* Si el crédito es ‹ 0 se muestra agregar crédito.
* Si hay un servicio "próximo" se muestra Servicio en curso.

## Agregar Crédito

* Se llenan datos del pago.
* Si el pago es exitoso, se agrega crédito al chofer.

## Listado de Servicios

* Se muestran los servicios "nuevos" y "aceptados".
* Se pueden desplegar los detalles del servicio.
* Se puede cambiar de "nuevo" a "aceptado".
* Se puede "cancelar".

## Servicio en Curso

* Un servicio próximo puede marcarse como "en camino", "en domicilio", "hacia el aeropuerto", "completado".
* Botón de alerta para una eventualidad "cancelar" (llanta ponchada, etc).

## Background

* Dos horas antes del servicio, se marca como "próximo".
* Cuando un servicio cambia de status:
* Se envía notificaciones de cambio de estatus de servicio (confirmado › en camino › en domicilio › hacia el aeropuerto › completado).
* Se guarda la ubicación del dispositivo.

## Por resolver

* que pasa cuando hay una eventualidad antes de realizar el servicio?
* que pasa cuando hay una eventualidad durante el servicio?
* que otra cosa podría salir mal?

