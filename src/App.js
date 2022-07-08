import './App.scss';
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar, SingleSocial} from './components'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
      <SingleSocial/>
    </div>
  );
}

export default App;
