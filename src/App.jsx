import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ToyStory from './Pages/ToyStory'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/toystory/" element={<Home/>} />
        <Route path="/toystory/:toyId" element={<ToyStory/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App