import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tododelete from './sub/Tododelete.jsx'
import Todoedit from './sub/Todoedit.jsx'

function App() {
  return (
    <div classname="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tododelete/>}></Route>
          <Route path="/edit" element={<Todoedit/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
