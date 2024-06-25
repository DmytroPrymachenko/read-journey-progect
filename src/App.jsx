import { Suspense, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Loader } from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { currentThunk, refreshTokensThunk } from "./store/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectExpireTime, selectUser } from "./store/auth/selectors";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { toast } from "react-toastify";
import { setPath } from "./store/books/booksSlise";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const expireTime = useSelector(selectExpireTime);
  const { pathname } = useLocation();
  const loading = useSelector((state) => state.loading.loading);
  const navigate = useNavigate();

  console.log(pathname);
  useEffect(() => {
    if (pathname === "/register" || pathname === "/login") {
      return;
    }
    dispatch(setPath(pathname));
  });

  useEffect(() => {
    if (!user) {
      if (expireTime >= Date.now()) {
        dispatch(currentThunk()).catch((error) => {
          console.error("Error fetching user data:", error);
        });
      } else {
        dispatch(refreshTokensThunk())
          .unwrap()
          .then(() => {
            dispatch(currentThunk()).catch((error) => toast.error(error));
          })
          .catch((error) => toast.error(error));
      }
    }
  }, [dispatch, user, expireTime]);

  useEffect(() => {
    if (pathname === "/") {
      navigate("/recommended");
    }
  }, [pathname, navigate]);

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/recommended"
              element={
                <PrivateRoute>
                  <RecommendPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/library"
              element={
                <PrivateRoute>
                  <MyLibraryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/reading/:id"
              element={
                <PrivateRoute>
                  <ReadingPage />
                </PrivateRoute>
              }
            />
          </Route>

          <>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </>
          <Route path="*" element={<Navigate to="/recommended" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
