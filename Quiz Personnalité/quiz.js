angular.module('quizApp', [])
	.controller('quizController', ['$scope', function($scope) {
		$scope.numQuestion = 0;
		$scope.points = 0;
		$scope.usuarion = "";
		$scope.visuel ="block";
		$scope.resultat = "none";
		$scope.texte = "";
		
		$scope.questions = [
			{
				id:"01",
				question : "Lequel de ces languages est un language client ?",
				reponseA : "Ruby",
				reponseB : "Css",
				reponseC : "Java",
				reponseD : "Python",
				correct : "reponseB",
				points : 4,
				image: "img/client.jpg",
			},
			{
				id:"02",
				question : "Lequel de ces languages est un language serveur ?",
				reponseA : "Ruby",
				reponseB : "Css",
				reponseC : "Html",
				reponseD : "Javascript",
				correct : "reponseA",
				points : 4,
				image: "img/serveur.jpg",
			},
			{
				id:"03",
				question : "Quel est le systeme d'exploitation Open Source ?",
				reponseA : "Windows",
				reponseB : "Mac OS",
				reponseC : "Linux",
				reponseD : "Python",
				correct : "reponseC",
				points : 4,
				image: "img/open-source.png",
			},
			{
				id:"04",
				question : "Parmi ces propositions, laquelle est un framework javascript ?",
				reponseA : "Angular",
				reponseB : "C++",
				reponseC : "Java",
				reponseD : "Android",
				correct : "reponseA",
				points : 4,
				image: "img/javascript.png",
			},
			{
				id:"05",
				question : "En quelle année a été créé le W3C ?",
				reponseA : "1989",
				reponseB : "1994",
				reponseC : "1999",
				reponseD : "1983",
				correct : "reponseB",
				points : 4,
				image: "img/w3c.jpg",
			}
		];
		
		$scope.questionnaire = $scope.questions[$scope.numQuestion];
		$scope.image = $scope.questions[$scope.numQuestion].image;
		
		$scope.valider = function() {
			if($scope.reponse == $scope.questions[$scope.numQuestion].correct)
			{
				$scope.points += $scope.questions[$scope.numQuestion].points;
			}
			
			$scope.numQuestion +=1;
			
			if ($scope.numQuestion >= 5) {
				$scope.questionnaire = "";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points <= 5) {
					$scope.texte ="Ressayes, il faut s'ameliorer";
				} else if ($scope.points > 5 && $scope.points <= 10) {
					$scope.texte = "Pas mal !!!";
				} else if( $scope.points > 10 && $scope.points < 15) {
					$scope.texte = "Vraiment bien!!!!";
				} else if($scope.points >= 15){
					$scope.texte = "Alors la chapeau !!!!"
				}
			} else {
				$scope.questionnaire = $scope.questions[$scope.numQuestion];
				$scope.image = $scope.questions[$scope.numQuestion].image;
			}
			$scope.reponse = "";
		};
	}]);