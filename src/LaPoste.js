const fetch = require('node-fetch')
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
    if (!id) throw new Error('Aucun numéro de suivi fourni.')
    if (!lang) lang = 'fr_FR'

    const infos = await fetch(`https://api.laposte.fr/suivi/v2/idships/${id}?lang=${lang}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Okapi-Key': '/hTIFryaAJAwGCand0OXW2E9mzvyNxLArspQMJ9UUmN0tH+y1EimpTN5zmpuGbf/'
      }
    })
      .then(res => res.json())
    if (infos.returnCode !== 200) throw new Error(infos.returnMessage)
    const suivi = new Suivi(infos)
    this.emit('suivi', message, suivi)
  }
}
module.exports = LaPoste
