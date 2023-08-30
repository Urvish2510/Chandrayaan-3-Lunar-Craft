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

    turnLeft() {
        if (this.direction === 'N') {
            this.direction = 'W';
            this.prevDirection = 'N';
        } else if (this.direction === 'S') {
            this.direction = 'E';
            this.prevDirection = 'S';
        } else if (this.direction === 'E') {
            this.direction = 'N';
            this.prevDirection = 'E';
        } else if (this.direction === 'W') {
            this.direction = 'S';
            this.prevDirection = 'W';
        } else if (this.direction === 'Up') {
            if (this.prevDirection === "N") {
                this.direction = 'W';
                this.prevDirection = 'Up';
            } else if (this.prevDirection === "S") {
                this.direction = 'E';
                this.prevDirection = 'Up';
            } else if (this.prevDirection === "E") {
                this.direction = 'N';
                this.prevDirection = 'Up';
            } else if (this.prevDirection === "W") {
                this.direction = 'S';
                this.prevDirection = 'Up';
            }
        } else if (this.direction === 'Down') {
            if (this.prevDirection === "N") {
                this.direction = 'W';
                this.prevDirection = 'Down';
            } else if (this.prevDirection === "S") {
                this.direction = 'E';
                this.prevDirection = 'Down';
            } else if (this.prevDirection === "E") {
                this.direction = 'N';
                this.prevDirection = 'Down';
            } else if (this.prevDirection === "W") {
                this.direction = 'S';
                this.prevDirection = 'Down';
            }
        }
    }

    turnRight() {
        if (this.direction === 'N') {
            this.direction = 'E';
            this.prevDirection = 'N';
        } else if (this.direction === 'S') {
            this.direction = 'W';
            this.prevDirection = 'S';
        } else if (this.direction === 'E') {
            this.direction = 'S';
            this.prevDirection = 'E';
        } else if (this.direction === 'W') {
            this.direction = 'N';
            this.prevDirection = 'W';
        } else if (this.direction === 'Up') {
            if (this.prevDirection === 'N') {
                this.direction = 'E';
                this.prevDirection = 'Up';
            } else if (this.prevDirection === 'S') {
                this.direction = 'W';
                this.prevDirection = 'Up';
            } else if (this.prevDirection === 'E') {
                this.direction = 'S';
                this.prevDirection = 'Up';
            } else if (this.prevDirection === 'W') {
                this.direction = 'N';
                this.prevDirection = 'Up';
            }
        } else if (this.direction === 'Down') {
            if (this.prevDirection === 'N') {
                this.direction = 'E';
                this.prevDirection = 'Down';
            } else if (this.prevDirection === 'S') {
                this.direction = 'W';
                this.prevDirection = 'Down';
            } else if (this.prevDirection === 'E') {
                this.direction = 'S';
                this.prevDirection = 'Down';
            } else if (this.prevDirection === 'W') {
                this.direction = 'N';
                this.prevDirection = 'Down';
            }
        }
    }

    turnUp() {
        this.prevDirection = this.direction;
        this.direction = 'Up';
    }

    turnDown() {
        this.prevDirection = this.direction;
        this.direction = 'Down';
    }

    getCoordinates(commands) {
        for (const command of commands) {
            if (command === 'f') {
                this.moveForward();
            } else if (command === 'b') {
                this.moveBackward();
            } else if (command === 'l') {
                this.turnLeft();
            } else if (command === 'r') {
                this.turnRight();
            } else if (command === 'u') {
                this.turnUp();
            } else if (command === 'd') {
                this.turnDown();
            }
        }

        var result = `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.direction}`;
        return result;
    }

    getPosition() {
        return `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.direction}`;
    }
}



module.exports = Chandrayaan3LunarCraft;