describe('Dynamic Event', function(){
  var $compile, scope;

  beforeEach(module('nag.dynamicEvent'));

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope;
    $compile = _$compile_;

    scope.eventFlag1 = true;
    scope.eventData = 0;
    scope.event1 = function() {
      scope.eventData += 1;
    };
    scope.event2 = function() {
      scope.eventData += 2;
    };
  }));

  var setupElement = function(scope, event, eventObject) {
    var element = $compile('<div nag-' + event + '="' + eventObject + '"></div>')(scope);
    scope.$digest();
    return element;
  }

  it('should be able to switch events for click', function() {
    var element = setupElement(scope, 'click', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('click');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('click');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for dblclick', function() {
    var element = setupElement(scope, 'dblclick', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('dblclick');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('dblclick');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mousedown', function() {
    var element = setupElement(scope, 'mousedown', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mousedown');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mousedown');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mouseup', function() {
    var element = setupElement(scope, 'mouseup', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mouseup');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mouseup');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mouseover', function() {
    var element = setupElement(scope, 'mouseover', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mouseover');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mouseover');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mouseout', function() {
    var element = setupElement(scope, 'mouseout', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mouseout');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mouseout');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mousemove', function() {
    var element = setupElement(scope, 'mousemove', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mousemove');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mousemove');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mouseenter', function() {
    var element = setupElement(scope, 'mouseenter', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mouseenter');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mouseenter');

    expect(scope.eventData).toEqual(3);
  });

  it('should be able to switch events for mouseleave', function() {
    var element = setupElement(scope, 'mouseleave', '{\'event1()\': eventFlag1, \'event2()\': !eventFlag1}');

    element.trigger('mouseleave');

    expect(scope.eventData).toEqual(1);

    scope.eventFlag1 = false;
    scope.$digest();

    element.trigger('mouseleave');

    expect(scope.eventData).toEqual(3);
  });
});
