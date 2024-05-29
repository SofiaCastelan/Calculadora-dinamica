import React from "react";
import '../hojas-de-estilo/Pantalla.css';

//Forma de definir componentes funcionales
//Primero lo definimos como constante
//le asignamos funcion flecha para decirle que vamos a retornar un valor 
//que es la estructura del componente
const Pantalla = ({ input }) => (
    <div className="input">
        { input }
    </div>
);


export default Pantalla;