import './App.css'
import "@radix-ui/themes/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Approuter } from './components/approuter/Approuter';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Container } from '@radix-ui/themes';
import { Currentorder } from './components/currentOrder/CurrentOrder';


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Approuter/>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App