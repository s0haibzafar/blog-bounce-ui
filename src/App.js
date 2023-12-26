import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import styles from './App.module.css';
import Protected from "./components/Protected/protected";
import Errorr from "./pages/error/error";

function App() {
  const isAtuh = false;
  return (
    <>
      <div className={styles.container}>
        <BrowserRouter>
          <div className={styles.layout}>
            <Navbar />

            <Routes>
              <Route
                path="/"
                exact
                element={
                  <div className={styles.main}>
                    <Home />
                  </div>
                }
              />

              <Route
                path="crypto"
                exact
                element={<div className={styles.main}>Crypto Page</div>}
              />
              <Route
                path="blogs"
                exact
                element={
                  <Protected isAtuh={isAtuh} >
                    <div className={styles.main}>Blogs Page</div>
                  </Protected>}
              />
              <Route
                path="submit"
                exact
                element={
                  <Protected isAtuh={isAtuh} >
                    <div className={styles.main}>Submit Page</div>
                  </Protected>
                }
              />
              <Route
                path="login"
                exact
                element={<div className={styles.main}>Login Page</div>}
              />
              <Route
                path="register"
                exact
                element={<div className={styles.main}>Register Page</div>}
              />

              <Route
                path="*"
                element={<div className={styles.main}><Errorr/></div>}
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
