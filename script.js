function hideAndShowBtn(accordionName) {
  var accordion = document.getElementById(accordionName);
  if (accordion.style.display === "block") {
    accordion.style.display = "none";
  } else {
    accordion.style.display = "block";
  }
}
function watchingBtn() {
  document.getElementById("modal").style.display = "block";
}
let storeUserInfo = [];
function submitBtn(e) {
  e.preventDefault();
  let userEmail = document.getElementById("useremail").value;
  let qualification = document.getElementById("qualification").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let userInfo = {
    userEmail: userEmail,
    qualification: qualification,
    phone: phone,
    password: password,
  };
  storeUserInfo.push(userInfo);
  localStorage.setItem("userInfo", JSON.stringify(storeUserInfo));
  console.log(storeUserInfo);
  document.getElementById("useremail").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";
  document.getElementById("videomodaal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
