import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header title="The Job Board" />
      <div className="container">
        <Jobs />
      </div>

      <Footer content="Made with React at Le Reacteur By Emilie Leury" />
    </div>
  );
};

export default App;
