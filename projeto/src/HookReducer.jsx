import { useReducer } from 'react'; 
import './App.css';


function reducer(state, action){
    switch(action.type){
        case "Click":
            return {count: state.count + 1, text: !state.text}
    }
}


function App() {


    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: ture,
    })




    /*useEffect(() => {
        // Esta função será chamada sempre que `count` mudar.
        if (count % 2 !== 0) {
            setText(true);
        } else {
            setText(false);
        }

    }, [count]); // Dependência: count*/

    function Counter() {
        dispatch({type:'Click'})
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
