import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contato from './components/Contact'
import ScrollToAnchor from './components/ScrollToAnchor'




//linkis de impotação

export default function App() {
  return (
    <Router>
      <ScrollToAnchor/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Contato' element={<Contato/>} />
       
      </Routes>
    </Router>
  )
}