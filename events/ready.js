module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} is online!`);

	
		client.user.setPresence({
			activities: [
				{
					name: '', //The bots status or if you like what it is doing
					type: '', //pretty obvious
					details: '', //not sure tbh
					timestamps: {
						start: Date.now() //funny
					}
				}
			],
			status: '' //Allows you to set it to:
			//dnd
			//idle
			//online
			
		});
	}
};
