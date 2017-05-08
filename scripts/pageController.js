function LoadLoginPage() {
    $.get('templates/log.handlebars', function (data) {
        var template = Handlebars.compile(data);
        $container.html(template);
    }, 'html').then(function () {
        $('#signInBtn').on('click', function (event) {
            let email = $("#inputEmail3").val();
            let password = $("#inputPassword3").val();

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
        });
    })
}

function LoadRegPage() {
    $.get('templates/reg.hbs', function (data) {
        var template = Handlebars.compile(data);
        $container.html(template);
    }, 'html').then(function () {
        $('#register').on('click', function (event) {
            let email = $("#username").val();
            let password = $("#password").val();
            let passwordC = $("#password_confirm").val();

            if (password === passwordC) {
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                })

                alert("Registration Successful! Please Log in!")
                window.location.hash = "#category/bulgaria"
            }
            else {
                alert("Passwords doesn't match!")
            }
        });
    })
}

function LoadNews(category) {
    $container.html(`<h1>SUCCESS FOR ${category}</h1>`);


}

