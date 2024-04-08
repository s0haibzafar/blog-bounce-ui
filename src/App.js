import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Cryptocoin from "./pages/cryptocoin/cryptocoin";
import Blog from "./pages/blog/blog";
import BlogDetail from "./pages/blogDetail/blogDetail";
import UpdateBlog from "./pages/updateBlog/blogDetail/updateBlog";
import SubmitBlog from "./pages/submitBlog/submitBlog";
import styles from './App.module.css';
import Protected from "./components/Protected/protected";
import Errorr from "./pages/error/error";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { useSelector } from "react-redux";
import useAutoLogin from "./hooks/useAutoLogin";
import Loader from "./components/loader/loader";

function App() {
  const isAtuh = useSelector((state) => state.user.auth);

  const loading = useAutoLogin();

  return loading ? <Loader text='...' /> : (
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
                element={<div className={styles.main}><Cryptocoin /></div>}
              />
              <Route
                path="blogs"
                exact
                element={
                  <Protected isAtuh={isAtuh} >
                    <div className={styles.main}><Blog /></div>
                  </Protected>}
              />
              <Route
                path="blog/:id"
                exact
                element={
                  <Protected isAtuh={isAtuh} >
                    <div className={styles.main}><BlogDetail /></div>
                  </Protected>}
              />
              <Route
                path="blog/update/:id"
                exact
                element={
                  <Protected isAtuh={isAtuh} >
                    <div className={styles.main}><UpdateBlog /></div>
                  </Protected>}
              />
              <Route
                path="submit"
                exact
                element={
                  <Protected isAtuh={isAtuh} >
                    <div className={styles.main}><SubmitBlog /> </div>
                  </Protected>
                }
              />
              <Route
                path="login"
                exact
                element={<div className={styles.main}> <Login />  </div>}
              />
              <Route
                path="register"
                exact
                element={<div className={styles.main}><Register /></div>}
              />

              <Route
                path="*"
                element={<div className={styles.main}><Errorr /></div>}
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
