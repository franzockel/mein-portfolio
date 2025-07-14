import "./App.css";

import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionVita from "./components/SectionVita";
import SektionSkills from "./components/SectionSkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SectionVita />
      <SektionSkills />
      <Projects />
      <Footer />
    </div>
  );
}
