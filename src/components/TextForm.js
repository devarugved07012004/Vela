import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText]=useState('')
  const [isBold, setIsBold]=useState(false);
  const handleupclick=()=>{
    //console.log('text was converted into uppercase')
    let a=text.toUpperCase()
    setText(a)
    props.showAlert("Converted to Uppercase",'success')
    
  }
  const handlelowclick=()=>{
    let b=text.toLowerCase()
    setText(b)
    props.showAlert("Converted to Lowercase",'success')
  }
  
  const handlebclick = () => {
    setIsBold(!isBold);
    props.showAlert("Converted to Bold Characters",'success')
  };
  
  // const textStyle = {
  //   fontWeight: isBold ? 'bold' : 'normal',
  // };
  
  
  const handleclrclick=()=>{
    setText('')
    props.showAlert("Text Cleared",'success')
  }
  const handleonchange=(event)=>{
    //console.log('handleonchange')
    setText(event.target.value)
  }
  
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{fontWeight: isBold ? 'bold' : 'normal',backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='light'?'black':'white'}} onChange={handleonchange} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleupclick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelowclick} >Convert To Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlebclick} >Bold</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclrclick} >Clear</button>
        <strong>Hello, world!</strong>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>
          {text.split("/\s+/").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters
        {/* <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p> */}
        </p>
        <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
    </>
  )
}
