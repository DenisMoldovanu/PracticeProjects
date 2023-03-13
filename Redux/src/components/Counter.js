import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state)=> state.counter.showCounter)
  // const text = useSelector(state => state.text)
  // console.log(text)


  const incrementHandler = ()=> {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  // const setText = () => {
  //   dispatch({type: 'setText'})
  // } 
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      {/* <div className={classes.value}>{text}</div> */}

      <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={increaseHandler}>increase by 5</button>
      <button onClick={decrementHandler}>decrement</button>
      {/* <button onClick={setText}>Set Text</button> */}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
