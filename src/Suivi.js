class Suivi {
  constructor (data) {
    const holders = {
      1: 'Courrier national',
      2: 'Courrier international',
      3: 'Chronopost',
      4: 'Colissimo'
    }

    this.id = data.shipment.idShip

    this.holder = holders[data.shipment.holder]

    this.type = data.shipment.product

    this.status = data.shipment.isFinal

    this.entryDate = data.shipment.entryDate

    this.url = data.shipment.url

    this.timeline = data.shipment.timeline

    this.events = data.shipment.event

    this.deliveryChoice = data.shipment.contextData.deliveryChoice

    this.origin = data.shipment.contextData.originCountry

    this.arrival = data.shipment.contextData.arrivalCountry

    this.logo = 'https://www.laposte.fr/_ui/mobile/img/logo.png'
  }
}

module.exports = Suivi
