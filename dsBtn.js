module.exports.pressed = async (interaction) => {
	console.log('[dsBtn.js] running dsBtn pressed()');
	try {
		// const guild = interaction.guild;
		// const message = interaction.message;
		const buttonID = interaction.customId;
		// const member = interaction.member;
		switch (buttonID) {
		case 'one':
			console.log('[dsBtn.js] button');
			break;
		case 'resetcancel':
			interaction.message.delete();
			interaction.reply('Interaction cancelled.');
			break;
		default:
			interaction.reply('I\'m not familiar with this button. Please ask CHCMATT to fix this.');
			console.log(`[dsBtn.js] ERROR: unrecognized button ${interaction.customId}`);
		}
	}
	catch (error) {
		console.log('[dsBtn.js] Error in button press');
		console.log(error);
	}
};