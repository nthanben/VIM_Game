// This is a test and will never exist in real production

if (Meteor.isClient) {

	//Iron Router
	Router.route('/', function () {
	    this.render('home');
	});

	//Color Keys for SVG image
	$(document).keydown(function(e) {
	    console.log('keypress', e);
	    console.log(e.keyCode);
	    keyDown(e.keyCode);
	});

	$(document).keyup(function(e) {
	    console.log('keyup', e);
	    keyUp(e.keyCode);
	});

	function keyDown(keyCode){
	    svgId = '#rect' + keyCode;
	    $(svgId).css('fill', 'yellow');
	}

	function keyUp(keyCode){
	    svgId = '#rect' + keyCode;
	    $(svgId).css('fill', '#cccccc')
	}
}
