import './App.css';

function App() {
  const name = "Thiago  "

  function sum(a, b){
    return a+b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Olá, {name}</p>
      <p>{sum(1,2)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
