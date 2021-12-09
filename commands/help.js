const fnDiscord = require('../functions-discord');

module.exports = {
	name: 'help',
	description: 'Get help on common SVRP issues',
	type: 1,
	options: [
		{
			name: 'topic',
			description: 'The specific area you need help with',
			type: 3,
			required: true,
			choices: [
				{
					name: 'Application Review Status',
					value: 'app',
				},
				{
					name: 'Application Wait Time',
					value: 'eta',
				},
				{
					name: 'Apply for SVRP',
					value: 'apply',
				},
				{
					name: 'Clearing Cache',
					value: 'cache',
				},
				{
					name: 'Discord/Forum Association',
					value: 'discord',
				},
				{
					name: 'Frequently Asked Questions',
					value: 'faq',
				},
				{
					name: 'Forum URL',
					value: 'forum',
				},
				{
					name: 'In-Game Commands',
					value: 'commands',
				},
				{
					name: 'Clearing NUI Cache',
					value: 'nuicache',
				},
				{
					name: 'Prio Adjustment after Purchasing',
					value: 'prio',
				},
				{
					name: 'Purchasing Prio for Queue',
					value: 'queue',
				},
				{
					name: 'Report a Player',
					value: 'report',
				},
				{
					name: 'Reset Forum Password',
					value: 'password',
				},
				{
					name: 'Server Restart Times',
					value: 'restart',
				},
				{
					name: 'Server Rules',
					value: 'rules',
				},
				{
					name: 'Server Suggestions',
					value: 'suggest',
				},
				{
					name: 'Staff Application',
					value: 'staff',
				},
				{
					name: 'Steam Hex',
					value: 'hex',
				},
				{
					name: 'Streaming SVRP',
					value: 'streamer',
				},
				{
					name: 'SVRP India',
					value: 'india',
				},
				{
					name: 'SVRP Brazil',
					value: 'brazil',
				},
			],
		},
	],
	async execute(interaction) {
		const help = interaction.options.getString('topic');
		const embedMsg = fnDiscord.helpMessages(help);
		await interaction.reply({ embeds: [embedMsg], ephemeral: true });
	},
};