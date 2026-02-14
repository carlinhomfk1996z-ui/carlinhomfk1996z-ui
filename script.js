
function mostrarCadastro() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

function mostrarLogin() {
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function register() {
  const user = document.getElementById("registerUser").value;
  const pass = document.getElementById("registerPass").value;

  if (user === "" || pass === "") {
    alert("Preencha todos os campos!");
    return;
  }

  localStorage.setItem("usuario", user);
  localStorage.setItem("senha", pass);

  alert("Conta criada com sucesso!");
  mostrarLogin();
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const savedUser = localStorage.getItem("usuario");
  const savedPass = localStorage.getItem("senha");

  if (user === savedUser && pass === savedPass) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("homeBox").style.display = "block";
    document.getElementById("userLogado").innerText = "Usuário: " + user;
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function logout() {
  document.getElementById("homeBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}
