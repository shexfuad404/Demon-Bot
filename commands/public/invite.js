const Discord = require('discord.js')
module.exports = {
    name: "help",
    cooldown: 5,
    run: async (client, message, args) => {
      message.channel.send(new Discord.MessageEmbed().setColor("9e1c36").setDescription(`**For add me [Click here](link bot)\n\n For support server [Click here](link server)**`))
    }}
