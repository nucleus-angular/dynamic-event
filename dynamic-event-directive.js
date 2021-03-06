/**
 * Dynamic Events.
 *
 * This provides a dynamic way to define events that AngularJS has built-in support for.  The events that are supported are:
 *
 * - click
 * - dblclick
 * - mousedown
 * - mouseup
 * - mouseover
 * - mouseout
 * - mousemove
 * - mouseenter
 * - mouseleave
 * - keydown
 * - keyup
 * - keypress
 * - submit
 * - focus
 * - blur
 * - copy
 * - cut
 * - paste
 *
 * Instead of doing ```ng-[event]``` you just do ```nag-[event]```.
 *
 * Base off the value of ```clickEvent2Active```, a different function will be executed when the button is clicked:
 *
 * ```html
 * <button nag-click="{'clickEvent1()': !clickEvent2Active, 'clickEvent2()': clickEvent2Active}">Button</button>
 * ```
 *
 * @todo: upgrade to 1.2.0 version
 *
 * @module nag.dynamicEvent
 *
 * @nghtmlattribute {expression} nag-[event name] Expression to determine functionality executed when event happens
 */
(function() {
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;

  function camelCase(name) {
    return name.
      replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).
      replace(MOZ_HACK_REGEXP, 'Moz$1');
  }

  var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i;

  function directiveNormalize(name) {
    return camelCase(name.replace(PREFIX_REGEXP, ''));
  }

  var lowercase = function(string){return angular.isString(string) ? string.toLowerCase() : string;};

  var nagDynamicEventDirectives = {};
  angular.forEach(
    'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '),
    function(name) {
      var directiveName = directiveNormalize('nag-' + name);
      nagDynamicEventDirectives[directiveName] = ['$parse', function($parse) {
        return {
          compile: function($element, attr) {
            var fn = $parse(attr[directiveName]);
            return function(scope, element, attr) {
              element.on(lowercase(name), function(event) {
                var processEventObject = function() {
                  var results = fn(scope, {$event:event});

                  if(angular.isObject(results)) {
                    var trueFunction = null;

                    angular.forEach(results, function(check, newFunction) {
                      if(check === true) {
                        trueFunction = $parse(newFunction);
                      }
                    });

                    if(angular.isFunction(trueFunction)) {
                      trueFunction(scope, {$event:event});
                    }
                  }
                };
                //modification: to prevent $apply already in progress, might submit pull request to angular : https://github.com/angular/angular.js/issues/4947
                if(scope.$root.$$phase) {
                  processEventObject();
                } else {
                  scope.$apply(function() {
                    processEventObject();
                  });
                }
              });
            };
          }
        };
      }];
    }
  );

  angular.module('nag.dynamicEvent')
  .directive(nagDynamicEventDirectives);
}());
