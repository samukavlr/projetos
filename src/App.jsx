import {useState} from 'react';
import './App.css';
import Header from './Header';

function App() {
  function handleButtonClick(){
    alert ('clicou no botão')
  }

  function soma(a,b){
    return a+b
  }
  const [contador, setContador]= useState(0);
  //let contador= 0
  function handleButtonContar(){
   setContador (contador+1);
   
  }
  return (
     <div className="App">
      <Header title="meu primeiro componente React"/>
      <Header title="um componente props"/>
      <h2>
        Senac Campinas
        <div>Retorno da Soma é : <br />{soma(10,20)}</div>
      </h2> 
      <button onClick={handleButtonClick}>Click me! </button> 
      <Header title={contador}/> 
      <button onClick={handleButtonContar}>contar </button> 
      
      
     </div>
  );
}

export default App;
