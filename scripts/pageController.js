function LogIn() {
    let email = $("#inputEmail3").val();
    let password = $("#inputPassword3").val();
    alert(`Email: ${email} Pass: ${password}`);


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

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

function LoadNews(category) {
    $container.html(`<h1>SUCCESS FOR ${category}</h1>`);


}

