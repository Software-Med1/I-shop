import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Home from "./Pages/home";
import Blogs from "./Pages/blogs";
import Blog from "./Pages/blog";
import Add from "./Pages/add";
import FetchContextProvider from "./Components/fetchContext";

function App() {

    return (
    <>
      <div className="container" >
        <FetchContextProvider>
        <BrowserRouter>
          <Nav />
          <div className="content container">
          <Routes>
          
            <Route 
            path="/"
            element={<Home />}
            />
            
            <Route 
            path="/blogs"
            element={<Blogs />}
            />
            
            <Route 
            path="/blogs/:category"
            element={<Blogs />}
            />
            
            <Route 
            path="/blog/:id"
            element={<Blog />}
            />
            
            <Route 
            path="/add"
            element={<Add />}
            />
            
           </Routes>
          </div>
          </BrowserRouter>
          </FetchContextProvider>
        </div>
      <Footer />
    </>
    );
}

export default App;
