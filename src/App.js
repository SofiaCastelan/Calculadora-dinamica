import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import kuromi from './imagenes/kuromi.jpg'
import { useState } from 'react';
import { evaluate } from 'mathjs'
/**Ocuparemos un Hook */

function App() {


  const [input, setinput] = useState('');

  const agregarInput = valor => {
    setinput(input + valor);
  };

  const calcularResultado = () => {
    if (input){
      
      setinput(evaluate(input));
    
    }else {
      alert("Por favor ingresa valores para realizar calculos")
    }
  };





  return (
    <div className="App">
     <div className='kuromi-logo-contenedor'>
        <img
        src = {kuromi}
        className='kuromi-logo'
        alt = 'Logo de kuromi'
        />
     </div>
     <div className='contenedor-calculadora'>
      <Pantalla input={ input }/>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
          <BotonClear manejarClear = {() => setinput('')}>Clear</BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
