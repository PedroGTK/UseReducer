import { useState, useReducer } from 'react'; // Importando useEffect
import './App.css';

function reducer(state, action){
  switch(action.type){
    case "Click":
      return {count: state.count +1, text: !state.text}
  }
}


function App() {
    /*const [count, setCount] = useState(0);
    const [text, setText] = useState(true);*/
    const [state, dispatch] = useReducer (reducer,{
      count: 0,
      text: true
    })



    function Counter() {
      dispatch({type: 'Click'})
        setCount((count) => count + 1);
    }

    return (
        <>
            <h1>Contador</h1>
            <div className='card'>
                <button onClick={Counter}>A contagem é {state.count}</button>
                {state.text === true && <p> Olá </p>}
            </div>
        </>
    );
}

export default App;
