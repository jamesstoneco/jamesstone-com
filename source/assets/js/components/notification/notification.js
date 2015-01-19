!function(){"use strict";function ZfNotificationController($scope,foundationApi){var controller=this;controller.notifications=$scope.notifications=[],controller.addNotification=function(info){var id=foundationApi.generateUuid();info.id=id,$scope.notifications.push(info)},controller.removeNotification=function(id){$scope.notifications.forEach(function(notification){if(notification.id===id){var ind=$scope.notifications.indexOf(notification);$scope.notifications.splice(ind,1)}})},controller.clearAll=function(){for(;$scope.notifications.length>0;)$scope.notifications.pop()}}function zfNotificationSet(foundationApi){function link(scope,element,attrs,controller){foundationApi.subscribe(attrs.id,function(msg){"clearall"===msg?controller.clearAll():(controller.addNotification(msg),scope.$apply())})}var directive={restrict:"EA",templateUrl:"components/notification/notification-set.html",controller:"ZfNotificationController",scope:!0,link:link};return directive}function zfNotification(foundationApi){function compile(){function preLink(scope,iElement,iAttrs){iAttrs.$set("zf-closable","notification")}function postLink(scope,element,attrs,controller){scope.active=!1,scope.position=scope.position?scope.position.split(" ").join("-"):"top-right";var animationIn=attrs.animationIn||"fadeIn",animationOut=attrs.animationOut||"fadeOut";setTimeout(function(){scope.active=!0,foundationApi.animate(element,scope.active,animationIn,animationOut)},50),scope.remove=function(){scope.active=!1,foundationApi.animate(element,scope.active,animationIn,animationOut),setTimeout(function(){controller.removeNotification(scope.notifId)},50)}}return{pre:preLink,post:postLink}}var directive={restrict:"EA",templateUrl:"components/notification/notification.html",replace:!0,transclude:!0,require:"^zfNotificationSet",controller:function(){},scope:{title:"=?",content:"=?",image:"=?",notifId:"=",position:"=?",color:"=?"},compile:compile};return directive}function zfNotificationStatic(foundationApi){function compile(){function preLink(scope,iElement,iAttrs){iAttrs.$set("zf-closable",type)}function postLink(scope,element,attrs){scope.position=scope.position?scope.position.split(" ").join("-"):"top-right";var animationIn=attrs.animationIn||"fadeIn",animationOut=attrs.animationOut||"fadeOut";foundationApi.subscribe(attrs.id,function(msg){"show"===msg||"open"===msg?scope.show():"close"===msg||"hide"===msg?scope.hide():"toggle"===msg&&scope.toggle(),scope.$apply()}),scope.hide=function(){scope.active=!1,foundationApi.animate(element,scope.active,animationIn,animationOut)},scope.remove=function(){scope.hide(),foundationApi.animate(element,scope.active,animationIn,animationOut)},scope.show=function(){scope.active=!0,foundationApi.animate(element,scope.active,animationIn,animationOut)},scope.toggle=function(){scope.active=!scope.active,foundationApi.animate(element,scope.active,animationIn,animationOut)}}var type="notification";return{pre:preLink,post:postLink}}var directive={restrict:"EA",templateUrl:"components/notification/notification.html",replace:!0,transclude:!0,scope:{title:"@?",content:"@?",image:"@?",position:"@?",color:"@?"},compile:compile};return directive}function zfNotify(foundationApi){function link(scope,element,attrs){element.on("click",function(e){foundationApi.publish(attrs.zfNotify,{title:scope.title,content:scope.content,position:scope.position,color:scope.color,image:scope.image}),e.preventDefault()})}var directive={restrict:"A",scope:{title:"@?",content:"@?",position:"@?",color:"@?",image:"@?"},link:link};return directive}angular.module("foundation.notification",["foundation.core"]).controller("ZfNotificationController",ZfNotificationController).directive("zfNotificationSet",zfNotificationSet).directive("zfNotification",zfNotification).directive("zfNotificationStatic",zfNotificationStatic).directive("zfNotify",zfNotify),ZfNotificationController.$inject=["$scope","FoundationApi"],zfNotificationSet.$inject=["FoundationApi"],zfNotification.$inject=["FoundationApi"],zfNotificationStatic.$inject=["FoundationApi"],zfNotify.$inject=["FoundationApi"]}();