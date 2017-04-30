System.config({
  map: {
   //'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
   //'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
   //'text': 'libs/systemjs-plugin-text/text.js',

   'router': 'router.js'

   // templates
   // 'homeTemplate': 'templates/home.handlebars',

   // Library files
  //  'jquery': 'libs/jquery/dist/jquery.min.js',
  //  'handlebars': 'libs/handlebars/dist/handlebars.amd.js',
  //  'cryptojs': 'libs/cryptojs/cryptojs.js',
  //  'toastr': 'libs/toastr/build/toastr.min.js',
 }
});

System.import('scripts/app.js');