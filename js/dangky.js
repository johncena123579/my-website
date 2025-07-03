const btnDK = document.getElementById("btn_DK");

btnDK.addEventListener("click", function (e) {
  e.preventDefault();

  checkRegistration();
});
//check username
function checkUsername() {
  const ten = document.getElementById("tendangNhap").value.trim();
  const regex = /^[a-zA-Z][a-zA-Z0-9]{5,19}$/; // chữ cái đầu + 5-19 ký tự

  if (regex.test(ten)) {
    document.getElementById("errorUserName").innerHTML = "";
    return true;
  } else {
    document.getElementById("errorUserName").innerHTML =
      "Tên đăng nhập phải từ 6-20 ký tự, bắt đầu bằng chữ, không chứa ký tự đặc biệt.";
    return false;
  }
}

// Check name
function checkedName() {
  const hovaten = document.getElementById("hovaten");
  const errorName = document.getElementById("errorName");
  const value = hovaten.value.trim();
  ``;
  // Regex: Mỗi từ bắt đầu bằng chữ cái hoa, theo sau là chữ thường, cho phép khoảng trắng giữa các từ
  const namePattern = /^[A-ZÀ-Ý][a-zà-ý]*(\s[A-ZÀ-Ý][a-zà-ý]*)*$/;

  if (value === "") {
    errorName.innerText = "Vui lòng nhập họ và tên.";
    hovaten.focus();
    return false;
  } else if (!namePattern.test(value)) {
    errorName.innerText =
      "Họ tên phải viết hoa chữ cái đầu mỗi từ, không chứa số/ký tự đặc biệt.";
    hovaten.focus();
    return false;
  } else {
    errorName.innerText = "";
    return true;
  }
}

//check sđt
function checksdt() {
  let sdt = document.getElementById("txtsdt").value;
  let mausdt = /^(09|03|07|06|05|04)\d{8}$/;
  if (mausdt.test(sdt)) {
    document.getElementById("errsdt").innerHTML = "";
    return true;
  } else {
    document.getElementById("errsdt").innerHTML =
      "Vui lòng nhập lại số điện thoại";
    return false;
  }
}
// Check ngay sinh
function checkedBirthDate() {
  const birthdate = document.querySelector("input[type=date]");
  const errorBirthdate = document.getElementById("errorBirthdate");

  if (birthdate.value === "") {
    errorBirthdate.innerText = "Vui lòng chọn ngày sinh";
    return false;
  } else {
    errorBirthdate.innerText = "";
    return true;
  }
}

// Check email
function checkedEmail() {
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email.value.trim() === "") {
    errorEmail.innerText = "Vui lòng nhập email";
    email.focus();
    return false;
  } else if (!regexEmail.test(email.value)) {
    errorEmail.innerText = "Vui lòng nhập đúng định dạng của email";
    email.focus();
    return false;
  } else {
    errorEmail.innerText = "";
    return true;
  }
}

// Check is password
function checkedPassword() {
  const dkPassword = document.getElementById("dkPassword");
  const rePassword = document.getElementById("rePassword");
  const errorPassword = document.getElementById("errorPassword");
  const errorRePassword = document.getElementById("errorRePassword");

  if (dkPassword.value.trim() === "") {
    errorPassword.innerText = "Vui lòng nhập mật khẩu";
    dkPassword.focus();
    return false;
  } else if (dkPassword.value !== rePassword.value) {
    errorRePassword.innerText = "Mật khẩu nhập lại không đúng";
    rePassword.focus();
    return false;
  } else {
    errorPassword.innerText = "";
    errorRePassword.innerText = "";
    return true;
  }
}

// Lưu thông tin đăng ký vào localStorage
function saveUserInfoToLocal() {
  const hovaten = document.getElementById("hovaten").value;
  const email = document.getElementById("email").value;
  const dkPassword = document.getElementById("dkPassword").value;
  localStorage.setItem("userName", hovaten);
  localStorage.setItem("email", email);
  localStorage.setItem("password", dkPassword);
}
function checkedGender() {
  const genderOptions = document.getElementsByName("gioiTinh");
  const errorGender = document.getElementById("errorGender");
  let isChecked = false;

  // Duyệt qua radio xem có cái nào được chọn không
  for (let i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    errorGender.innerText = "Vui lòng chọn giới tính.";
    return false;
  } else {
    errorGender.innerText = "";
    return true;
  }
}

function checkRegistration() {
  // Check nếu có ít nhất 1 trường chưa nhập
  if (
    !checkUsername() ||
    !checkedName() ||
    !checksdt() ||
    !checkedGender() ||
    !checkedBirthDate() ||
    !checkedEmail() ||
    !checkedPassword()
  ) {
    return;
  }
  // Lưu thông tin đăng ký vào localStorage
  saveUserInfoToLocal();
  alert("Đăng ký thành công!");
  // Chuyển sang trang đăng nhập
  setTimeout(function () {
    window.location.href = "/html/dangnhap.html";
  }, 3000);
}
