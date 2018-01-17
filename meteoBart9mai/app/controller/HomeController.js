//Test commit


function HomeController($scope,DataService){
  $scope.hello="hello";
  $scope.charge=false;

  $scope.getMeteo= setTimeout(function(){
    var promise = DataService.getMeteo()
        .then(
            function(success){
                console.log(success);
                $scope.meteo=success;
                $scope.charge=true;
            },
            function(error){
                console.log("erreur : "+error);
                $scope.charge=true;
            }
        );
    },2000);

    $scope.convert = function(kalvin){
        return (kalvin - 273,15)+"°C";
    };

    var level = 0;

    $scope.setLevel = function(value){
      level = value;
    };

    $scope.getLevel = function(){
      return level;
    };

    $scope.unit=false;

    $scope.toggle = function toggle(){
      $scope.unit = !($scope.unit);
    };

};
