import React, { useState } from "react";

import logo from "./logo.svg";
import StepForm from './StepForm'

const Modal = ({setShowModal}) => {
	const [beginOnboarding, setBeginOnboarding] = useState(true);
	return (
		<div className="modal-wrapper">
			<div className="modal">
				<div className="flex modal__header">
					<img src={logo} className="modal__image" />
					<button onClick={() => setShowModal(false)} class="modal__button button--primary">X</button>
				</div>
				{beginOnboarding ? <StepForm /> : (
					<>
						<p>
							Hello, you are using Renmoney to complete your transaction. Please
							ensure all input fields are filled.
						</p>
						<button className="button button--primary" onClick={() => setBeginOnboarding(true)}>Continue</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Modal;
