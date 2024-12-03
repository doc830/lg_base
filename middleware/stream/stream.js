class Stream  {
    constructor() {
        this._players = []
        this._nav_data = {}
        this._visibility_data = {
            type: "visibility",
            status: false}
    }
    setNavData (data) {
        if (data !== this._nav_data) {
            this._nav_data = data
            this.notifyPlayers(data)
        }
    }
    setVisibilityData (data) {
        if (data !== this._visibility_data) {
            this._visibility_data = data
            this.notifyPlayers(data)
        }
    }
    notifyPlayers(data) {
        for (const player of this._players) {
            player.updateData(data)
        }
    }
    addPlayer(player) {
        this._players.push(player)
        player.updateData(this._visibility_data)
    }
    removePlayer(player) {
        const i = this._players.indexOf(player)
        if (i !==-1) {
            this._players.splice(i,1)
        }

    }
}
const stream = new Stream()
module.exports = stream