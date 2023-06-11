const codes = document.querySelectorAll(".code");
const codeInputs = Array.from(codes);
const container = document.querySelector(".container");

codeInputs[0].focus();

// Add event listener to each input field
codeInputs.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codeInputs[idx].value = "";
      setTimeout(() => {
        if (idx < codeInputs.length - 1) {
          codeInputs[idx + 1].focus();
        } else {
          checkVerification();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        if (idx > 0) {
          codeInputs[idx - 1].focus();
        }
      }, 10);
    }
  });
});

// Create a function to check if the verification is completed
function checkVerification() {
  const filled = codeInputs.every(
    (code) => code.value !== ""
  );
  if (filled) {
    const verificationBox = document.createElement("div");
    verificationBox.classList.add("verification-box");
    verificationBox.innerHTML = `
    <span class="first-line">Your account has been verified ✅</span>
    <span class="second-line">You will be redirected to the home page in 5 seconds.</span>`;

    document.body.appendChild(verificationBox);

    // Hide the container element
    container.style.display = "none";
  }
}
