// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'

// import { Link } from 'react-router-dom';

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
    <div className="container my-3">
    

      {/* <TextForm heading="Enter Text:" mode={mode} showAlert={showAlert}/> */}
      <TextForm heading="Enter Text:" mode={mode} showAlert={showAlert}/>
      
    </div>
      {/* <About /> */}

    </>
  );
}

export default App;



