const fnDiscord = require('../functions-discord');

module.exports = {
	name: 'support',
	description: 'Support a specific person with common SVRP issues',
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
	type: 1,
	options: [
		{
			name: 'topic',
			description: 'The specific area you are helping with',
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
		{
			name: 'target',
			description: 'The user who you are assisting',
			type: 'USER',
			required: true,
		},
	],
	async execute(interaction) {
		const help = interaction.options.getString('topic');
		const member = interaction.options.getUser('target');
		const embedMsg = fnDiscord.helpMessages(help);
		await interaction.reply(`<@${member.id}> you have been sent a help message by a Support Team member. Please check your DMs for more information.`);
		await member.send({ embeds: [embedMsg] });
	},
};