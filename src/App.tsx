import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/register" element={<>REGISTER</>} />
        <Route path="/home" element={<>HOME</>} />
        <Route path="/leads" element={<>LEADS</>} />
        <Route path="/profile" element={<>PROFILE</>} />
      </Routes>
    </Router>
  )
}

export default App
