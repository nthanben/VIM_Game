if (Meteor.isClient) {

	//Subscriptions
	Meteor.subscribe('questions');
	Questions = new Mongo.Collection('questions');
	Score = new Mongo.Collection(null);

	//Iron Router
	Router.route('/', function () {
	    this.render('home', {
	    	// data: function () { return Questions.findOne({}); }
  		});
  		Score.insert({correct: 0, incorrect: 0});
  		Session.set('incorrect', false);
	});	

	//Color Keys for SVG image
	$(document).keydown(function(e) {
		console.log('keycode:', e.keyCode);
	    keyColorDown(e.keyCode, '#F7CA88');
	    setUserAnswer(e.keyCode);
	});

	$(document).keyup(function(e) {
	    keyColorUp(e.keyCode);
	});

	function keyColorDown(keyCode, color){
	    svgId = '#rect' + keyCode;
	    $(svgId).css('fill', color);
	}

	function keyColorUp(keyCode){
		// var rectId = "rect" + keyCode;
		var className = document.getElementById('rect' + keyCode).getAttribute("class");
		var rectFill = document.getElementsByClassName(className).style;
		var color = $('.st0').css("fill");

		svgId = '#rect' + keyCode;

		if(className == 'st0'){
	    	$(svgId).css('fill', '#E6E6E6');
		} else {
	    	$(svgId).css('fill', '#B3B3B3');
		}
	}

	//Set user answer using keyCode from user inputs
	function setUserAnswer(keyCode){
		var answer = Session.get('answer');
		if(answer){
			answer.push(keyCode);
			Session.set('answer', answer);
			// console.log("answer", answer);
		}
		else{
			Session.set('answer', [keyCode]);
			// console.log("answer", answer);
		}
		checkAnswer();
	}

	function checkAnswer() {
		var userAnswer = Session.get('answer');
		var currentQuestion = Session.get('currentQuestion');
		var answer = currentQuestion[0].answer;

		for(var i = 0; i < userAnswer.length; i++){
			if(userAnswer[i] !== answer[i]){
				wrongAnswer();
			} else if(userAnswer.length == answer.length){
				correctAnswer();
			}
		}
	}

	function wrongAnswer(){
		var score = Score.find().fetch();
		var scoreId = score[0]._id
		Score.update(scoreId, {$inc: {incorrect: 1}});

		var currentQuestion = Session.get('currentQuestion');
		console.log('currentQuestion:', currentQuestion);
		var answerSet = currentQuestion[0].answer;
		console.log('answerSet:', answerSet);

		for(var i = 0; i < answerSet.length; i++){
			keyColorDown(answerSet[i], 'green');
		}

		Session.set('incorrect', true);
		Session.set('answer', []);
	}

	function correctAnswer() {
		if(Session.get('incorrect') == false){
			var score = Score.find().fetch();
			var scoreId = score[0]._id
			Score.update(scoreId, {$inc: {correct: 1}});
		}
		Session.set('incorrect', false);
		Session.set('answer', []);
		setQuizAnswer();
	}

	function setQuizAnswer(){
		var lastQuestion = Session.get('currentQuestion');
		var questions = Questions.find().fetch()
		var currentQuestion = questions[Math.floor(Math.random() * questions.length)];

		Session.set('currentQuestion', [currentQuestion]);	
	}

	Template.home.helpers({
		start: function() {
			var questions = Session.get('currentQuestion');
			if(!questions){
				return true;
			}
		}
	})

	Template.home.events({
		'click #start': function(){
			console.log('clicked start');
			Session.set('answer', []);
			Session.set('incorrect', false);
			setQuizAnswer();
		}
	})

	Template.answer.helpers({
		incorrect: function(){
			return Session.get('incorrect');
		},
		question: function() {
			var question = Session.get('answer');
			return Session.get('currentQuestion');
		}
	})

	Template.score.helpers({
		score: function() {
			var score = Score.find().fetch();
			console.log('score:', score);
			return score;
		}
	})

}
