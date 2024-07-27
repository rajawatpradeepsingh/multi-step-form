import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import FormContainer from "./components/formik/FormContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form/*"
          element={
            <main className="flex flex-row max-h-screen h-screen-minus-header max-w-full border-t border-gray-300">
              <FormContainer />
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
