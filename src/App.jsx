import "./App.css";
import Fruits from "./components/Fruits/Fruits";

function App() {
  // const actors = ["Rajjak", "Salman Shah", "Rubel", "Iliash"];

  return (
    <>
      {/* <h1 className="py-2 text-center text-3xl font-bold text-red-300">
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
      </section> */}

      <section className="mx-auto max-w-7xl">
        {/* <Countries></Countries> */}
        <Fruits></Fruits>
      </section>
    </>
  );
}

export default App;
