import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT } from './type/type'
import { inc } from './actions/action'
function App() {

  //4-access data from store reducer with useSelector
  const count = useSelector(state => state.redCounter.counter)

  const isLog = useSelector(state => state.Auth.isLog)

  console.log(isLog)
  //5-change data in reducer with dispatch
  const dispatchCounter = useDispatch();


  return (
    <div >
      <h3>Counter:</h3>
      <h3>{count}</h3>
      {isLog === true ? <h3>you user</h3> : <h3>you not user please register</h3>}

      <button onClick={() => dispatchCounter({ type: 'INCREMENT' })} >Increace</button>
      <button onClick={() => dispatchCounter({ type: 'DECERMENT' })}>Decreace</button>
      <button onClick={() => dispatchCounter({ type: 'RESET' })}>Reset</button>
      
      <button onClick={() => dispatchCounter({ type: 'IsLogin' })}>Make User</button>
      <button onClick={() => dispatchCounter({ type: 'NotLogin' })}>Not User</button>
    </div>
  );
}

export default App;
