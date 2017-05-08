firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    $(".userlog").html(user.email + `<a href="#" class="btn btn-default navbar-btn btn-sm" id="logOut">Изход</a>`)

      $("#logOut").on("click", function () {
        firebase.auth().signOut();
      })
      alert("Signed in!")
      window.location.hash ='#category/bulgaria';

  }
  else {
    // alert("Logged out successfully!");
    window.location.hash = '#category/bulgaria';
    $(".userlog").html(`<a href="#user/login" class="btn btn-default navbar-btn btn-sm">Вход</a>
                        <a href="#user/register" class="btn btn-default navbar-btn btn-sm">Регистрация</a>`);
  }
});
