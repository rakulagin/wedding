import React, { useState } from 'react';
import './Modal.css'

const Modal = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={toggleModal}>Открыть модальное окно</button>
      {isActive && (
        <div className="modal-container">
          <div className="modal-content">
            {/* Содержимое модального окна */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut deserunt dicta facilis fugit magni neque sit ullam, veniam? Adipisci aperiam autem et ex molestias officia ratione reiciendis repellendus voluptatum?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;