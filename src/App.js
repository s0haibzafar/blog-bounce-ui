import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import styles from './App.module.css'

function App() {
  return (
    <>
      <div className={styles.container}>
        <BrowserRouter>
         <div>
            <Navbar />

            <Routes>
              <Route
               path="/home"
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
