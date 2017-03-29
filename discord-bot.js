var now = new Date()
var dayOfWeek = now.getDay()
if (dayOfWeek === 0) { // Sunday
	process.exit()
}
// setting the time to 0:00:00.000 makes the userIndex more consistent, I think
now.setUTCHours(0, 0, 0, 0)
// * 6 / 7 makes it so no one gets skipped on sundays.
// - 1 so it lines up with the current rotation
var userIndex = Math.round(now.valueOf() / (1000 * 60 * 60 * 24) * 6 / 7) - 1

var Discord = require('discord.js')
var config = require('./config.json')

var client = new Discord.Client()

client
	.login(config.token)
	.then(() => {
		var todayUser = config.users[userIndex % config.users.length]
		var message = 'It is <@' + todayUser.id + '>\'s turn to post a verse today!'

		client.channels
			.get(config.channelId)
			.sendMessage(message)
			.then(() => process.exit(0))
			.catch(e => { throw e })
	})
