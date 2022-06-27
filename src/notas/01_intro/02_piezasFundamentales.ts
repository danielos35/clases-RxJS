/*
OBSERVABLES.
- Son la fuente de información.
- Puede emitir varios valores o uno solo. 
- Pueden emitir errores.
- Pueden ser infinitos o finitos (En caso de ser finitos ellos mismo spueden compettarsen).
- Pueden ser sincronos o asyncronos. (Uno de sus fuertes es trabajar de manera asincrona). 


SUBSCRIBERS.
- Se subscriben a un observable (están pendientes de lo que realiza un observable); 
- Consumen o observan la data que proviene del observable. 
- Pueden recibir los errores o eventos del observable.
- Desconocen todo lo que se encuentra detras en el observable.     

OPERATORS.
- Pieza fundamental de las extensiones reactivas. 
- Utilizados para transformar los observables. (map, group, scan).
- Utilizados para filtrar observables. (filter, distinct, skip, debounce).
- Crear nuevos observables





*/ 