const Discord = require("discord.js");

module.exports = {
 name: "gfetch",
 aliases: ["giveaway-fetch", "glist", "giveaway-list"],
 description: "Fetch server current giveaways",
 category: "Utility",
 usage: "gfetch",
 run: async (client, message, args) => {
  try {
   const giveaways = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
   let giveawaysarr = [];
   const giveaways1 = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
   const giveaways2 = giveaways1.filter((g) => !g.ended);
   const giveaways3 = giveaways2.forEach((thisGiveaway) => {
    let winners = "";
    if (thisGiveaway.winnerCount == 1) {
     winners = "winner";
    } else {
     winners = "winners";
    }
    giveawaysarr.push(`\`${thisGiveaway.messageID}\` | <#${thisGiveaway.channelID}> | **${thisGiveaway.winnerCount}** ${winners} | Prize: **${thisGiveaway.prize}** | [Giveaway Link](https://discord.com/channels/${message.guild.id}/${thisGiveaway.channelID}/${thisGiveaway.messageID})`);
   });
   const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Current Giveaways")
    .setDescription(giveawaysarr.join("\n") || "<:error:860884617770303519> No giveaways are currently running!");
   message.channel.send(embed);
  } catch (err) {
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Something went wrong... :cry:",
    },
   });
  }
 },
};
