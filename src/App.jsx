import React, { useState } from 'react'
import bmi from "/src/assets/bmi.jpg"
import "/src/App.css"
const App = () => {
  const[height,highstate]=useState()
  const [weight,weightstate]=useState()
  const [result,resultstate]=useState()
  const [status,statusstate]=useState()
  const [error,errorstate]=useState("")
  // function retutn
 const calculate=()=>{
  if (height && weight)
  {
    const meter= height/100;
    const total=  weight/(meter*meter);
    resultstate(total.toFixed(2));
    
    if(total <18.5)
    {
      statusstate("Under Weight")
    }
    else if (total>=18.5 && 24.9>total ) {
      statusstate("Normal Weight")
    } 
    else if (total>=25 && 29.9>total ) {
      statusstate("Over Weight")
    } 
   
    else {
      statusstate("Obese")
    }
  errorstate("")
  }
  else{
    errorstate("Please Enter the Hieght & Weight")
    resultstate(null)
    statusstate(null)
  }
 }
 const clear=()=>{
highstate("")
weightstate("")
resultstate("")
statusstate("")
 }
 
  return (
   <>
   <div className='container'>
    <div className='min-container'>
      <div>
          <img src={bmi} alt='image'></img>
      </div>
      
      <div>
          <form>
            <h3>BMI CALCULATOR</h3>
              <h6>{error}</h6>
            {/* input hight filed */}

        <label htmlFor='height'>
      Hieght (cm)
            <input id='height'  type='number' value={height} onChange={(e)=>highstate(e.target.value)}></input>
        </label>

              {/* weight filed */}
          <label htmlFor='Weight'>
          Weight (kg)
            <input id='Weight'  type='number'value={weight} onChange={(e)=>weightstate(e.target.value)} ></input>
            

            <div className='btn'>
              {/* button */}

              <button type='button' className='primary-btn'  onClick={calculate}> <b>Calculate BMI</b>
              </button>
              <button type='button' className='secondary-btn' onClick={clear}> <b> Clear</b></button>
              </div>
            
                
        </label>
          {result && status && <div className='output'>
                  <h4 className='first' > Your BMI id: <b>{result}</b></h4>
              <h4 className='sec'>Status: {status}</h4>
              </div>}
      </form>
      </div>
      
      
      
    </div>
   </div>
   
   </>
  )
}

export default App