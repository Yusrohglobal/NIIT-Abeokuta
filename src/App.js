import './App.css';
// import Header from "./component/Navbar/Navbar"
import Header from "./component/Header/Header"
import Router from './Router';
import Footer from "./component/Footer/Footer";
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0,0);
  }, [location.pathname]);
  return children
}
function App() {
  return (
    <div className="App">
      <Wrapper>
      <Header/>
      <Router/>
      <Footer/>
      </Wrapper>
    </div>
  );
}

export default App;
