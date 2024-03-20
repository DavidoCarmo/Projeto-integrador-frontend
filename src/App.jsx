import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './components/Contact'
import ScrollToAnchor from './components/ScrollToAnchor'




//linkis de impotação

export default function App() {
  return (
    <Router>
      <ScrollToAnchor/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Contato' element={<Contato/>} />
       
      </Routes>
    </Router>
  )
}