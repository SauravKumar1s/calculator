import "./App.css";
import ChooseSideWidthProfile from "./components/calculatorbox/ChooseSideWidthProfile";
import TypeOfSign from "./components/calculatorbox/TypeOfSign";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl h-screen border-8 border-[#848080]">
        <Navbar />
        <ChooseSideWidthProfile/>
        {/* <TypeOfSign/> */}
      </div>
    </>
  );
}

export default App;
