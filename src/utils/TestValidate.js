const ruleValedatorWrapper = {
  isPhone: validatePhone,
};

function validatePhone(phone) {
  if (phone.length !== 11) {
    return false;
  }
  return /^[0-9]+$/.test(phone);
}

export function Validate(inputVal, rules) {
  let isValid = true;
  for (let rule of rules) {
    isValid = isValid && ruleValedatorWrapper[rule.key](inputVal);
  }
  return isValid;
}
