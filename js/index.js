function f(){
    (
        function(){
        var Router = function(){
            this.routes = {};
            this.curUrl = '/';
        };
         
        Router.prototype.init= function(){
            window.addEventListener('hashchange',this.reloadPage.bind(this));
        };
 
        Router.prototype.reloadPage = function(){

            this.curUrl = location.hash.substring(1)||'/';
            this.routes[this.curUrl]();
        };

        Router.prototype.map = function(key,callback){
            this.routes[key] = callback;
            //this.router[01] = callback
        }

        window.Router = Router;
        })();

        var ORouter = new Router();


        ORouter.init();


        ORouter.map('1',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/kuugalogo.png' width=200px height=200px>";
        });
         ORouter.map('2',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/decadelogo.png' width=180px height=180px>";
        });
         ORouter.map('3',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/wlogo.png' width=160px height=160px>";
        });
         ORouter.map('4',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/agitologo.png' width=140px height=140px>";
        });
         ORouter.map('5',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/ryukilogo.png' width=120px height=120px>";
        });
        ORouter.map('6',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/faizlogo.png' width=120px height=120px>";
        });
        ORouter.map('7',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/bladelogo.png' width=100px height=100px>";
        });
        ORouter.map('8',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/hibikilogo.png' width=150px height=150px>";
        });
        ORouter.map('9',function(){
            var Osect = document.getElementById("img");
            Osect.innerHTML = "<img src=''../picture/kabutologo.png' width=200px height=200px>";
        });
}