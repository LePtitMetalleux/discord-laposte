class Suivi {
  constructor (data) {
    this.id = data.shipment.idShip

    this.holder = data.shipment.holder

    this.type = data.shipment.product

    this.status = data.shipment.isFinal

    this.entryDate = data.shipment.entryDate

    this.url = data.shipment.url

    this.timeline = data.shipment.timeline

    this.events = data.shipment.event

    this.deliveryChoice = data.shipment.contextData.deliveryChoice

    this.origin = data.shipment.contextData.originCountry

    this.arrival = data.shipment.contextData.arrivalCountry

    this.logo = '../logo_laposte.png'
  }
}

module.exports = Suivi
