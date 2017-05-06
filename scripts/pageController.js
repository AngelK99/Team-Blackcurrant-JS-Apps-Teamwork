function LoadLoginPage(){
    $.get('templates/logInForm.handlebars', function (data) {
    var template = Handlebars.compile(data);
    $container.html(template);
    }, 'html')
}

function LoadNews(category){
    $container.html(`<h1>SUCCESS FOR ${category}</h1>`);

    
}