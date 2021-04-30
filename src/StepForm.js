import React, { useState } from "react";
import {useForm} from 'react-hook-form';

import ButtonStep from "./ButtonStep";
import EligibilityCheck from "./EligibilityCheck";
import PersonalDetails from "./PersonalDetails";
import EmployeeDetails from "./EmployeeDetails";

const StepForm = () => {
	const [step, setStep] = useState(1);
  const {register, handleSubmit} = useForm();

  const handleNextClick = (e) => {
    e.preventDefault();
    setStep((step) => step + 1);
  }

  const submitForm = (data) => {
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

	return (
		<div>
			<ButtonStep step={step} setStep={setStep}/>
			<form onSubmit={handleSubmit(submitForm)}>
				<div>
					{step === 1 && <EligibilityCheck register={register} />}
					{step === 2 && <PersonalDetails register={register} />}
					{step === 3 && <EmployeeDetails register={register} />}
				</div>
				{step === 3 ? (
					<button
            type="submit"
						class="form__button button--primary"
						onClick={() => console.log("form submitted")}
					>
						Submit
					</button>
				) : (
					<button
						class="form__button button--primary"
						onClick={handleNextClick}
					>
						Next
					</button>
				)}
			</form>
		</div>
	);
};

export default StepForm;
