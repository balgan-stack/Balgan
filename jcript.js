const leftPanel = document.getElementById("leftPanel");
const rightPanel = document.getElementById("rightPanel");
const leftTitle = document.getElementById("leftTitle");
const leftText = document.getElementById("leftText");
const signInTab = document.getElementById("signInTab");
const signUpTab = document.getElementById("signUpTab");
const formTitle = document.getElementById("formTitle");
const nameField = document.getElementById("nameField");
const extraOptions = document.getElementById("extraOptions");
const submitBtn = document.getElementById("submitBtn");

function animateSwitch(leftTextContent, leftTitleContent, formTitleText, showNameField, showOptions, submitText){
  leftPanel.style.transition = "transform 0.4s ease, opacity 0.4s ease";
  rightPanel.style.transition = "transform 0.4s ease, opacity 0.4s ease";

  leftPanel.style.transform = "translateX(-20px)";
  leftPanel.style.opacity = 0;
  rightPanel.style.transform = "translateX(20px)";
  rightPanel.style.opacity = 0;

  setTimeout(()=>{
    leftTitle.textContent = leftTitleContent;
    leftText.textContent = leftTextContent;
    formTitle.textContent = formTitleText;
    nameField.style.display = showNameField ? "block" : "none";
    extraOptions.style.display = showOptions ? "flex" : "none";
    submitBtn.textContent = submitText;

    leftPanel.style.transform = "translateX(0)";
    leftPanel.style.opacity = 1;
    rightPanel.style.transform = "translateX(0)";
    rightPanel.style.opacity = 1;
  }, 300);
}

signInTab.addEventListener("click", ()=>{
  animateSwitch(
    "Та өөрийн акаундаар нэвтрэн үйлчилгээгээ ашиглаарай.",
    "Дахин тавтай морил!",
    "Нэвтрэх",
    false,
    true,
    "Нэвтрэх"
  );
  signInTab.classList.add("active");
  signUpTab.classList.remove("active");
});

signUpTab.addEventListener("click", ()=>{
  animateSwitch(
    "Бүртгэл үүсгээд манай үйлчилгээг ашиглаж эхлээрэй.",
    "Шинэ хэрэглэгч үү?",
    "Бүртгүүлэх",
    true,
    false,
    "Бүртгүүлэх"
  );
  signUpTab.classList.add("active");
  signInTab.classList.remove("active");
});
