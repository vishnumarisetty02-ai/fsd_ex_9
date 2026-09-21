import { useState } from "react";
import Counter from "./Counter";
import DisplayCounter from "./DisplayCounter";

function LiftedCounter() {

  const [count, setCount] = useState(0);

  return (
    <div className="lifted-box">

      <h2>Lifting State Up</h2>

      <Counter
        count={count}
        setCount={setCount}
      />

      <DisplayCounter
        count={count}
      />

    </div>
  );
}

export default LiftedCounter;