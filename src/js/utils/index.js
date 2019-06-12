export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function validateFundsData(dataArr) {
  // expecting dataArr to have objects with a balance and name properties
  let valid;
  if (!isEmpty(dataArr)) {
    dataArr.forEach(item => {
      valid = true;
      if (Object.keys(item).length > 2) valid = false;
      if (!Object.keys(item).includes("balance")) valid = false;
      if (!Object.keys(item).includes("name")) valid = false;
    });
  }
  return valid;
}

export function disableBtn() {
  let self = this;
  self.refs.btn.setAttribute("disabled", "disabled");
}
