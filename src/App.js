import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Home from "./components/Home";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Basic from "./components/contactUsFormik";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
       
      },
      {
        path: "about",
        element: <About />,
       
      },
      {
        path: "contact",
        element: <ContactUs />,
       
      },
      {
        path: "post",
        element: <Posts />,
       
      },
      {
        path: "post/postDetails/:id",
        element: <PostDetails />,
       
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
