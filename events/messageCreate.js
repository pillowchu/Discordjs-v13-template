// Rip the clientID from the settings.json file.

const { clientID } = require('../settings.json')
// These will execute upon a message being created
// To add a new one, add a new line containing the following:
// ['command', 'response'],
// Where command is what triggers the response.
const textActions = [
  ['test', 'test response'],
];

// Export out the code to run in index.js upon a message being sent
module.exports = {
	name: 'messageCreate',
	async execute(msg) {
		// Prevent the bot from replying to itself
		try {
			if ( msg.member.id == clientID ) return;
		} catch (e) {
			return e;
		}
		
		// Text actions
		for ( var i = 0; i < textActions.length; ++i ) {
			if ( textActions[i][0] === msg.content.toLowerCase() ) {
				await msg.reply(textActions[i][1].toString());
				break;
			}
		}
	}
}

