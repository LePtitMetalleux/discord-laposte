const { NodeLaPoste } = require('node-laposte')
const Nodelaposte = new NodeLaPoste()
const { EventEmitter } = require('events')
const Suivi = require('./Suivi')

class LaPoste extends EventEmitter {
  constructor (client) {
    if (!client) throw new SyntaxError('Invalid Discord client')
    super()
    /**
     * Discord.js client instance
     * @type {Discord.Client}
     */
    this.client = client
  }

  async search (message, id, lang) {
    try {
      if (!id) throw new Error('Aucun numéro de suivi fourni.')
      if (!lang) lang = 'fr_FR'

      const infos = await Nodelaposte.nodeSearch(id, lang)
      if (infos.returnCode !== 200) message.channel.send(infos.returnMessage)
      const suivi = new Suivi(infos)
      this.emit('suivi', message, suivi)
    } catch (error) {
      throw new Error(error)
    }
  }
}
module.exports = LaPoste
