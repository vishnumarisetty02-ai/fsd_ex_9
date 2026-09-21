import Parent from "./Parent";
import LiftedCounter from "./LiftedCounter";
import { useTheme } from "./ThemeContext";
import "./App.css";

function App() {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <h1>Sharing Data Between Components</h1>

      {/* Context API */}
      <button onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Section 1 */}
      <section>
        <h2>1. Props Drilling</h2>

        <p>
          Data is passed from App → Parent → UserProfile.
        </p>

        <Parent
          name="Surya"
          email="surya@example.com"
          course="Computer Science"
        />
      </section>

      {/* Section 2 */}
      <section>
        <h2>2. Lifting State Up</h2>

        <p>
          Counter state is shared between two sibling components.
        </p>

        <LiftedCounter />
      </section>

      {/* Section 3 */}
      <section>
        <h2>3. Context API</h2>

        <p>
          Current Theme: <strong>
            {darkMode ? "Dark" : "Light"}
          </strong>
        </p>

        <p>
          The theme is shared globally using Context API.
        </p>

      </section>

    </div>
  );
}

export default App;