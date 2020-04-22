// Input onFocus append class handler
export const handleFocus = ( e ) => {
  e.target.parentElement.classList.add('focused');
}

// Input onBlur remove class handler
export const handleFocusOut = ( e ) => {
  const hasValue = e.target.value;

  if (!hasValue) {
    e.target.parentElement.classList.remove('focused');
  }
}

// Input onKeyDown numbers only handler
export const handleNumbersOnly = ( e ) => {
  let flag;

  if((e.keyCode === 8) ||
      (e.keyCode === 9) || 
      (e.keyCode === 16 && e.keyCode >= 9) ||
      (e.keyCode === 37) ||
      (e.keyCode === 39) ||
      (e.keyCode === 46) || 
      (e.keyCode >= 48 && e.keyCode <= 57) || 
      (e.keyCode >= 96 && e.keyCode <= 105)) {
    flag = false;
  } else {
    flag = true;
  }

  if(flag) {
    e.preventDefault();
  }
}

// Get card type based on card number
export const getCardType = ( number ) => {
  if (number !== '' || number !== null) {
    const amexReg   = new RegExp('^3[47]');
    const jbcReg    = new RegExp('^35(2[89]|[3-8][0-9])');
    const masterReg = new RegExp('^5[1-5][0-9]');
    const visaReg   = new RegExp('^4');

    if (number.toString().match(amexReg)) {
      return 'amex';
    } else if (number.toString().match(jbcReg)) {
      return 'jcb';
    } else if (number.toString().match(masterReg)) {
      return 'mastercard';
    } else if (number.toString().match(visaReg)) {
      return 'visa';
    } else {
      return 'invalid';
    }
  }
}