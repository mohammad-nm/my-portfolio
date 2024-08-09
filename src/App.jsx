import Id from "./components/Id.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import AboutMe from "./components/Aboutme.jsx";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <Id />
          <AboutMe />
          <Contact />
        </div>
        <div className=" ">
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
