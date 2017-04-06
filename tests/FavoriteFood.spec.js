describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));
    it('should filter on favoriteFood correctly', function () {
       var mockedList = [{
           name: 'Andrew',
           favoriteFood: 'Italian'
       }, {
           name: 'Berry',
           favoriteFood: 'French'
       }, {
           name: 'Kate',
           favoriteFood: 'Chinese'
       }];

        var results = $filter('favoriteFood')(mockedList, 'Italian');

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Andrew');
    });
	
});