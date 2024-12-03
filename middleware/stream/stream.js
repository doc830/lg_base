class Stream  {
    constructor() {
        this._players = []
        this._data = {}
    }
    setData (data) {
        if (data !== this._data) {
            this._data = data
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
        player.updateData({"stream": "started"})
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