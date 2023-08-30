const Chandrayaan3LunarCraft = require('./index');

describe('Chandrayaan3LunarCraft', () => {

    test('Chandrayaan3 move 1 step forward', () => {
        const c = new Chandrayaan3LunarCraft({ x: 0, y: 0, z: 0 }, 'N');
        c.moveForward();
        expect(c.getPosition()).toEqual('Position : [ 0, 1, 0 ] Direction : N');
    })

    test('Chandrayaan3 move 1 step backward', () => {
        const c = new Chandrayaan3LunarCraft({ x: 0, y: 0, z: 0 }, 'N');
        c.moveBackward();
        expect(c.getPosition()).toEqual('Position : [ 0, -1, 0 ] Direction : N');
    })

    test('Chandrayaan3 turn to Left direction', () => {
        const c = new Chandrayaan3LunarCraft({ x: 0, y: 0, z: 0 }, 'N');
        c.turnLeft();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : W');
    })

    test('Chandrayaan3 turn to Right direction', () => {
        const c = new Chandrayaan3LunarCraft({ x: 0, y: 0, z: 0 }, 'N');
        c.turnRight();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : E');
    })


    test('Chandrayaan3 turn to Upward direction', () => {
        const c = new Chandrayaan3LunarCraft({ x: 0, y: 0, z: 0 }, 'N');
        c.turnUp();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : Up');
    })


    test('Chandrayaan3 turn to Downward direction', () => {
        const c = new Chandrayaan3LunarCraft({ x: 0, y: 0, z: 0 }, 'N');
        c.turnDown();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : Down');
    })

})