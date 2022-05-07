import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const nome = "Oliveira";

  return (
    <div className="App">
      <HelloWorld />
      <Frase />
      <SayMyName nome="Willy"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Willy" idade="25" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
