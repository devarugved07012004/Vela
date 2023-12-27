import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import { Link } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Darkmode has been Enabled",'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light has been Enabled",'success')

    }
  }
  return (
    <>
    
    <Navbar title="Vela" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Router>
    <div className="container my-3">
    <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
    

      {/* <TextForm heading="Enter Text:" mode={mode} showAlert={showAlert}/> */}
      <Routes>
        <Route path='about' element={<About/>} />
        
        <Route path='/' element={<TextForm heading="Enter Text:" mode={mode} showAlert={showAlert}/>} />
        
      </Routes>

      
    </div>
      {/* <About /> */}
      </Router>

    </>
  );
}

export default App;



