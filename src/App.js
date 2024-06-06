import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";
import MusicPage from "./components/pages/MusicPage";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import HooksExamples from "./components/LearnHooks/HooksExamples";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HooksExamples />
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/music",
    element: (
      <Layout>
        <MusicPage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
