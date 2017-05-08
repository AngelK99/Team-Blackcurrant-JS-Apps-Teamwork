function LoadLoginPage() {
    $.get('templates/loginForm.hbs', function (data) {
        var template = Handlebars.compile(data);
        $container.html(template);
    }, 'html').then(function () {
        $('#signInBtn').on('click', function (event) {
            let email = $("#inputEmail3").val();
            let password = $("#inputPassword3").val();

            if (password.length < 6) {
                alert("Invalid password! Password is at least 6 symbols!");
            }
            else {
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                });
            }
        });
    })
}

function LoadRegPage() {
    $.get('templates/regForm.hbs', function (data) {
        var template = Handlebars.compile(data);
        $container.html(template);
    }, 'html').then(function () {
        $('#register').on('click', function (event) {
            let email = $("#email").val();
            let password = $("#password").val();
            let passwordC = $("#password_confirm").val();

            if (password.length < 6) {
                alert("Password too short! Must be at least 6 symbols!");
            }
            else {
                if (password === passwordC) {
                    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak.');
                        } else {
                            alert(errorMessage);
                        }
                    })
                    window.location.hash = "#category/bulgaria"
                }
                else {
                    alert("Passwords doesn't match!")
                }

            }
        });
    })
}

function LoadNews(category) {
    $container.html(`<h1>SUCCESS FOR ${category}</h1>`);


}

