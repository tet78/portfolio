angular.module('app.controllers').controller('question',function ($scope, $location, questions, $stateParams, layout,
                                                                  iStorageMemory, activity, flurry) {

  flurry.log('question', {id: $stateParams.id});

  var optionsSubview = 'templates/question/options.html';
  var resultsSubview = 'templates/question/results.html';

  $scope.loading = true;
  $scope.blockedLoading = false;
  activity.setEntityRead({id: Number($stateParams.id), type: 'question'});

  questions.load($stateParams.id).then(function (question) {
    $scope.loading = false;
    $scope.q = question;

    $scope.shareBody = question.subject;
    $scope.shareImage = question.share_picture;

    if (question.is_answered || question.expired) {
      $scope.subview = resultsSubview;
    } else {
      $scope.subview = optionsSubview;
    }

    $scope.answer_message = iStorageMemory.get('question-answered-' + $scope.q.id);
    if (!$scope.answer_message) {
      $scope.answer_message = question.is_answered ? 'You answered' : ' You did not answer';
    }
    layout.focus($location.search().focus);
  }, function (error) {
    $scope.alert(error, function () {
      $scope.loading = false;
    }, 'Error', 'OK');
  });

  $scope.current = null;

  $scope.data = {
    comment: '',
    privacy: 0
  };

  $scope.selectOption = function (option) {
    if (option) {
      $scope.data.option_id = option.id;
      $scope.current = option;
    } else {
      $scope.data.option_id = null;
      $scope.current = null;
    }
  };
  
  $scope.$watch('loading', function(){
    if($scope.loading){
      $scope.showSpinner();
    } else if($scope.loading === false) {
      $scope.hideSpinner();
    }
  });
}).controller('question.answer-form',function ($scope, $state, iStorageMemory, homeCtrlParams, flurry) {

  $scope.answer = function () {

    $scope.showSpinner();
    $scope.$parent.q.answer($scope.data).then(function () {
      homeCtrlParams.loaded = false;
      flurry.log('answer to question', {id: $scope.$parent.q.id});
      $scope.hideSpinner();
      if ($scope.q.recipients) {
        iStorageMemory.put('question-answered-' + $scope.$parent.q.id, 'Your response “' + $scope.$parent.current.title + '” was sent to ' +
          $scope.$parent.q.recipients);
      }
      $state.reload();

    }, function () {
      $scope.hideSpinner();
      $state.reload();
    });
  };
  
}).controller('question.influences',function ($scope, $stateParams, questions, questionCache, loaded, flurry) {
  $scope.q = questionCache.get($stateParams.id);
  $scope.showSpinner();
  questions.loadAnswers($stateParams.id).then(function (answers) {
    $scope.hideSpinner();
    $scope.answers = answers;
  }, function(){
    $scope.hideSpinner();
  });
  
}).controller('question.news',function ($scope, $location, $stateParams, questions, iJoinFilter, activity, flurry, layout) {
  
  flurry.log('leader news', {id: $stateParams.id});
  activity.setEntityRead({id: Number($stateParams.id), type: 'leader-news'});

  $scope.showSpinner();
  questions.load($stateParams.id).then(function (question) {
    $scope.hideSpinner();
    $scope.q = question;
    $scope.shareBody = question.subject;
    $scope.shareImage = question.share_picture;
    layout.focus($location.search().focus);
  }, function(){
    $scope.hideSpinner();
    $scope.back();
  });

}).controller('question.leader-petition', function ($scope, $state, $stateParams, questions, iJoinFilter,
                                                    serverConfig, homeCtrlParams, activity, flurry, layout) {
  
  flurry.log('leader petition', {id: $stateParams.id});
  
  $scope.data = {
    privacy: 0,
    comment: ''
  };
  activity.setEntityRead({id: Number($stateParams.id), type: 'petition'});

  $scope.showSpinner();
  questions.load($stateParams.id).then(function (question) {
    $scope.hideSpinner();
    $scope.q = question;
    $scope.data.option_id = question.options[0].id;

    $scope.shareTitle = question.petition_title;
    $scope.shareBody = question.petition_body;
    $scope.shareLink = serverConfig.shareLink + '/petition/' + question.id;
    $scope.shareImage = question.share_picture;
    layout.focus($stateParams.focus);
  }, function(){
    $scope.hideSpinner();  
    $scope.back();
  });

  $scope.answer = function () {
    $scope.showSpinner();
    $scope.q.answer($scope.data).then(function () {
      homeCtrlParams.loaded = false;
      flurry.log('answer to leader petition', {id: $scope.q.id});
      $state.reload();
    }, function () {
      $state.reload();
    });
  };

  $scope.unsign = function () {
    $scope.showSpinner();
    questions.unsignFromPetition($scope.q.id, $scope.q.options[0].id).then($state.reload, $state.reload);
    flurry.log('unsign petition', {id: $scope.q.id});
    homeCtrlParams.loaded = false;
  };
});
