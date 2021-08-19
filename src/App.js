import Topbar from './components/topbar/Topbar'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Intro from './components/intro/Intro'
import './app.scss'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
