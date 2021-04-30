import React from 'react'

const ButtonStep = ({step, setStep}) => {
  return (
    <div className="button-wrapper">
     <button onClick={() => setStep(1)} class={`button--round ${step === 1 && "button--active"}`}>1</button>
     <button onClick={() => setStep(2)} class={`button--round ${step === 2 && "button--active"}`}>2</button>
     <button onClick={() => setStep(3)} class={`button--round ${step === 3 && "button--active"}`}>3</button>
    </div>
  )
}

export default ButtonStep
