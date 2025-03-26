import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Askquestion from './Askquestion/Askquestion';
import Auth from './Auth/Auth';
import Question from './Question/Question';
import Displayquestion from './Question/Displayquestion';
import Tags from './Tags/Tags';

function Allroutes({slidein, handleslidein}) {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Askquestion' element={<Askquestion />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/Question' element={<Question slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Question/:id' element={<Displayquestion slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Tags' element={<Tags slidein={slidein} handleslidein={handleslidein}/>}/>
        </Routes>
    </>
  )
}

export default Allroutes