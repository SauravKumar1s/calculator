import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assemblyofthesign from "./components/calculatorbox/Assemblyofthesign";
import CalculateThePrice from "./components/calculatorbox/CalculateThePrice";
import ChooseColorOfProfile from "./components/calculatorbox/ChooseColorOfProfile";
import ChooseSideWidthProfile from "./components/calculatorbox/ChooseSideWidthProfile";
import Divider from "./components/calculatorbox/Divider";
import LEDLightning from "./components/calculatorbox/LEDLightning";
import MaterialOfFace from "./components/calculatorbox/MaterialOfFace";
import TypeOfSign from "./components/calculatorbox/TypeOfSign";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl xl:h-screen h-auto border-8 border-[#848080]">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<TypeOfSign />} />
            <Route
              exact
              path="choose-side-width"
              element={<ChooseSideWidthProfile />}
            />
            <Route
              exact
              path="choose-color-profile"
              element={<ChooseColorOfProfile />}
            />
            <Route exact path="divider" element={<Divider />} />
            <Route exact path="material-of-face" element={<MaterialOfFace />} />
            <Route exact path="led-lighting" element={<LEDLightning />} />{" "}
            <Route
              exact
              path="assembly-of-the-sign"
              element={<Assemblyofthesign />}
            />
            <Route
              exact
              path="/calculate"
              element={<CalculateThePrice />}
            />{" "}
            <Route
              exact
              path="choose-side-width"
              element={<ChooseSideWidthProfile />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
