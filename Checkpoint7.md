# ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

Un lenguaje de programación son un conjunto de reglas que nos permiten indicar, de forma escrita, instrucciones a un ordenador.
Los lenguajes de programación se pueden clasificar en función de muchos criterios, pero hay uno clave y es el NIVEL  del lenguaje, JavaScript es un lenguaje de muy alto nivel.

Una de las diferencias más importantes entre JavaScript y otros lenguajes de programación,  es que JavaScript es el único lenguaje de programación que un navegador Web puede entender.
JavaScript se define como orientado a objetos, basado en prototipos, débilmente tipado y dinámico.

- **Lenguaje interpretado:** muchos lenguajes de programación se compilan antes de ejecutarse, JavaScript es un lenguaje interpretado. Esto significa que el código fuente se ejecuta directamente por un intérprete en tiempo de ejecución, qué es el encargado de traducirlo a un lenguaje que el ordenador pueda entender, lo que facilita la creación y la ejecución de scripts en el navegador web. Esto es un poco más lento porque al ser en tiempo real se pierde tiempo en traducir. 
- **Lenguaje de programación del lado del cliente:** se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas
- **Tipado dinámico y débil:** JavaScript es un lenguaje de tipado dinámico y débil, lo que significa que las variables no están asociadas a ningún tipo de datos específico y pueden cambiar de tipo durante la ejecución del programa. Esto proporciona flexibilidad pero también puede llevar a errores difíciles de detectar.
- **Basado en prototipos:** en la orientación a prototipos, en lugar de tener clases, tienes objetos individuales que pueden ser clonados o extendidos para crear nuevos objetos. Los objetos pueden heredar propiedades y métodos de otros objetos.
- JavaScript es uno de los lenguajes de programación más utilizados en el mundo, especialmente en el  desarrollo web, esto hace que disponga de grandes cantidades de bibliotecas, frameworks y herramientas que hacen que sea más fácil y rápido desarrollar aplicaciones web.

   ![](https://blog.hubspot.es/hubfs/media/usosjavascript.png)
   
Es importante tener en cuenta que diferentes navegadores pueden utilizar motores de JavaScript distintos, como V8 en Chrome o SpiderMonkey en Firefox, lo que puede dar lugar a diferencias sutiles en el rendimiento y las características compatibles.

Esta imagen es un ejemplo de cómo JavaScript trabaja.
 ![](https://blog.hubspot.es/hubfs/media/javascriptcodigo.png)

##### Para ampliar conocimientos
Te recomiendo que revises la siguiente documentación de JavaScript dónde podrás aprender sobre variables, tipos de datos de JavaScript, operadores básicos, etc...
<https://es.javascript.info/>
https://desarrolloweb.com/manuales/manual-javascript.html#subtitle1


# ¿Cuáles son algunos tipos de datos JS?
Como hemos comentado antes JavaScript es un lenguaje débilmente tipado y dinámico, lo que significa que una variable puede contener diferentes tipos de datos en momentos diferentes durante la ejecución del programa.

Vamos a ver los tipos de datos, y los vamos a dividir en 2 grupos:
- **Tipos de datos primitivos:** son aquellos que representan valores simples y se acceden directamente, sin hacer referencia a objetos. Son inmutables, no se pueden modificar directamente. Cuando asignas un nuevo valor a una variable que contiene un tipo de dato primitivo, estás creando un nuevo valor en la memoria en lugar de modificar el valor existente.
     - **Number:** Representa números, sin comillas y se utiliza el punto (.) como separador decimal.
         ```
            var age = 12;
            console.log(age); // 12
         ```
    - **String:** Representa cadenas de texto. Se pueden crear utilizando comillas simples (' ') o dobles (" ").
        ```
            var name = "Kristine";
            var nameTwo = 'Jordan';
            console.log(name, nameTwo); // Kristine //Jordan
        ```
    - **Boolean:** Representa un valor lógico verdadero o falso. Los valores son true o false.
        ```
        Ejemplo: saber si un usuario es miembro de pago o gratuito
        var truthy = true;
        var noTruthy = false;
        console.log(truthy); //True
        ```
    - **Undefined:** Valor no definido. Declaramos una variable pero no la inicialiamos, no le asignamos ningún valor.
    Es útil porque verifica si el valor está definido o no, puede ser que creas que asignaste un valor y si sale undefined te das cuenta que se te paso asignarlo.
        ```
        var notDefined;
        console.log(notDefined); //undefined
        ```
    - **Null:** Cuando queremos indicar que hay un valor vacío, variable declarada e inicializada pero con valor null.
        ```
        Ejemplo: tienes una página de registro y hay campos opcionales que no se han rellenado, se quedan con valor null.
        var nully = null;
        console.log(nully); // null
        ```
    - **Symbol:** Representa un identificador único. Se utiliza para crear propiedades de objeto únicas. 
        ```
        let sym = Symbol('descripcion');
        ```
- **Tipos de datos especiales:** Son tipos de datos compuestos o estructurales, ya que pueden contener múltiples valores y/o comportamientos.

    - **Objeto:** Los objetos en JavaScript son colecciones de pares clave-valor.Pueden contener cualquier tipo de dato como valor, incluidos otros objetos, arrays y funciones. Se definen utilizando llaves {}.
        ```
        var user = {
            name:"kristine",
            age:30,
        }
        console.log(user.name); //"kristine"
        ```
    - **Array:** Estructuras de datos que almacenan una lista ordenada de elementos. Pueden almacenar diferentes tipos de datos: strings, números, objetos, otros arrays,... Se definen utilizando corchetes [].
        ```
        Array unidimensional
        
        const listaCompra = ['Lentejas', 'Arroz', 'Patatas', 'Chocolate'];
        console.log(listaCompra[1]); // "Arroz"  
        **Se accede a los elementos con el índice, empezando con el índice 0**
    
       Array multidimensional
       
        const supermercado = [
            ['Pollo', 'Cerdo'],
            ['Dorada', 'Salmón', 'Trucha'],
            ['Cereales', 'Galletas', 'Pan']
        ];
        console.log (supermercado[0][1]; // "Cerdo"   
        ```
    - **Función:** Se consideran tipos de datos, son bloques de código que pueden ser reutilizados y ejecutados en diferentes partes de un programa. Pueden tomar argumentos y devolver valores.
    Se pueden asignar a variables, pasar como argumentos y devolverse como valores de otras funciones.
    Las funciones primero se declaran , con la palabra reservada **function** y su nombre , y luego hay que llamarla o ejecutarla. Si queremos que devuelva un valor utilizamos la palabra reservada **return** seguida del valor a devolver.
        ```
        function saludar(nombre){
            return "Hola" + nombre + "!";
        }
        saludar("Carlos"); // "Hola Carlos!" **Llamamos a la función saludar pasandole un argumento.
        ```

# ¿Cuáles son las tres funciones de String en JS?
En JavaScript las funciones son objetos y como tal, tienen métodos/funciones que nos permiten  realizar ciertos tipos de consultas de valor sobre ellos.
Los métodos de cadena son útiles para realizar operaciones como búsqueda, reemplazo, extracción de subcadenas y más, vamos a ver algunas de ellas:

- **length:** Esto no es un a función es una propiedad y se utiliza mucho. Lo utilizamos para obtener la longitud de un string (el nº de carácteres incluidos los espacios).
    ```
    const str = 'The quick brown fox jumped over the lazy dog';
    str.length; //44
    ```    
- **concat():** como concatenar strings. Lo combina y lo agrega al final del string. NO MODIFICA EL VALOR DE LA VARIABLE ORIGINAL.
    ```
    const str = 'The quick brown fox jumped over the lazy dog';
    const newStr = str.concat(' again and again'); **Guardamos el resultado en una nueva variable.
    console.log(str); // "The quick brown fox jumped over the lazy dog"
    console.log(newStr); // "The quick brown fox jumped over the lazy dog again and again"
    ```    
- **toUpperCase():** Convierte a mayùsculas un string. NO MODIFICA EL STRING ORIGINAL.
    ```
    const str = 'The quick brown fox jumped over the lazy dog';
    console.log(str.toUpperCase()); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
    ```   
- **trim():** Quita los espacios en blanco de string. Útil porque hay veces que el usuario puede meter datos y a su vez, espacios que no queremos.
    ```
    const str = '   quick    ';
    console.log(str.trim()); // "quick"
    console.log(str.trimStart()); // "quick    " **Quita espacios del inicio
    console.log(str.trimEnd()); // "   quick" **Quita espacios del final
    ```  

![](https://media.licdn.com/dms/image/C4E22AQGU6SkhUfL-Yg/feedshare-shrink_800/0/1667648864034?e=2147483647&v=beta&t=AGyOUBAyfat8rcbagRiwF3Io5mPYVk7kjXKsEoMTS1Y)

##### Para ampliar conocimientos
Te dejo un enlace dónde puedes consultar las funciones o métodos de los strings:
<https://www.w3schools.com/js/js_string_methods.asp>

# ¿Qué es un condicional?
Los condicionales son expresiones que nos permiten ejecutar una secuencia de instrucciones u otra diferente dependiendo lo que estemos probando.
Nos permiten hacer que determinadas líneas o bloques de líneas solo se ejecuten cuando se cumplan algunas condiciones. Puede ser excluyentes.

- **Condicional if/else:** Permite crear un bloque de código que van a comprobar si se está cumpliendo una condición y en base de si se cumple o no, van a realizar unas acciones u otras.
    ```
    var edad = 20;
    **Comprobamos si la edad es mayor o igual a 18
    if (edad >= 18) {
        console.log("Eres mayor de edad."); // Como cumple la condicion entra en el if
    } else {
        console.log("Eres menor de edad.");
    }
    ```
- **Condicionales compuestos if/else/if:** Para realizar varias comprobaciones podemos concatenar varias secuencias if/else/if,.. y se iran comprobando en orden.
    ```
    var numero = 10; 
    **Comprobamos si el número es mayor que cero
    if (numero > 0) { 
        console.log("El número es positivo");
    } else if (numero < 0) { // Si no es mayor que cero, comprobamos si es menor que cero
        console.log("El número es negativo");
    } else { // Si no es ni mayor que cero ni menor que cero, entonces es igual a cero
        console.log("El número es igual a cero");
    }
    ```  
- **Switch:** Nos permite ejecutar bloques de código en base al valor de una variable. Comprueba la condición, y según el caso que devuelva, ejecutará un bloque u otro. Para separar los bloques se utiliza la palabra **break**, lo que detiene la ejecución y evita que se ejecuten los casos siguientes.
También tiene un bloque **default** si no hay coincidencia con ningún caso.
    ```
    var diaDeLaSemana = 3;
    var nombreDia;

    switch (diaDeLaSemana) {
        case 1:
            nombreDia = "Lunes";
            break;
        case 2:
            nombreDia = "Martes";
            break;
        case 3:
            nombreDia = "Miércoles";
            break;
        case 4:
            nombreDia = "Jueves";
            break;
        case 5:
            nombreDia = "Viernes";
            break;
        case 6:
            nombreDia = "Sábado";
            break;
        case 7:
            nombreDia = "Domingo";
            break;
        default:
            nombreDia = "Día no válido";
    }
    console.log("Hoy es " + nombreDia); // "Hoy es Miércoles"
    ```  
    
# ¿Qué es un operador ternario?
El operador ternario se utiliza para realizar condicionales, es una alternativa al if/else de una forma mucho más compacta y breve, que en muchos casos resulta más legible. Sin embargo, hay que tener cuidado, porque su sobreutilización puede ser contraproducente y producir un código más difícil de leer.
### Sintaxis
            condición ? valor verdadero : valor falso;

**Ejemplo con if/else**
```
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

if (nota < 5) {
  // Acción A: nota es menor que 5
  calificacion = "suspendido";
} else {
  // Acción B: Cualquier otro caso diferente a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}
console.log("Estoy", calificacion); // "He realizado mi examen. Mi resultado es el siguiente:"
"Estoy" "aprobado"
```  
**Ejemplo con operador ternario**
```
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion); // "He realizado mi examen. Mi resultado es el siguiente:"
"Estoy" "aprobado"
```  
**Ejemplo con operador ternario anidado**
```
let nota = 7;
console.log("He realizado mi examen.");

let calificacion =
  nota < 5 ? "Insuficiente" :(nota < 6 ? "Suficiente" :(nota < 8 ? "Bien" :(nota <= 9 ? "Notable" : "Sobresaliente")));

console.log("He obtenido un", calificacion); // "He realizado mi examen."
"He obtenido un" "Bien"
```  

# ¿Cuál es la diferencia entre una declaración de función y una expresión de función?
Las funciones en cualquier lenguaje de programación son una parte fundamental de cómo organizamos nuestro código. JavaScript al ser un lenguaje dinámico tiene ciertos mecanismos para garantizar que la ejecución de nuestro código sea la más óptima y correcta.


Una **declaración de función** la hace disponible para todo el programa, incluyendo el código que está antes de la declaración de la función. Alcance global. Hay que ponerlas siempre fuera de algunas expresiones como en los condicionales.
 - **Sintaxis** 
    ```
        function suma1(a, b) {
            return a + b
        }
    ```
Una **expresión de función** no es posible referenciarla antes de la expresión, porque realmente no se trata de una función declarada, sino del valor asignado a una variable y, por tanto, hasta que no se defina la variable no se puede utilizar. Alcance local.
Se pueden poner dónde las necesitemos, son más modulares.
 - **Sintaxis** 
    ```
        var sum = function(a,b) {
            return a + b;
        };
    ```
Es importante saber que cuando nuestro código JavaScript se ejecuta, el intérprete mueve todas las declaraciones de nuestro programa al inicio.    
El intérprete de JavaScript lo que realmente hace es declarar todas las variables y funciones primero antes de asignar y ejecutar cualquier otro valor.
Vamos a ver un ejemplo de esto:
    
```
**Bloque de código**

var nombre = "Rick"
var apellido = "Sanchez"
function nombreCompleto(primero, segundo) {
    return `${primero} ${segundo}`
}
var pintarEdad = function (numero) {
    console.log(`la edad es de ${numero} años`)
}
```
```
**Orden real de como se ejecuta**

// declaraciones primero
var nombre;
var apellido;
function nombreCompleto(primero, segundo) {
    return `${primero} ${segundo}`
}
var pintarEdad;

// asignaciones después
nombre = "Rick"
apellido = "Sanchez"
pintarEdad = function(numero) {
    console.log(`la edad es de ${numero} años`)
```
A este "reorden" se le llama **Hoisting**, la declaración y la inicialización de una variable o función ocurren en momentos distintos, incluso cuando los escribes en la misma línea.
La mejor práctica es enumerar siempre las variables directamente en la parte superior de sus programas.

# ¿Qué es la palabra clave "this" en JS?
La palabra clave **this** siempre se refiere a un objeto, lo que pasa es que el objeto al que se refiere variará dependiendo de cómo y dónde se llame this.
**This** no es una variable, es una palabra clave por lo que su valor no se puede cambiar ni reasignar.

- Podemos usar **this** para acceder a otras propiedades o métodos desde el mismo objeto.
    ```
     let user ={
        name: "Ainhoa",
        lastName: "Alonso",
        age: 42,
        getFullName: function(){
            return this.name + " " + this.lastName;
        }
    };
    console.log(user.getFullName()); //"Ainhoa Alonso"
    ```
- Podemos usar **this** se refiere al objeto en el que se está llamando el método. Por lo tanto, cuando user.getThis() se ejecuta, devuelve una referencia al objeto user.

```
const user = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getThis : function() {
      return this;
    }
};

console.log('this in object method', user.getThis()); // "this in object method" // [object                                                              Object] 
                                                        {
                                                            "firstName": "John",
                                                            "lastName": "Doe",
                                                            "id": 5566,
                                                            "getThis": function () {\n    return             this;\n  }
                                                        }
```
- Podemos usar **this** en un detector de eventos, this se referirá al elemento DOM que activó el evento.
```
Agregamos el detector de eventos a un elemento botón con id = "testBtn"

document.getElementeById('testBtn').addEventListener('click', function(){
    console.log('Esto en un evento', this); // This in a even <button id ="testBtn">TEST</button>
}
```












