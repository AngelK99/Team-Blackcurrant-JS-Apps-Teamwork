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
    $.get('templates/logInForm.handlebars', function (data) {
        var template = Handlebars.compile(data);
        $container.html(template);
    }, 'html')

    jQuery(document.body).on('click', '#signInBtn', function (event) {
        let email = $("#inputEmail3").val();
        let password = $("#inputPassword3").val();
        //alert(`Email: ${email} Pass: ${password}`);

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
    });
    });

    
}

function LoadNews(category) {
    $container.html(`<h1>SUCCESS FOR ${category}</h1>`);


}

