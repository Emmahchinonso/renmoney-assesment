import {useState} from 'react'
import './sass/styles.scss';

import Modal from './Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <div className="wrapper">
        <button className="button button--primary" onClick={() => setShowModal(true)}>Pay with Renmoney</button>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default App;
