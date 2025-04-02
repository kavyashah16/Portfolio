import Banner from "./components/banner/Banner";
import Feature from "./components/features/Feature";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full bg-bodyColor h-auto text-lightText">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-12 sticky">
        <Navbar />
        
        <div className="px-16">
        <Banner />
        <Feature />
        <Projects />
        <Resume />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
