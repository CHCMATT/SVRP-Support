module.exports.pressed = async (interaction) => {
	console.log('running dsBtn pressed()');
	try {
		// const guild = interaction.guild;
		// const message = interaction.message;
		const buttonID = interaction.customId;
		// const member = interaction.member;
		switch (buttonID) {
		case 'one':
			console.log('button');
			break;
		case 'resetcancel':
			interaction.message.delete();
			interaction.reply('Canceled.');
			break;
		default:
			interaction.reply('I\'m not familiar with this button. Please tag PMass to fix this');
			console.log(`ERROR: unrecognized button ${interaction.customId}`);
		}
	}
	catch (error) {
		console.log('error in button Press');
		console.log(error);
	}
};