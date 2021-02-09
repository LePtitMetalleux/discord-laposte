
# discord-laposte

Permet de suivre en temps réel vos envois par La Poste sur Discord

## Installation

```
npm install --save discord-laposte
```

## Usage

Voici un exemple de bot pour utiliser discord-laposte
```js
const Discord = require("discord.js"),
client = new Discord.Client(),
settings = {
    prefix: "$",
    token: "Votre Token"
};

const { LaPoste } = require('discord-laposte')

const laposte = new LaPoste(client)

client.laposte = laposte

client.laposte.on('suivi', (message, suivi) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Suivi | ${suivi.id}`)
    .setDescription(suivi.timeline.map((t) => `\`\`\`${t.date} : ${t.shortLabel}\`\`\``))
    .setColor('ffec00')
    .setThumbnail(suivi.logo)
    .setTimestamp()
    .setURL(suivi.url)
    .setFooter('discord-laposte by LePtitMetalleux | Lycos Novation')
  message.channel.send(embed)
})

client.on('ready', () => {
  console.log(`${Date} ${client.user.username} est prêt !`)
})

client.on('message', async (message) => {
  try {
    if (!message.guild) return
    if (message.author.bot || !message.content.startsWith(prefix)) return
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    //  $test 6A20290689303
    //  Va indiquer les informations sur le numéro de suivi 6A20290689303 en français
    if (command === 'test') {
      client.laposte.search(message, '6A20290689303')
    }
  } catch (error) {
    console.log(error)
  }
})

client.login(settings.token);
```

## Documentation
Coming soon