export function validateFound(
  backgroundInfo,
  setErrorColor,
  setErrorColorBackground
) {
  const phoneDigitTest = /^[0-9]{10}$/;
  const dateDigitTest = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/;
  let emptyInputs =
    !backgroundInfo.firstname ||
    !backgroundInfo.lastname ||
    !backgroundInfo.email ||
    !backgroundInfo.itemname ||
    !backgroundInfo.itemtype ||
    !backgroundInfo.itemfound ||
    !backgroundInfo.phonenumber;

  if (emptyInputs) {
    alert(
      "There are one or more inputs that are not filled. Please fill in the information."
    );
    setErrorColor("#DC2626");
    setErrorColorBackground("#FEE2E2");
    return;
  }

  // Email @ handling example@gmail.com
  if (!backgroundInfo.email.includes("@")) {
    alert("Incorrect email usage. Please include @");
    setErrorColor("#DC2626");
    setErrorColorBackground("#FEE2E2");
    return;
  }

  // Date Handling DD/MM/YY
  if (!dateDigitTest.test(backgroundInfo.itemfound)) {
    alert("This is not a valid date. Try MM/DD/YY");
    setErrorColor("#DC2626");
    setErrorColorBackground("#FEE2E2");
    return;
  }

  // Phone digit handling 225-XXX-XXXX
  if (!phoneDigitTest.test(backgroundInfo.phonenumber)) {
    alert("Incorrect 10-digit phone number. Please include 10 number digits");
    setErrorColor("#DC2626");
    setErrorColorBackground("#FEE2E2");
    return;
  }

  return true;
}
