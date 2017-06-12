class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name
    this.phasers = (typeof phasers !== 'undefined') ? phasers : 5
    this.shields = (typeof shields !== 'undefined') ? shields : 4
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    this.crew = function () {
      if (typeof crew !== 'undefined' && crew.length !== 0) {
        this.crew = crew
        this.docked = false
        crew.forEach((person) => {
          person.currentShip = this
        })
      } else {
        this.crew = []
        this.docked = true
      }
    }
    this.crew()
  }
}
