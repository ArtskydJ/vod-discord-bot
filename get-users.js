var Discord = require('discord.js')
var config = require('./config.json')

var client = new Discord.Client()

client
	.login(config.token)
	.then(() => {
		var members = client.channels
			.get(config.channelId)
			.members
			.map(getMember)
		console.log(members)
		process.exit(0)
	})


function getMember(member) {
	return {
		id: member.id,
		name: member.user.username
	}
}
