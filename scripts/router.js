class Router{
    constructor() {
    this._routes = [];
  }

  when(targetUrl, callback) {
    this._routes.push({
      targetUrl,
      callback
    });

    return this;
  }

  navigate() {
    const currentUrl = location.hash.slice(1);

    for(const {targetUrl, callback} of this._routes) {
      const params = Router.matchUrls(currentUrl, targetUrl);
      if(params) {
        callback();
        break;
      }
    }
  }

  static matchUrls(currentUrl, targetUrl) {
      if(currentUrl === targetUrl)
      {return true;}
      else return false;
  }
}

let $container = $("#contentContainer")

function Test(){
    $container.html(`<h1>SUCCESS FOR ${location.hash}</h1>`);
}

let router = new Router();

router
  .when('/category/bulgaria', () => Test())
  .when('/category/world',  () => Test())
  .when('/category/sport',  () => Test())
  .when('/category/science',  () => Test())
  .when('/category/health',  () => Test())
  .when('/category/curious',  () => Test());

$(window).on('hashchange', () => router.navigate());