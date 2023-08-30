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

    moveForward() {
        if (this.direction === 'N') {
            this.coordinates.y += 1;
        } else if (this.direction === 'S') {
            this.coordinates.y -= 1;
        } else if (this.direction === 'E') {
            this.coordinates.x += 1;
        } else if (this.direction === 'W') {
            this.coordinates.x -= 1;
        } else if (this.direction === 'Up') {
            this.coordinates.z += 1;
        } else if (this.direction === 'Down') {
            this.coordinates.z -= 1;
        }
    }

    moveBackward() {
        if (this.direction === 'N') {
            this.coordinates.y -= 1;
        } else if (this.direction === 'S') {
            this.coordinates.y += 1;
        } else if (this.direction === 'E') {
            this.coordinates.x -= 1;
        } else if (this.direction === 'W') {
            this.coordinates.x += 1;
        } else if (this.direction === 'Up') {
            this.coordinates.z -= 1;
        } else if (this.direction === 'Down') {
            this.coordinates.z += 1;
        }
    }

    getPosition() {
        return `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.direction}`;
    }
}

module.exports = Chandrayaan3LunarCraft;