angular.module("acat").config(["$routeProvider", function ($routeProvider) {
	
	$routeProvider.when("/", {
		templateUrl: "views/home.html"
	})
	.when("/Sensoriamento/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.when("/Comunicacoes/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.when("/Guerra/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.when("/Plataformas/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.when("/Infraestrutura/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.when("/Organizacoes/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.when("/Fornecedores/:key", {
		templateUrl: "views/container.html",
		controller: "ContainerCtrl"
	})
	.otherwise({redirectTo: "/"});
}]);