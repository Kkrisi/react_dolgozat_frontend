import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';



function App() {
  return (
    <div className="container">
      <header className="">
       <h1>SZÁMALK-Szalézi Technikum és Szakgimnázium</h1>
      </header>

      <BrowserRouter>
        <Routes>

              <Route path="/" element={<Layout/>}>
                <Route index element={<Admin/>}/>
                <Route path="*" element={<NoPage/>}/>
              </Route>

        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
