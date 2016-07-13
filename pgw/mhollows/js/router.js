'use strict';

angular.module('gnApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MainController'
      })
      .state('app.home', {
        cache: false,
        url: '/home',
        views: {
          'menuContent': {
            //templateUrl: 'templates/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.feed', {
        url: '/feed?pageTitle',
        views: {
          'menuContent': {
            templateUrl: 'templates/feed.html',
            controller: 'FeedController'
          }
        }
      })
      .state('app.login', {
        cache: false,
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
          }
        }
      })
              
      .state('app.signup', {
        cache: false,
        url: '/signup',
        views: {
          'menuContent': {
            templateUrl: 'templates/signup.html',
            controller: 'SignUpController'
          }
        }
      })

      .state('app.announcement',{
        url: '/announcement/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/announcement.html',
            controller: 'AnnouncementController'
          }
        }
      })
      
      .state('app.announcement-detail',{
        url: '/announcement-detail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/announcement-detail.html',
            controller: 'AnnouncementController'
          }
        }
      })
      
      .state('app.announcement-like-detail',{
        url: '/announcement-like-detail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/announcement-like-detail.html',
            controller: 'AnnouncementController'
          }
        }
      })

      .state('app.passcode', {
        cache: false,
        url: '/passcode/:tel',
        views: {
          'menuContent': {
            templateUrl: 'templates/passcode.html',
            controller: 'PasscodeController'
          }
        }
      })
      .state('app.profile', {
        cache: false,
        url: '/profile/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
          }
        }
      })
      .state('app.edit-profile', {
        cache: false,
        url: '/edit-profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/edit-profile.html',
            controller: 'EditProfileController'
          }
        }
      })
      .state('app.chapters', {
        url: '/chapters',
        views: {
          'menuContent': {
            templateUrl: 'templates/chapters.html',
            controller: 'ChaptersController'
          }
        }
      })
      .state('app.groups', {
        url: '/groups',
        views: {
          'menuContent': {
            templateUrl: 'templates/groups.html',
            controller: 'GroupsController'
          }
        }
      })
      .state('app.members', {
        url: '/members?pageTitle&groupId',
        views: {
          'menuContent': {
            templateUrl: 'templates/members.html',
            controller: 'MembersController'
          }
        }
      })
      .state('app.members-new', {
        cache: false,
        url: '/members-new',
        views: {
          'menuContent': {
            templateUrl: 'templates/members-new.html',
            controller: 'MembersNewController'
          }
        }
      })
      .state('app.group-feed', {
        url: '/group-feed/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-feed.html',
            controller: 'GroupFeedController as GroupFeed'
          }
        }
      })
      .state('app.group-feed-more', {
        url: '/group-feed-more/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-feed-more.html',
            controller: 'GroupFeedMoreController'
          }
        }
      })
      .state('app.group-feed-new', {
        url: '/group-feed-new/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-feed-new.html',
            controller: 'GroupFeedNewController as groupFeedNew'
          }
        }
      })
      .state('app.group-feed-detail', {
        url: '/group-feed-detail/:postId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-feed-detail.html',
            controller: 'GroupFeedDetailController as groupFeedDetail'
          }
        }
      })
      .state('app.group-feed-detail-liked-by', {
        url: '/group-feed-detail-liked-by/:postId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-feed-detail-liked-by.html',
            controller: 'GroupFeedDetailLikedByController as groupFeedDetailLikedBy'
          }
        }
      })
      .state('app.group-feed-photos', {
        cache: false,
        url: '/group-feed-photos/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-feed-photos.html',
            controller: 'GroupFeedPhotosController'
          }
        }
      })
      .state('app.group-files', {
        cache: false,
        url: '/group-files/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'templates/group-files.html',
            controller: 'GroupFilesController'
          }
        }
      })
      .state('app.events', {
        url: '/events?pageTitle',
        views: {
          'menuContent': {
            templateUrl: 'templates/events.html',
            controller: 'EventsController'
          }
        }
      })
      .state('app.event-detail', {
        cache: false,
        url: '/event-detail/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-detail.html',
            controller: 'EventDetailController'
          }
        }
      })
      .state('app.event-photo-comments', {
        url: '/event-photo-comments/:photoId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-photo-comments.html',
            controller: 'EventPhotoCommentsController'
          }
        }
      })
      .state('app.event-register', {
        cache: false,
        url: '/event-register/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-detail.html',
            controller: 'EventDetailController'
          }
        }
      })
      .state('app.messages', {
        url: '/messages',
        views: {
          'menuContent': {
            templateUrl: 'templates/messages.html',
            controller: 'MessagesListController as messagesListCtrl'
          }
        }
      })
      .state('app.messages-new', {
        url: '/messages/new/:userId',
        views: {
          'menuContent': {
            templateUrl: 'templates/messages-new.html',
            controller: 'MessagesNewController as messagesNewCtrl'
          }
        }
      })
      .state('app.messages-room', {
        url: '/messages/:conversationId',
        views: {
          'menuContent': {
            templateUrl: 'templates/messages-room.html',
            controller: 'MessagesRoomController as messagesRoom'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.settings-chat-notifications', {
        url: '/settings/chat-notifications',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings/chat-notifications.html',
            controller: 'SettingsChatNotificationsController as chatNotifSettings'
          }
        }
      })
      .state('app.settings-group-notifications', {
        url: '/settings/group-notifications',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings/group-notifications.html',
            controller: 'SettingsGroupNotificationsController as groupNotifSettings'
          }
        }
      })
      .state('app.settings-log', {
        url: '/settings/log',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings/log.html',
            controller: 'SettingsLogController'
          }
        }
      })
      .state('app.settings-notification', {
        url: '/settings-notification',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings-notification.html',
            controller: 'SettingsNotificationController'
          }
        }
      });
    $urlRouterProvider.otherwise('/home');
  });
