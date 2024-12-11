"use strict";
exports.__esModule = true;
exports.onMove = exports.onRight = exports.onLeft = exports.move = exports.rover = void 0;
var example = "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM";
function rover(input) {
    var _a;
    var lines = input.split("\n");
    if (lines.length < 3) {
        return "ERROR";
    }
    var x, y = '0';
    var size = lines[0];
    _a = size.split(" "), x = _a[0], y = _a[1];
    console.log(lines);
    var index = 1;
    var response = "";
    while (index < lines.length - 1) {
        var location_1 = lines[index];
        var instructions = lines[index + 1];
        console.log("location ".concat(location_1));
        console.log("instructions ".concat(instructions));
        response += move(location_1, instructions, x, y);
        response += '\n';
        index += 2;
    }
    return response;
}
exports.rover = rover;
function move(location, instructions, x, y) {
    var _a, _b, _c;
    var index = 0;
    var currentLocation = location;
    while (index < instructions.length) {
        var instruction = instructions[index];
        if (instruction == "L")
            currentLocation = (_a = onLeft(currentLocation)) === null || _a === void 0 ? void 0 : _a.join(' ');
        if (instruction == "R")
            currentLocation = (_b = onRight(currentLocation)) === null || _b === void 0 ? void 0 : _b.join(' ');
        if (instruction == "M")
            currentLocation = (_c = onMove(currentLocation)) === null || _c === void 0 ? void 0 : _c.join(' ');
        console.log("currentLocation:" + currentLocation);
        index += 1;
    }
    return currentLocation;
}
exports.move = move;
function onLeft(location) {
    var _a = location.split(" "), x0 = _a[0], y0 = _a[1], coordenate = _a[2];
    if (coordenate == 'N')
        return [x0, y0, "W"];
    if (coordenate == 'W')
        return [x0, y0, "S"];
    if (coordenate == 'S')
        return [x0, y0, "E"];
    if (coordenate == 'E')
        return [x0, y0, "N"];
    console.log("ERROR ON LEFT" + coordenate);
}
exports.onLeft = onLeft;
function onRight(location) {
    var _a = location.split(" "), x0 = _a[0], y0 = _a[1], coordenate = _a[2];
    if (coordenate == 'N')
        return [x0, y0, "E"];
    if (coordenate == 'E')
        return [x0, y0, "S"];
    if (coordenate == 'S')
        return [x0, y0, "W"];
    if (coordenate == 'W')
        return [x0, y0, "N"];
    console.log("ERROR ON RIGHT" + coordenate);
}
exports.onRight = onRight;
function onMove(location) {
    var _a = location.split(" "), x0 = _a[0], y0 = _a[1], coordenate = _a[2];
    var x0number = parseInt(x0);
    var y0number = parseInt(y0);
    if (coordenate == 'N')
        return [x0, (y0number + 1).toString(), "N"];
    if (coordenate == 'E')
        return [(x0number + 1).toString(), y0, "E"];
    if (coordenate == 'S')
        return [x0, (y0number - 1).toString(), "S"];
    if (coordenate == 'W')
        return [(x0number - 1).toString(), y0, "W"];
    console.log("ERROR ON MOVE" + coordenate);
}
exports.onMove = onMove;
console.log(rover(example));
/*

On left:
N -> W -> S ->E -> N

On right:
N ->E->S->W->N

On move:
N-> y+ 1    (xi,yi) + (0,1)
E-> x+1     (xi,yi) + (1,0)
S-> y-1      (xi,yi) + (0,-1)
W-> x-1     (xi,yi) + (-1,0)

*/ 
