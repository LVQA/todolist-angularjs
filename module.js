var  app= angular.module('todolist', []);

app.controller('todoctrl', ['$scope', function($scope){
	$scope.todos=[
		{text:'việc cần làm 1', done:false},
		{text:'Việc cần làm 2',done:false}	
	];
	$scope.todolenght = function(){
		return $scope.todos.length;
	};
	$scope.addtodo=function(){
		$scope.todos.push({text:$scope.newtodo,done:false});
		$scope.newtodo='';
	};
	$scope.clearcompleted =function(){
		$scope.todos=$scope.todos.filter(function(item){
			return !item.done
		})

	};

}])