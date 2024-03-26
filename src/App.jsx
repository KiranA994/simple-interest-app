import './App.css'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'

function App() {
 const [principle, setPrinciple] = useState(0)
 const [rate, setRate] = useState(0)
 const [year, setYear] = useState(0)
 const [interest, setInterest] = useState(0)

//  conditionally render

const [isPrinciple, setIsPrinciple] = useState(true)
const [isRate, setIsRate] = useState(true)
const [isYear, setIsYear] = useState(true)
 
 const validate=(e)=>{
   const {name,value} = e.target
  //  regular expression to match combination of numbers in range of 0 to 9
  //  !! is used to make the expression boolean
  if(!!value.match(/^[0-9]*$/)){
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }else{
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }
 
}

const handleReset = () =>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

const handleCalculate = () =>{
  setInterest((principle*rate*year) / 100)
}


  return (
    <>
    <div className='main'>
      <div className='sub p-5'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div className='result rounded shadow mt-3 d-flex w-100 justify-content-center align-items-center flex-column'>
          <h1>₹ {interest}</h1>
          <p>Total simple interest</p>
        </div>

        <form action="" className='mt-5'>
        <TextField id="outlined-basic" value={principle || ''} label="₹ Principle Amount" variant="outlined"
        className='w-100' name="principle" onChange={(e)=>validate(e)} />
        {!isPrinciple && <p className='text-danger'>Invalid Input</p>}
        <TextField id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" value={rate || '' }
        className='w-100 mt-3'  name="rate" onChange={(e)=>validate(e)} />
         {!isRate && <p className='text-danger'>Invalid Input</p>}
        <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" value={year || ''}
        className='w-100 mt-3'  name="year" onChange={(e)=>validate(e)} />
         {!isYear && <p className='text-danger'>Invalid Input</p>}
        <div className='d-flex mt-4'>
        <Button variant="contained" color="success" className='w-50 p-3' 
        disabled={isPrinciple && isRate && isYear ? false : true}
        onClick={handleCalculate}>Calculate</Button>
        <Button variant="outlined" color="primary"  className='w-50 p-3 ms-4'
        onClick={handleReset}>Reset</Button>
        </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App

// SI = PNR/100