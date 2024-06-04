import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
