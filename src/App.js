import logo from './logo.svg';
import './App.css';
import Componente from './Componente';
import NovoComponente from './NovoComponente';

function App() {
  const n = 10;

  return (
    <div className="App">
      {/* css com componente module */}
      <NovoComponente />
      {/* css com componente */}
      <Componente />
      {/* css global */}
    <h1>Meu incrivel texto</h1>
    <p>Lorem ipsum, dolor sit amet</p>

    {/* css inline */}
    <h2 style={{
      color: "blue", 
      backgroundColor:"violet", 
      padding:"5px"
    }}
    > 
      O mesmo texto 2 
    </h2>
    <h2> O mesmo texto 3 </h2>

    {/* Css com if ternario */}

    <h3 style={
      n >=10
      ? {color:"green", backgroundColor:"yellow"}
      :{color:"red", backgroundColor:"blue"}
      }>
      Ta diminuindo o texto hein
    </h3>
    <h3 style={
      n < 10
      ? {color:"green", backgroundColor:"yellow"}
      :{color:"red", backgroundColor:"blue"}
      }>
      Ta diminuindo o texto hein
    </h3>

    </div>
  );
}

export default App;
