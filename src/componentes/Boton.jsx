import React from "react";
import '../hojas-de-estilo/Boton.css';

//Props.child todo lo que este
/**dentro del componente boton va
 * a volverse una props children
 */
/**``para ocupar js */
/**Si el resultado no el valor retornado
 * de esa funcion es verdadero entonces se va a reemplazar por
 * operador y si es falsa se return null y no pasara nada
 * en la clase
 * Para eliminar el espacio de la plantilla ocupamos 
 * el metodo trim()
 */
/**Si valor no es un numero y tampoco es un punto
 * y si tampoco es el signo = entonces lo considera como un operador
 * osea true
 */
function Boton(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };
    return (
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick = {() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;