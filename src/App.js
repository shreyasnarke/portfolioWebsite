import { BrowserRouter as Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Resume from "./Pages/Resume";
function App() {
  return (
    //import { BrowserRouter as  Router,Routes,Route} from "react-router-dom";

    // <Router>
    //   <Header/>
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/technologies" element={<Technologies />} />
    //     <Route path="/resume" element={<Resume />}/>
    //   </Routes>
    //   <Footer/>
    // </Router>
    
    <div className="App">
      <div className="App-container">
      <div>
        <Home/>
          <Route path="/" element={<Home/>} />
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Technologies/>
      </div>
      <div>
        <Contact/>
      </div>
      </div>  
    </div> 
  );
}
export default App;