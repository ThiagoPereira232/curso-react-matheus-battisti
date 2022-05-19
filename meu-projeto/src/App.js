import './App.css';
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista'

function App() {

  const meusItens = ['item1', 'item2', 'item3']

  return (
    <div className="App">
      <Condicional />
      <OutraLista items={meusItens}/>
      <OutraLista items={[]}/>
    </div>
  );
}

export default App;
