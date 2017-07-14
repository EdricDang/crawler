angular.module("app.common.delete-comment", [])
.controller("deleteCommentController", ["$scope", "commentServices", "scope", "id", "idReply", "status", "caseDetail", "$modalInstance",
        function ($scope, commentServices, scope , id, idReply, status, caseDetail, $modalInstance) {
            $scope.id = angular.copy(id);
            $scope.idReply = angular.copy(idReply);
            $scope.status = angular.copy(status);
            $scope.caseDetail = angular.copy(caseDetail);
            $scope.remove = function(){
                if($scope.status === "deleteComment"){
                    commentServices.deleteComment($scope.caseDetail.id, $scope.id).success(function(){
                        scope.getComments();
                        $modalInstance.close();
                    }).error(function(){});
                }else{
                    commentServices.deleteCommentReply($scope.id, $scope.idReply).success(function(){
                        scope.getComments();
                        $modalInstance.close();
                    }).error(function(){});
                }
            };

            $scope.cancel = function(){
                $modalInstance.close();
            };
    }]);