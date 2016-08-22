define(['dojo/i18n!./nls/app.js?v=' + app.cfg.version, 'sign-in/PortalHelper', 'create-app/UserAgentHelper', 'lib-build/hbars!./templates/signInCreateDialog'],
function(createStoryi18n, PortalHelper, UserAgentHelper, signInCreateDialog) {
  'use strict';

  function getCookie(c_name)
  {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");

    if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
    }

    if (c_start == -1) {
      c_value = null;
    }
    else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = c_value.length;
      }
      c_value = decodeURIComponent(c_value.substring(c_start, c_end));
    }
    return c_value;
  }

  function loadBuilder(appType, layout) {
    var hasProtocol = false,
      baseUrl = '',
      layoutOpt = layout ? '&layout=' + layout : '',
      cookie = JSON.parse(getCookie('esri_auth'));

    baseUrl = PortalHelper.getBaseUrl(cookie);

    window.open(baseUrl + '/apps/' + appType + '/index.html?fromScratch' + layoutOpt, '_blank');
  }


  function checkIfProtocol(url) {
    var hasProtocol = (/^.+:\/\//).test(url);
    return hasProtocol;
  }

  function buildApp(app, layout)
  {
    var signedIn = false;

    if(window.standalone) {
      loadBuilder(app, layout);
    }

    else {
      signedIn = window.signInManager.checkIfSignedIn();

      if(signedIn) {
        loadBuilder(app, layout);
      }
      else {
        window.signInManager.showBuildSignInDialog(function() {
          showContinueBuildDialog(app, layout);
        }, app, layout);
      }
    }
  }

  /**
  @summary Shows the dialog that allows the user to continue on to the app builder when signed in.
          This is necessary because browsers won't carry out a window.open that is not the direct result of user input.
          Since the user had to sign in in between clicking the "build app" button and getting to the app builder, it is a delayed event.
          By clicking "continue to (appname) builder" in this dialog, they can continue through.
  */
  function showContinueBuildDialog(app, layout) {
      var layoutOpt = layout ? '&layout=' + layout : '',
        cookie = JSON.parse(getCookie('esri_auth')),
        baseUrl = PortalHelper.getBaseUrl(cookie),
        appName = '',
        url = '',
        continueString = '';

    url = baseUrl + '/apps/' + app + '/index.html?fromScratch' + layoutOpt;


    if(app) {
      switch(app) {
        case 'MapJournal':
          appName = 'Map Journal';
          break;
        case 'MapTour':
          appName = 'Map Tour';
          break;
        case 'MapSeries':
          appName = 'Map Series';
          break;
        case 'StorytellingSwipe':
          appName = 'Swipe/Spyglass';
          break;
        case 'Cascade':
          appName = 'Cascade';
          break;
        case 'StoryMapCrowdsource':
          appName = 'Crowdsource';
          break;
        case 'Shortlist':
          appName = 'Shortlist';
          break;
        default:
          break;
      }
    }

    continueString = createStoryi18n.signInBuildDialog.continue.replace(/{{APP_NAME}}/, appName);

    $('body').append(signInCreateDialog(
      {
          welcome: createStoryi18n.signInBuildDialog.welcome,
          continue: continueString
      }
    ));

    $('#continue-build-container').css('display', 'block');
    $('#continue-build-wrapper').css('display', 'block');

    $('body').addClass('no-scroll');

    // sniff for IE, even IE 11 (not edge)
    if(UserAgentHelper.isInternetExplorerOrEdge()) {
      $('html').addClass('no-scroll');
    }

    addContinueBuildEvents(url);
  }

  /**
  @summary Adds the events needed when we show the "continue to (appname) builder" dialog
  */
  function addContinueBuildEvents(url) {
    $('#build-app-confirmation').off('click').on('click', function() {

      window.open(url, "_blank");

      hideContinueBuildDialog();
    });

    $('#continue-build-container').off('click').on('click', function(e) {
      // if the element that triggered this is the container (and not one of its children), dismiss the dialog.
      if(e.target === e.currentTarget) {
        hideContinueBuildDialog();
      }
    });

    $('#continue-build-close').off('click').on('click', function() {
      hideContinueBuildDialog();
    });
  }

  function hideContinueBuildDialog() {
    var frame = $('#continue-build-wrapper'),
      container = $('#continue-build-container'),
      frameFade = 100,
      containerFade = 500;

    frame.fadeOut(frameFade);

    if(UserAgentHelper.isInternetExplorerOrEdge()) {
      $('html').removeClass('no-scroll');
      $('body').removeClass('no-scroll');
      container.fadeOut(containerFade);
    }
    else {
      container.fadeOut(containerFade, function() {
        $('body').removeClass('no-scroll');
      });
    }
  }

  function buildSwipe()
  {
    buildApp("StorytellingSwipe");
  }

  function buildTour()
  {
    buildApp("MapTour");
  }

  function buildJournal()
  {
    buildApp("MapJournal");
  }

  function buildSeries(layout)
  {
    buildApp("MapSeries", layout);
  }

  function buildCascade() {
    buildApp('Cascade');
  }

  function buildCrowdsource() {
    buildApp('StoryMapCrowdsource');
  }

  function buildShortlist() {
    buildApp('Shortlist');
  }


  var init = function(selector) {
    initUI(selector);
    addEvents(selector);
  },


  initUI = function(selector) {
    selector.find('[data-template!=""][data-template]').addClass('build-enabled');
  },


  addEvents = function(selector) {

    selector.find('[data-template="tour"]').off('click').on('click', function() {
      buildTour();
    });

    selector.find('[data-template="journal"]').off('click').on('click', function() {
      buildJournal();
    });

    selector.find('[data-template="crowdsource"]').off('click').on('click', function() {
      buildCrowdsource();
    });

    selector.find('[data-template="cascade"]').off('click').on('click', function() {
      buildCascade();
    });

    selector.find('[data-template="shortlist"]').off('click').on('click', function() {
      buildShortlist();
    });

    selector.find('[data-template="series"]').off('click').on('click', function() {
      var layout = $(this).data('layout');
      if(layout) {
        buildSeries(layout);
      }
      else {
        buildSeries();
      }
    });

    selector.find('[data-template="swipeSpyglass"]').off('click').on('click', function() {
      buildSwipe();
    });
  };


  init($(document));


  return {
    init: init,
    showContinueBuildDialog: showContinueBuildDialog
  }
});
