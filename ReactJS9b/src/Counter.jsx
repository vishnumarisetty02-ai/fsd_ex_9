function Counter({ count, setCount }) {
  return (
    <div className="counter-box">

      <h3>Counter Component</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

    </div>
  );
}

export default Counter;