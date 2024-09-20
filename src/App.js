import './App.css';
import Header from "./component/Navbar/Navbar"

import Router from './Router';
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
