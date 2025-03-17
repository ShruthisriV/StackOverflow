import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Askquestion from './Askquestion/Askquestion';
import Auth from './Auth/Auth';

function Allroutes({slidein, handleslidein}) {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Askquestion' element={<Askquestion />}/>
            <Route path='/Auth' element={<Auth />}/>
        </Routes>
    </>
  )
}

export default Allroutes