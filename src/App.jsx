// import style from "./App.module.css";
import ParticleBackground from "./ParticleBackground";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import style from "./App.module.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Playlist from "./Components/Playlist";

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <ParticleBackground />
        <Route path="/" component={NavBar} />
        <Route path="/" component={Footer} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/playlist" component={Playlist} />

          {/* <CenterTitle /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// function CenterTitle() {
//   return (
//     <div id="text_div center_all">
//       <div className="center_all">
//         <h1 className="custom-subTitle">Fernando Naon</h1>
//         <h1 className="custom-subTitle">Full Stack software Developer</h1>
//       </div>
//     </div>
//   );
// }

export default App;
