import "./App.css";
import LineChart from "./assets/Components/Line Chart/LineChart";
import Navbar from "./assets/Components/Navbar/Navbar";
import PriceOption from "./assets/Components/Price Section/PriceOption";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
    </div>
  );
}

export default App;
