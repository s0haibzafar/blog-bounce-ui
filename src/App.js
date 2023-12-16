import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
         <div>
            <Navbar />

            <Routes>
              <Route
               path="/"
               exact
               element={<Home />}
              />

            </Routes>
             
            <Footer />
         </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
