import './App.css';
import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  return (
    <div className="App">
      <Frase />
      <HelloWord/>
      <SayMyName nome="Thiago" />
      <SayMyName nome="Maria" />
      <Pessoa nome="Rodrigo" idade="28" profissao="Programar" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
