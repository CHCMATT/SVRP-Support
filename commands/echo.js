module.exports = {
	name: 'echo',
	description: 'Send a message as if the bot sent it',
	permission: [
		{
			id: '621865757390798884', // Admin
			type: 'ROLE',
			permission: true,
		},
		{
			id: '666349313345060864', // Mod
			type: 'ROLE',
			permission: true,
		},
		{
			id: '615784815027027969', // Support
			type: 'ROLE',
			permission: true,
		},
		{
			id: '583884996574445589', // Everyone
			type: 'ROLE',
			permission: false,
		},
	],
	options: [
		{
			name: 'message',
			description: 'The message you want to send',
			type: 'STRING',
			required: true,
		},
	],
	async execute(interaction) {
		const message = interaction.options.getString('message');
		const user = interaction.user;
		const channel = interaction.channel;
		console.log(`User ${user} sent echo message "${message}" in ${channel}`);
		await interaction.reply({ content: `Sent message "${message}" in ${channel}.`, ephemeral: true });
		await interaction.channel.send({ content: message });
	},
};