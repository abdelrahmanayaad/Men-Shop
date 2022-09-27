const ruleValidatorMapper = {
  isPhone: validatePhone,
  isMinChars: valudateMinimumChars,
  isConfirmationCode: validateConfirmationCode,
};

function valudateMinimumChars(inputChars, {minChars}) {
  if (inputChars.length == minChars) return true;
}

function validatePhone(phoneVal) {
  if (phoneVal.length !== 11) return false;
  return /^[0-9]+$/.test(phoneVal);
  /* formula to convert string to array and loop on each char or idx and for each char return bool 
    if any char return false function return false*/
}

function validateConfirmationCode(code, {codeLength}) {
  if (code.length !== codeLength) return false;
  return /^[0-9]+$/.test(code);
}

export function Validate(userInput, rules) {
  let isValid = true;
  for (let rule of rules) {
    isValid = isValid && ruleValidatorMapper[rule.key](userInput, rule); //rule -> object {key:"" , minChars: }
  }
  return isValid;
}
