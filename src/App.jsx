import handleClick from "../utils/event";
import "./App.css";
import Posts from "./components/Posts/Posts";
import UseEff from "./components/useEffect/UseEff";

function App() {
  const actors = ["Rajjak", "Salman Shah", "Rubel", "Iliash"];

  return (
    <>
      <h1 className="py-2 text-center text-3xl font-bold text-red-300">
        {actors.map((actor) => (
          <li key={actor.key}>{actor}</li>
        ))}
      </h1>
      <button onClick={handleClick}>Click Me</button>

      <section>
        <UseEff />
      </section>
      <section>
        <Posts></Posts>
      </section>
    </>
  );
}

export default App;
