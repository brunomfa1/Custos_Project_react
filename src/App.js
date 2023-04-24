import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/page/Home'
import Contact from './components/page/Contact'
import Company from './components/page/Company'
import NewProject from './components/page/NewProject'
import Projects from './components/page/Projects'

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route exact path="/company" element={<Company />} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route exact path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
     


  );
}

export default App;

//<Router>
//      <ul>
//        <li>Home</li>
//        <li>Contato</li>
//      </ul>
//      <Switch>
//        <Route exact path='/'>
//          <Home />
//        </Route>
//        <Route  path='/company'>
//          <Company />
//        </Route>
//        <Route  path='/contact'>
//          <Contact />
//        </Route>
//        <Route path='/newproject'>
//          <NewProject />
//        </Route>  
//      </Switch>
//      <p>Footer</p>
//    </Router>