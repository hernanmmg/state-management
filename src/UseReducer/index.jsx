import { useReducer } from 'react';
 
const UseReducer = () => {
const [state, dispatch] = useReducer((state, action) => {
  switch(action.type) {
    case "SET_NAME":
      return {
        ...state, name: action.payload
      };
    case "ADD_NAME":
      return {
        ...state,
        names: [...state.names, state.name],
        name: ""
      };
    }
  }, {
    name: "",
    names: []
  });
 
  return (
    <>
        <p>Name:</p>
        <div>
          <input type="text" value={state.name} onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})} />
        </div>
        <div>
          <button type='button' onClick={() => dispatch({type: "ADD_NAME"})}>Add Name</button>  
        </div>
        <p>{state.name}</p>
        <ul>  
        {state?.names.map((name, idx) => {
          return (
          <li key={idx}>{name}</li>)
        })}
        </ul>
    </>
  );
}
 
export { UseReducer };