let $container = $("#contentContainer");
let router = new Router();

router
  .when('category/bulgaria', () => LoadNews('bg'))
  .when('category/world',  () => LoadNews('world'))
  .when('category/sport',  () => LoadNews('sport'))
  .when('category/science',  () => LoadNews('science'))
  .when('category/health',  () => LoadNews('health'))
  .when('category/curious',  () => LoadNews('curious'))
  .when('user/login',  () => LoadLoginPage())
  .when('user/register',  () => LoadRegPage());

$(window).on('hashchange', () => router.navigate(location.hash.slice(1)));