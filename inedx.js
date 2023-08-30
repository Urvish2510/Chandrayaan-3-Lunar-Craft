class Chandrayaan3LunarCraft {

    constructor({ x, y, z }, direction) {
        this.coordinates = {
            x: x,
            y: y,
            z: z
        };
        this.direction = direction;
        this.prevDirection = null;

    }
}

module.exports = Chandrayaan3LunarCraft;