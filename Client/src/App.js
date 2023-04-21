import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { Route, Routes } from "react-router-dom";
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';



function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access,setAccess] = useState(false);

   const navigate = useNavigate();
   

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({data}) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   }

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav prop={onSearch} />}     
         <Routes>
            <Route path='/'  element={<Form login={login} />} />
            <Route path='/favorites'  element={<Favorites />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
