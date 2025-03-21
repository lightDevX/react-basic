import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LineChart from "./components/ReactChart/LineChart/LineChart";

function App() {
  // const [bookMarks, setBookMarks] = useState([]);

  // const handleBookMark = (blog) => {
  //   const newBookMarks = [...bookMarks, blog];
  //   setBookMarks(newBookMarks);
  // };

  return (
    <>
      <section className="mx-auto max-w-7xl">
        <NavBar></NavBar>

        <LineChart></LineChart>
      </section>
    </>
  );
}

export default App;
