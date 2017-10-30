
// var s,
//     app = {

//         settings : {
//             jpm: {}
//         },
//         init: function() {
//             //Global settings
//             s = this.settings;

//             // initalize
//             this.initalizers();
//             this.bindUiActions();
//         },
//         bindUiActions: function (){
//             // Should include all JS user interactions
//             var self = this;

//             $('.js-share-popup').on('click', function(){
//                 self.socialIconClick( $(this) );
//             });

//         },
//         initalizers: function (){
//             // Initalize any plugins for functions when page loads

//             // JPanel Menu Plugin -
//             this.jpm();

//             // Fast Click for Mobile - removes 300ms delay - https://github.com/ftlabs/fastclick
//             FastClick.attach(document.body);

//             // Add Bg colour from JS so jPanel has time to initalize
//             $('body').css({"background-color":"#333337"});

//             //wrap all iframes in fitvid to make them responsive
//             $('iframe').wrap('<div class="responsive-video-container"></div>');
//             $('.responsive-video-container').fitVids();
//         },
//         socialIconClick: function(el) {
//             // Post page social Icons
//             // When Clicked pop up a share dialog

//             var platform = el.data('platform');
//             var message = el.data('message');
//             var url = el.data('url');

//             if (platform == 'mail'){
//                 // Let mail use default browser behaviour
//                 return true;
//             } else {
//                 this.popItUp(platform, message, url);
//                 return false;
//             }
//         },
//         popItUp : function (platform, message, url) {
//             // Create the popup with the correct location URL for sharing
//             var popUrl,
//                 newWindow;

//             if( platform == 'twitter'){
//                 popUrl = 'http://twitter.com/home?status=' + encodeURI(message) + '+' + url;

//             } else if(platform == 'facebook'){
//                 popUrl = 'http://www.facebook.com/share.php?u=' + url + '&amp;title=' + encodeURI(message);
//                 console.log(popUrl);
//             }
//             newWindow = window.open(popUrl,'name','height=500,width=600');
//             if (window.focus) { newWindow.focus(); }
//             return false;

//         },
//         jpm: function(){
//             // Off Screen Navigation Plugin

//             s.jpm = $.jPanelMenu({
//                 menu : '#menu',
//                 trigge : '.menu-trigger',
//                 animated: false,
//                 direction: 'right',
//                 openPosition: '220px',
//                 beforeOpen : ( function() {}),
//                 beforeClose : ( function() {})
//             });

//             s.jpm.on();
//             var jPM = {};

//             // Important for use in Home page and category page
//             // These pages use a percentage value for height and
//             // 100% value needs to be added to the .jPanelMenu-panel
//             // div created by the plugin
//             if( $('body').hasClass('full-height') ) {
//                 $('.jPanelMenu-panel').addClass('full');
//             }

//         }
//     };

 $(document).ready(function(){
    var feed = new Instafeed({
        get: 'user',
        userId: '5827019264',
        clientId: '772a6d810cc844a9aee69fe841d40acb',
        accessToken: '5827019264.772a6d8.7b48f8fac03b4e82aa30378bc45e1216',
        resolution: 'standard_resolution',
        template: '<div class="col-md-3"><img src="{{image}}" /></div>'
    });
    feed.run();
});



