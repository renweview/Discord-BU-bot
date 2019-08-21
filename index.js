// Import Discord API
const Discord = require('discord.js');
const client = new Discord.Client();

// Import Settings file
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;

/*** START VARIBLES ***/

/*** END VARIBLES ***/

// When bot is ready
client.on('ready', () => {
	const guild = client.guilds.get('588649839663906823'); // Test server ID currently
	console.log(`${client.user.tag} is ready!`);
});

// On message sent
client.on('message', message => {
	// If message doesn't start with prefix (/role) or when the bot responds. Ignore and return
	// if (!message.content.startsWith(prefix) || message.author.bot) return;

	const helpEmbed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('Breakup Bot User Guide')
		.setDescription('This is the guide to all the commands for the Breakup Bot')
		.addField(
			'/role [moved on | healing | grieving | just broke up | its complicated]',
			'Allows you to set up your role. You can access the channel with an assigned role'
		)
		.addField('/role clear', 'Remove any role assigned to you.')
		.addField(
			'/nc [start | restart | progress | stop]',
			'Allows you to set up a timer for your no contact, restart it, check how long has been going on or stop it'
		)
		.addField('/role clear', 'Allows you to set a date for your no contact if you did set it up when you began it')
		.addField('/encourage', 'A word of encouragement from the most supportive bot the world has ever seen');

	if (message.content == '/help') {
		message.channel.send(helpEmbed);
	}

	if (message.content.startsWith(prefix)) {
		if (message.channel.name != 'progress-bot') {
			return message.reply(
				"You can't access the bot functions in this channel. Please use the <#596402746866008114> Channel."
			);
		}
	}

	// Gather Arguments and split them
	const args = message.content.slice(prefix.length).split(/ +/g);
	const command = args.shift().toLowerCase();

	// When user is grieving
	if (message.content.startsWith(prefix)) {
		let role = args
			.toString()
			.replace(/,/g, ' ')
			.toLowerCase();
		switch (role) {
			case 'grieving':
				if (message.member.roles.find(r => r.name === 'Grieving')) {
					message.reply('You are already apart of this role.');
				} else if (message.member.roles.find(r => r.name === 'Moved On')) {
					message.member.removeRole('594586450704597044');
					message.member.addRole('594586519331667988');
					message.reply('changed to **GRIEVING**');
				} else if (message.member.roles.find(r => r.name === 'Healing')) {
					message.member.removeRole('594586333419405322');
					message.member.addRole('594586519331667988');
					message.reply('changed to **GRIEVING**');
				} else if (message.member.roles.find(r => r.name === 'Just Broke Up')) {
					message.member.removeRole('594586375458914324');
					message.member.addRole('594586519331667988');
					message.reply('changed to **GRIEVING**');
				} else if (message.member.roles.find(r => r.name === "It's Complicated")) {
					message.member.removeRole('607494022101205023');
					message.member.addRole('594586519331667988');
					message.reply('changed to **GRIEVING**');
				} else {
					message.member.addRole('594586519331667988');
					message.reply('changed to **GRIEVING**');
				}
				break;

			case 'moved on':
				if (message.member.roles.find(r => r.name === 'Moved On')) {
					message.reply('You are already apart of this role.');
				} else if (message.member.roles.find(r => r.name === 'Grieving')) {
					message.member.removeRole('594586519331667988');
					message.member.addRole('594586450704597044');
					message.reply('changed to **MOVED ON**');
				} else if (message.member.roles.find(r => r.name === 'Healing')) {
					message.member.removeRole('594586333419405322');
					message.member.addRole('594586450704597044');
					message.reply('changed to **MOVED ON**');
				} else if (message.member.roles.find(r => r.name === 'Just Broke Up')) {
					message.member.removeRole('594586375458914324');
					message.member.addRole('594586450704597044');
					message.reply('changed to **MOVED ON**');
				} else if (message.member.roles.find(r => r.name === "It's Complicated")) {
					message.member.removeRole('607494022101205023');
					message.member.addRole('594586450704597044');
					message.reply('changed to **MOVED ON**');
				} else {
					message.member.addRole('594586450704597044');
					message.reply('changed to **MOVED ON**');
				}
				break;

			case 'healing':
				if (message.member.roles.find(r => r.name === 'Healing')) {
					message.reply('You are already apart of this role.');
				} else if (message.member.roles.find(r => r.name === 'Grieving')) {
					message.member.removeRole('594586519331667988');
					message.member.addRole('594586333419405322');
					message.reply('changed to **HEALING**');
				} else if (message.member.roles.find(r => r.name === 'Moved On')) {
					message.member.removeRole('594586450704597044');
					message.member.addRole('594586333419405322');
					message.reply('changed to **HEALING**');
				} else if (message.member.roles.find(r => r.name === 'Just Broke Up')) {
					message.member.removeRole('594586375458914324');
					message.member.addRole('594586333419405322');
					message.reply('changed to **HEALING**');
				} else if (message.member.roles.find(r => r.name === "It's Complicated")) {
					message.member.removeRole('607494022101205023');
					message.member.addRole('594586333419405322');
					message.reply('changed to **HEALING**');
				} else {
					message.member.addRole('594586333419405322');
					message.reply('changed to **HEALING**');
				}
				break;

			case 'just broke up':
				if (message.member.roles.find(r => r.name === 'Just Broke Up')) {
					message.reply('You are already apart of this role.');
				} else if (message.member.roles.find(r => r.name === 'Grieving')) {
					message.member.removeRole('594586519331667988');
					message.member.addRole('594586375458914324');
					message.reply('changed to **JUST BROKE UP**');
				} else if (message.member.roles.find(r => r.name === 'Moved On')) {
					message.member.removeRole('594586450704597044');
					message.member.addRole('594586375458914324');
					message.reply('changed to **JUST BROKE UP**');
				} else if (message.member.roles.find(r => r.name === 'Healing')) {
					message.member.removeRole('594586333419405322');
					message.member.addRole('594586375458914324');
					message.reply('changed to **JUST BROKE UP**');
				} else if (message.member.roles.find(r => r.name === "It's Complicated")) {
					message.member.removeRole('607494022101205023');
					message.member.addRole('594586375458914324');
					message.reply('changed to **JUST BROKE UP**');
				} else {
					message.member.addRole('594586375458914324');
					message.reply('changed to **JUST BROKE UP**');
				}
				break;

			case "it's complicated":
				if (message.member.roles.find(r => r.name === "It's Complicated")) {
					message.reply('You are already apart of this role.');
				} else if (message.member.roles.find(r => r.name === 'Grieving')) {
					message.member.removeRole('594586519331667988');
					message.member.addRole('607494022101205023');
					message.reply("changed to **It's Complicated**");
				} else if (message.member.roles.find(r => r.name === 'Moved On')) {
					message.member.removeRole('594586450704597044');
					message.member.addRole('607494022101205023');
					message.reply("changed to **It's Complicated**");
				} else if (message.member.roles.find(r => r.name === 'Healing')) {
					message.member.removeRole('594586333419405322');
					message.member.addRole('607494022101205023');
					message.reply("changed to **It's Complicated**");
				} else if (message.member.roles.find(r => r.name === 'Just Broke Up')) {
					message.member.removeRole('594586375458914324');
					message.member.addRole('607494022101205023');
					message.reply("changed to **It's Complicated**");
				} else {
					message.member.addRole('607494022101205023');
					message.reply("changed to **It's Complicated**");
				}
				break;

			default:
				message.reply(
					"That isn't a role. Please try one of these: Grieving, Moved On, Healing, Just Broke Up, or It's Complicated"
				);
		}
	}
});

// Bot login
client.login(token);
