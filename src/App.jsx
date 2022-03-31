import './App.css';
import Header from './Header';

function App() {
  function handleButtonClick(){
    alert ('clicou no botão')
  }

  function soma(a,b){
    return a+b
  }
  return (
    <>
      <Header title="meu primeiro componente React"/>
      <Header title="um componente props"/>
      <h2>
        Senac Campinas
        <div>Retorno da Soma é : <br />{soma(10,20)}</div>
      </h2> 
      <button onClick={handleButtonClick}>Click me! </button>     
      
    </>
  );
}

export default App;
