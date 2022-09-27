import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let [txt, setTxt] = useState();
  let [list, setlist] = useState([]);

  function add() {
    list.push(txt);
    setlist([...list]);
  }


  const deleteall = (i) => {
    const updateditems = list.filter((txt) => {
      return i !== txt.value;
    });

    setlist(updateditems);

  }


  const onDelete = (txt) => {
    setlist(list.filter((e) => {
      return e !== txt;
    }));
    console.log("deleted", list)
  }


  return (
    <div className="App">
      <header className="App-header">

        <h3>Todo App</h3>

        <input onChange={(e) => {
          setTxt(e.target.value);
          console.log(txt)

        }} />
        <br />
        <button onClick={() => add()}>ADD</button> <br />
        <button onClick={() => deleteall(txt.value)}>Delete All</button>


        {/* Print The Input */}
        <ul>{list.map((e, i) => {
          return <li key={i}>{e} &nbsp; <button>Edit</button><button onClick={() => onDelete(e)}>Delete</button> </li>
        })}
        </ul>




      </header>
    </div>
  );
}

export default App;
