import { fetchallusers } from './action/users';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './pages/Allroutes';
import { useDispatch } from 'react-redux';
import { fetchallquestion } from './action/question';

function App() {
  const [slidein, setSlidein] = useState(true);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(fetchallusers());
    dispatch(fetchallquestion());
  }, [dispatch])

  useEffect(() => {
    if(window.innerWidth<=768){
      setSlidein(false);
    }
  },[]);
  const handleSlidein = () =>{
    if(window.innerWidth<=768){
      setSlidein((state)=> !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleSlidein}/>
        <Allroutes slidein={slidein} handleSlidein={handleSlidein}/>
      </Router>
    </div>
  );
}

export default App;