firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#userlog").html(user.email);
  } else {
    alert("Logged out successfully!");
    $("#userlog").html(`<a href="#user/login" class="btn btn-default navbar-btn btn-sm">Вход</a>
                        <a href="#user/register" class="btn btn-default navbar-btn btn-sm">Регистрация</a>`);
  }
});