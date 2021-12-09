const Discord = require('discord.js');

// Send a help message based on an option provided
module.exports.helpMessages = (option) => {
	try {
		let embedMsg = {};
		switch (option) {
		case 'app':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Whitelist Application Status')
				.setDescription('There is currently a large queue of whitelisted applications. All standard whitelist applications can take up to 30 days because of this backlog. \n\nIf that\'s too long of a wait, you can purchase donator whitelisting for your application here: \n> https://svrp.net/index.php?account/upgrades \n\n__Note__: If you choose to donate after submitting a standard whitelist application, please let us know in the <#697795907927932988> channel, so we can move your application to the donator queue.')
				.setTimestamp();
			break;
		case 'apply':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Application Information')
				.setDescription('All applications that are open to the public: \n\n__Note__: If you receive a message stating you do not have access, and you are currently whitelisted on the server, you will need to reassociate your forum and Discord accounts, then try again.')
				.addFields(
					{ name: 'Regular Whitelist Application:', value: 'https://svrp.net/index.php?form/civilian-application.1/select' },
					{ name: 'Donator Whitelist Application:', value: 'https://svrp.net/index.php?form/donator-civilian-application.14/select' },
					{ name: 'Staff / Support Application:', value: 'https://svrp.net/index.php?form/staff-application.13/select' },
					{ name: 'Department Application:', value: 'https://svrp.net/index.php?categories/leo-ems-applications.53/' },
				)
				.setTimestamp();
			break;
		case 'cache':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('A guide to clearing your FiveM cache')
				.setDescription('Follow the steps in this video to clear your FiveM cache:\n> https://youtu.be/lqjO35z-lBY?t=32 \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'commands':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('In-Game Commands / Controls')
				.setDescription('Here\'s the link to our forum page containing keybinds and commands that you can use in the server: \n> https://svrp.net/index.php?threads/controls-commands.3789/ \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'discord':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('How to reassociate your forum and Discord accounts')
				.setDescription('The gif below will show you the steps for connecting your Discord account with our forums. \n\nCommon issues:\n• If you receive a **No valid connected account request available** error, try using a different browser - ensure you are signed in to Discord on your browser, then try clearing your browser cache/cookies.\n• If you receive a **This account\'s email is already associated with another member** error, this means that you have another forum account. Please sign in to your original SVRP forum account to avoid any issues. \n\nIf you need further assistance, you can ask for help in the <#697795907927932988> channel.')
				.setImage('https://media0.giphy.com/media/L4NBIvIXLtYlZijV9d/giphy.gif')
				.setTimestamp();
			break;
		case 'eta':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Wait Time after Applying')
				.setDescription('The normal wait times after applying are listed below:')
				.addFields(
					{ name: 'Regular Whitelist', value: '~15 days' },
					{ name: 'Donator Whitelist', value: '~1-3 days' },
				)
				.setTimestamp();
			break;
		case 'faq':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Frequently Asked Questions')
				.setDescription('Most frequently asked questions can be found on our forum page here:\n> https://svrp.net/index.php?threads/frequently-asked-questions.3790/ \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'forum':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Forum Information')
				.setDescription('You can find our forums here:\n> https://svrp.net/index.php')
				.setTimestamp();
			break;
		case 'hex':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Steam Hex ID Guide')
				.setDescription('> 1) Open your Steam profile.\n> 2) Right click and click "Copy Page URL".\n> 3) Head over to <https://www.vacbanned.com> and paste the link.\n> 4) Look for your Steam Hex as shown in the image below.\n\nMake sure to include the Hex value, and not the Dec value.\n\nIf you need further assistance, you can ask for help in the <#697795907927932988> channel.')
				.setImage('https://i.imgur.com/AdQ0wBx.png')
				.setTimestamp();
			break;
		case 'india':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('SVRP India')
				.setDescription('You can find all information necessary about SVRP\'s India server below:')
				.addFields(
					{ name: 'SVRP India Discord', value: '> https://discord.gg/fcc4CUU' },
					{ name: 'SVRP India Forums', value: '> https://asia.svrp.net' },
				)
				.setTimestamp();
			break;
		case 'brazil':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('SVRP Brazil')
				.setDescription('You can find all information necessary about SVRP\'s Brazil server below:')
				.addFields(
					{ name: 'SVRP Brazil Discord', value: '> https://discord.gg/svrpbr' },
					{ name: 'SVRP Brazil Forums', value: '> https://brazil.svrp.net/' },
				)
				.setTimestamp();
			break;
		case 'nuicache':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('A guide to clearing your NUI cache')
				.setDescription('If you\'re having issues with your phone, MDT, or other User Interface (UI) icons not loading properly, clearing your NUI cache can often help fix the issue.\n\n1. Close FiveM.\n2. Open File Explorer.\n3. Navigate to the `%localappdata%\\FiveM\\FiveM.app\\data` location.\n4. Delete the entire "nui-storage" folder.\n5. Launch FiveM.\n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setImage('https://i.imgur.com/5eynZRP.png')
				.setTimestamp();
			break;
		case 'password':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Password Reset Information')
				.setDescription('If you are trying to log in to the forums and need a password reset, DM <@322205520058515459> or <@640656609265319937> on Discord. Make sure to include: \n• your forum username\n• your email address\n• a brief description of the issue.\n\nIf you need further assistance, you can ask for help in the <#697795907927932988> channel.')
				.setTimestamp();
			break;
		case 'prio':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Priority Adjustment Information')
				.setDescription('After donating through the Tebex store, your priority should be adjusted automatically after about 5-10 minutes.\n\nIf you run into issues, make sure to connect Tebex to your FiveM account.\n\nIf you need to cancel your priority for any reason, you can do that through the link in the email you received when you first subscribed.\n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'queue':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Queue Priority Information')
				.setDescription('If are looking to have priority in the queue, you can purchase our tiered priority at the link below:\n> https://store.svrp.net/ \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setImage('https://i.imgur.com/rgszO1m.png')
				.setTimestamp();
			break;
		case 'report':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Reporting a player for breaking the server rules')
				.setDescription('If you have an issue with another player, please submit a Guideline Violation ticket on our forums:\n> https://svrp.net/index.php?tickets/categories/guideline-violation.6/create \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'restart':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Automatic Server Restart times')
				.setDescription('The automatic server restarts in your timezone are:\n\n> • <t:3133674000:t> (5:00 AM EST)\n> • <t:3133717200:t> (5:00 PM EST)\n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'rules':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('SVRP Server Rules')
				.setDescription('The rules for the server can be found here:\n> https://svrp.net/index.php?threads/rules-server-guidelines.3779/ \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'staff':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('SVRP Staff applications')
				.setDescription('If you would like to help out in our community, you can apply for staff here:\n> https://svrp.net/index.php?form/staff-application.13/select \n\nIf you need further assistance, you can ask for help in the <#697795907927932988> channel.')
				.setTimestamp();
			break;
		case 'streamer':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Live on SVRP role')
				.setDescription('If you want to be featured in the side panel of our Discord server when streaming SVRP, follow the steps below:\n\n> 1) You must have "!SVRP" in your title.\n> 2) You must be have "Grand Theft Auto V" set as your game.\n> 3) You must have Twitch linked to your Discord profile.\n\n__Note__: This will only work for Twitch currently.\n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		case 'suggest':
			embedMsg = new Discord.MessageEmbed()
				.setColor('#a41b24')
				.setTitle('Server Suggestions')
				.setDescription('Have something you\'d love to see on the server? Suggest it on our forum page!\n> https://svrp.net/index.php?forums/subversionrp-suggestions.94/ \n\nIf you need further assistance, you can ask for help in the <#697795876734763068> channel.')
				.setTimestamp();
			break;
		default:
		}
		return embedMsg;
	}
	catch(err) {
		console.error(err);
		console.log('There was an error - contact CHCMATT for help!');
	}
};