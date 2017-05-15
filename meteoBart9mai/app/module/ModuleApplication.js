angular.module("ModuleApplication", ["ngRoute"])


    .filter('ToIconFilter', ToIconFilter)
    .filter('toIconPicturesFilter', ToIconPicturesFilter)
    .filter('TempFilter', TempFilter)
    .filter('LevelFilter', LevelFilter)
    .filter('ToIconLevelPicturesFilter', ToIconLevelPicturesFilter)
    .filter('ToIconSnowFilter',ToIconSnowFilter)
    .service("DataService", DataService)
    .directive("tempDirective",tempDirective)
    .directive("ventDirective",ventDirective)
    .controller("FirstController", FirstController)
    .controller("HomeController", HomeController)
    .controller("CityController", CityController)
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/template/vent.html",
                controller: "HomeController"
            })
            .when("/temperature", {
                templateUrl: "app/template/temperature.html",
                controller: "HomeController"
            })
            .when("/temperatureDirec", {
                templateUrl: "app/template/temperatureDirec.html",
                controller: "HomeController"
            })
            .when("/ventDirec", {
                templateUrl: "app/template/ventDirec.html",
                controller: "HomeController"
            })
            .when("/formulaire", {
                templateUrl: "app/template/formulaire.html",
                controller: "CityController"
            })
            .otherwise({
                redirectTo: "/"
            });
    });




//ici: à gauche entre guillements le nom que l'on utilise pour appeler dans le scope, à droite le nom du fichier
/**************************
Il ne faut pas oublier dans la déclaration du controller de bien rajouter dans les arguments le nom (celui
qu'on a mis entre guillemets) pour que ça marche
************/
/***
Ne pas oublier de rajouter "HomeController" après route provider
************/
/***
Pour route provider: ajouter ngRoute dans la signature
************/
