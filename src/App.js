import './App.css';

function App() {

  const persons = [
    {
      "id": 1,
      "name": "Olintho"
    },
    {
      "id": 2,
      "name": "Roseli"
    },
    {
      "id": 3,
      "name": "Erica"
    },
    {
      "id": 4,
      "name": "Isabela"
    }
  ]



  return (
    <>
      <form>
        
        <input id="id" type="text" placeholder="id" />
        <input id="Nome" type="text" placeholder="Nome da Pessoa"/>
        <button>+Pessoa</button>
      </form>
      <div className="mt-3">
          <span>Iniciando o projeto</span>
            <ul className="list-group">
              {persons.map(person => (
                <li key={person.id} className="list-group-item">
                  {person.id } - {person.name}
                </li>
              ))}
            </ul>
      </div>
    </>
  );
}

export default App;
