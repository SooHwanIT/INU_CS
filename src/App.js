
import './App.css';
import {Routes, Route} from 'react-router-dom'
import AdminPage from './page/admin'
import MainPage from './page/main'
import { useState } from 'react';


function App() {
  const [test,SetTest] = useState("ass")
  return (
    <Routes>
      <Route path="/" element={<MainPage name={"Main"}/>}/>
      <Route path="/admin" element={<AdminPage name={"Admin"}/>}/>
    </Routes>

);
}
export default App;
