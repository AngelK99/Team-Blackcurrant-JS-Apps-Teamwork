// import { Router } from 'router';

var loginTemplate = `<form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-md-2 control-label">Email</label>
                        <div class="col-md-10">
                            <input class="form-control" id="inputEmail3" placeholder="Email" type="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-md-2 control-label">Password</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="inputPassword3" placeholder="Password" type="password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-offset-2 col-md-10">
                            <div class="checkbox">
                                <label>
              <input type="checkbox"> Remember me
            </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default">Sign in</button>
                        </div>
                    </div>
                </form>
                <a href=""> New user registration</a>
            </div>
        </div>`;


let $container = $("#contentContainer")

function Test(){
    $container.html(`<h1>SUCCESS FOR ${location.hash}</h1>`);
}

function LoadLoginPage(){
    $container.html(loginTemplate);
}

let router = new Router();

router
  .when('category/bulgaria', () => Test())
  .when('category/world',  () => Test())
  .when('category/sport',  () => Test())
  .when('category/science',  () => Test())
  .when('category/health',  () => Test())
  .when('category/curious',  () => Test())
  .when('user/login',  () => LoadLoginPage())
  .when('user/register',  () => Test());

$(window).on('hashchange', () => router.navigate());