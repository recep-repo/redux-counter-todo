import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import counterReducer from "../../redux/reducer/counterReducer";
import { decrease, increase, reset } from "../../redux/actions/counterActions";



const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter)
  const dispatch = useDispatch()



  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch(increase())}  className="counter-button positive">incease</button>
        <button onClick={() => dispatch(reset())}  className="counter-button zero">reset</button>
        <button onClick={() => dispatch(decrease())} className="counter-button negative">decrease</button>
      </div>
    </div>
  );
};

export default Counter;
