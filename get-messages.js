var Discord = require('discord.js')
var config = require('./config.json')

var client = new Discord.Client()

client
	.login(config.token)
	.then(() => {
		var messages = client.channels
			.get(config.channelId)
			.fetchMessages({
				limit: 100,
			}).then(function (messagesObj) {

				var messages = messagesObj.array()
				console.log('first message')
				console.log(messages[0])
				console.log('all teh messages')
				console.log(messages)
				process.exit(0)
			})

	})
	.catch(e=>{throw e})


function getMember(member) {
	return {
		id: member.id,
		name: member.user.username
	}
}
