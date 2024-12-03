class Player {
    constructor(res) {
        this.res = res
    }
    updateData (data) {
        this.res.write(JSON.stringify(data))
    }
}
module.exports = Player