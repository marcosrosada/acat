angular.module("acat").factory("containerAPI", function ($http, config) {

	var _getTreeView = function () {
		return $http.get(config.baseUrl + "/treeView");
	};

	return {
		getTreeView : _getTreeView
	};
});