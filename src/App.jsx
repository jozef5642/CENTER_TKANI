import './App.css'
import { Footer } from './components/footer/Footer'
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/header/Header'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
