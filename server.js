if (Meteor.isServer) {
	
   questions = new Mongo.Collection('questions');


	Meteor.publish("questions", function () {
    	return questions.find();
  	});

	//Purge all questions!!!
	questions.remove({});

	//Add new questions
  	questions.insert({ type: 'question', text: 'Move a full page down.', answer: [17, 70], answerText: '"Control + f" moves one page down', toContinue:'Press "control + f" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Move one row down.', answer: [74], answerText: 'The <b>j</b> key moves down. To move the cursor, use the h, j, k, l keys.<pre>     &and;<br>     k<br>&lt; h     l &gt;<br>     j<br>     &or;<pre>', toContinue:'Press j to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Move one row up.', answer: [75], answerText: 'The <b>k</b>" key moves up. To move the cursor, use the h,j,k,l keys. <pre>     &and;<br>     k<br>&lt; h     l &gt;<br>     j<br>     &or;<pre>', toContinue:'Press "k" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Move one space to the right.', answer: [76], answerText: 'The "l" key moves one space to the right. To move the cursor, use the h,j,k,l keys. <pre>     &and;<br>     k<br>&lt; h     l &gt;<br>     j<br>     &or;<pre>', toContinue:'Press "l" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Move one space to the left.', answer: [72], answerText: 'The "h" key moves down. To move the cursor, use the h, j, k, l keys. <pre>     &and;<br>     k<br>&lt; h     l &gt;<br>     j<br>     &or;<pre>', toContinue:'Press "h" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Delete a single character while in Normal mode.', answer: [88], answerText: 'While in Normal mode press	"x" to delete the character under the cursor.', toContinue:'Press "x" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Move a full page up.', answer: [17, 66], answerText: '"control + b" moves one page up ', toContinue:'Enter "control+ b" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Delete an entire line', answer: [68, 68], answerText: '"dd" will delete an entire line ', toContinue:'Enter "dd" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Delete to the end of the current word', answer: [68, 69], answerText: '"de" will delete to the end of the current word, INCLUDING the last character ', toContinue:'Press "de" to continue.', createdAt: new Date() });
  	questions.insert({ type: 'question', text: 'Delete to the end of the next word', answer: [68, 87], answerText: '"dw" will delete to the end of the next word, EXCLUDING its first character ', toContinue:'Press "dw" to continue.', createdAt: new Date() });

}


//         (`-.           _   .-')    
//     _(OO  )_        ( '.( OO )_  
// ,--(_/   ,. \ ,-.-') ,--.   ,--.)
// \   \   /(__/ |  |OO)|   `.'   | 
//  \   \ /   /  |  |  \|         | 
//   \   '   /,  |  |(_/|  |'.'|  | 
//    \     /__),|  |_.'|  |   |  | 
//     \   /   (_|  |   |  |   |  | 
//      `-'      `--'   `--'   `--' 