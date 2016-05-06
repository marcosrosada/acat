angular.module("acat").controller("ContainerCtrl", ["$scope", "$location", "TreeViewService", function ($scope, $location, TreeViewService) {
	
	$scope.title = $location.path().split('/');
	$scope.title = $scope.title[1];

	var service = new TreeViewService();

    $scope.myService = service;
    $scope.myService.nodes = [
        {
            id: 1,
            name: 'Cenário Operacional 1',
            children: [
                {
                    id: 11,
                    name: 'Sub Cenário Operacional 1.1',
                    children: []
                }
            ]
        },
        {
            id: 2,
            name: 'Cenário Operacional 2',
            children: [
                {
                    id: 10,
                    name: 'Sub Cenário Operacional 2.1',
                    children: [
                        {
                            id: 20,
                            name: 'Sub Cenário Operacional 2.1.1',
                            children: []
                        },
                        {
                            id: 20,
                            name: 'Sub Cenário Operacional 2.1.2',
                            children: [
                              {
                                  id: 20,
                                  name: 'Sub Cenário Operacional 2.1.2.1',
                                  children: []
                              },
                              {
                                  id: 20,
                                  name: 'Sub Cenário Operacional 2.1.2.2',
                                  children: []
                              }
                            ]
                        },
                        {
                            id: 20,
                            name: 'Sub Cenário Operacional 2.1.3',
                            children: []
                        },
                        {
                            id: 20,
                            name: 'Sub Cenário Operacional 2.1.4',
                            children: []
                        },
                        {
                            id: 20,
                            name: 'Sub Cenário Operacional 2.1.5',
                            children: []
                        }
                    ]
                },
                 {
                    id: 10,
                    name: 'Sub Cenário Operacional 2.2',
                    children: [
                        {
                            id: 20,
                            name: 'Sub Cenário Operacional 2.2.1',
                            children: []
                        }
                    ]
                }
            ]
        }
    ];
}]);