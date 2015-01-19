!function(){"use strict";function FoundationState($stateProvider){function buildState(path,state){return{templateUrl:path,controller:getController(state)}}function getController(state){var ctrl=state.controller||"DefaultController";return/\w\s+as\s+\w/.test(ctrl)||(ctrl+=" as PageCtrl"),ctrl}var complexViews={};this.registerDynamicRoutes=function(routes){var dynamicRoutes=routes||foundationRoutes;angular.forEach(dynamicRoutes,function(page){if(page.hasComposed)angular.isDefined(complexViews[page.parent])||(complexViews[page.parent]={children:{}}),page.controller&&(page.controller=getController(page)),complexViews[page.parent].children[page.name]=page;else if(page.composed)angular.isDefined(complexViews[page.name])||(complexViews[page.name]={children:{}}),page.controller&&(page.controller=getController(page)),angular.extend(complexViews[page.name],page);else{var state={url:page.url,templateUrl:page.path,parent:page.parent||"",controller:getController(page),data:{vars:page}};$stateProvider.state(page.name,state)}}),angular.forEach(complexViews,function(page){var state={url:page.url,parent:page.parent||"",data:{vars:page},views:{"":buildState(page.path,page)}};angular.forEach(page.children,function(sub){state.views[sub.name+"@"+page.name]=buildState(sub.path,page)}),$stateProvider.state(page.name,state)})},this.$get=angular.noop}function DefaultController($scope,$stateParams,$state){var params=[];angular.forEach($stateParams,function(value,key){params[key]=value}),$scope.params=params,$scope.current=$state.current.name,$state.current.views?($scope.vars=$state.current.data.vars,$scope.composed=$state.current.data.vars.children):$scope.vars=$state.current.data.vars}function DynamicRoutingConfig(FoundationStateProvider){FoundationStateProvider.registerDynamicRoutes(foundationRoutes)}function DynamicRoutingRun($rootScope,$state,$stateParams){$rootScope.$state=$state,$rootScope.$stateParams=$stateParams}angular.module("foundation.dynamicRouting",["ui.router"]).provider("$FoundationState",FoundationState).controller("DefaultController",DefaultController).config(DynamicRoutingConfig).run(DynamicRoutingRun),FoundationState.$inject=["$stateProvider"],DefaultController.$inject=["$scope","$stateParams","$state"],DynamicRoutingConfig.$inject=["$FoundationStateProvider"],DynamicRoutingRun.$inject=["$rootScope","$state","$stateParams"]}();