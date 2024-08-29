import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Contact from "./pages/Contact/Contact.jsx";
import CV from "./pages/CV/CV.jsx";
import Home from "./pages/Home/Home.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Error from "./components/Error/Error.jsx";
import './App.css';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Root/>, errorElement: <Error/>, children: [
      { path: "/", element: <Home/> },
      { path: "/experience", element: <Experience/> },
      { path: "/curriculum-vitae", element: <CV/>},
      { path: "/contact", element: <Contact/> }
    ]}
  ]);

  return (
    <RouterProvider router={router}/>
  )

}

export default App;
