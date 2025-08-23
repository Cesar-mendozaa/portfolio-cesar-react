// Importar estados
import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero"; // Importamos 'Hero'
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  // Funcion que define nuestro componente
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  ); // Usamos el modulo 'Hero'
  // Importamos modulo 'Projects'
  // Importamoss modulo 'Habilidades'
}

export default App;
