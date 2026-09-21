import Counter from "./Counter";
import Posts from "./Posts";
import "./App.css";

function App() {

  return (
    <div className="container">

      <h1>Importance of React Hooks</h1>

      <section>
        <Counter />
      </section>

      <section>
        <Posts />
      </section>

    </div>
  );
}

export default App;