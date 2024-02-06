import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Not_Found from './components/Not_Found';
import Main_header from './components/mainheader';
function App() {
  return (
    <div>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/support'>support</NavLink>
      </ul>
      <div className="App">
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<Not_Found />} />
        </Routes> */}
        {/* if the routes are in the nested form means there will be a parent route in which excluding that route
          all the routes inside it will be their child routes 
       */}
        <Routes>
          <Route path='/' element={<Main_header />}>
            {/* Index means ki agar about support aur not_found page . in pages pe agar navigation nhi hoti hai
              to by default home page render hoga
            */}
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/support' element={<Support />} />
            <Route path='*' element={<Not_Found />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
