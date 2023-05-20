import React, { useState } from 'react';

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [placeholder, setPlaceholder] = useState('8 (___) ___-__-__');

  const formatPhoneNumber = (input) => {
    const formattedNumber = input.replace(/\D/g, '').substring(0, 11);

    let formattedValue = '';
    if (formattedNumber.length > 0) {
      formattedValue += '8 ';
    }
    if (formattedNumber.length > 1) {
      formattedValue += `(${formattedNumber.substring(1, 4)}`;
    }
    if (formattedNumber.length > 4) {
      formattedValue += `) ${formattedNumber.substring(4, 7)}`;
    }
    if (formattedNumber.length > 7) {
      formattedValue += `-${formattedNumber.substring(7, 9)}`;
    }
    if (formattedNumber.length > 9) {
      formattedValue += `-${formattedNumber.substring(9, 11)}`;
    }

    setPhoneNumber(formattedValue);

    // Обновление плейсхолдера
    if (formattedNumber.length === 0) {
      setPlaceholder('8 (___) ___-__-__');
    } else {
      setPlaceholder(formattedValue);
    }
  };

  const handleChange = (e) => {
    formatPhoneNumber(e.target.value);
  };

  return (
    <input
      type="tel"
      value={phoneNumber}
      onChange={handleChange}
      maxLength="19"
      required
      placeholder={placeholder}
    />
  );
};

export default PhoneInput;