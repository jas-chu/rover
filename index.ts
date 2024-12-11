const example = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

export function rover(input: string): string {
    let lines: string[] = input.split("\n");

    if (lines.length < 3){
        return "ERROR";
    }

    let x,y: string = '0';
    let size: string = lines[0];
    [x,y] = size.split(" ");
    console.log(lines);

    let index: number = 1;
    let response: string = "";
    while (index < lines.length - 1){
        let location: string = lines[index];
        let instructions: string = lines[index + 1];
        console.log(`location ${location}`);
        console.log(`instructions ${instructions}`);
        response += move(location, instructions, x, y);
        response += '\n';
        index += 2;
    }

    return response;
}

export function move(location: string, instructions: string, x: string, y: string): string {   
    let index: number = 0;
    let currentLocation: string = location;
    while (index < instructions.length) {
        let instruction: string = instructions[index];
        if (instruction == "L") currentLocation = onLeft(currentLocation)?.join(' ');
        if (instruction == "R") currentLocation = onRight(currentLocation)?.join(' ');
        if (instruction == "M") currentLocation = onMove(currentLocation)?.join(' ');
        console.log("currentLocation:" + currentLocation);
        index += 1;
    }
    return currentLocation;
}

export function onLeft(location: string): string[] {
    let [x0,y0,coordenate]: string[] = location.split(" ");
    if (coordenate == 'N') return [x0, y0, "W"];
    if (coordenate == 'W') return [x0, y0, "S"];
    if (coordenate == 'S') return [x0, y0, "E"];
    if (coordenate == 'E') return [x0, y0, "N"];
    console.log("ERROR ON LEFT" + coordenate);
}

export function onRight(location: string): string[] {
    let [x0,y0,coordenate]: string[] = location.split(" ");
    if (coordenate == 'N') return [x0, y0, "E"];
    if (coordenate == 'E') return [x0, y0, "S"];
    if (coordenate == 'S') return [x0, y0, "W"];
    if (coordenate == 'W') return [x0, y0, "N"];
    console.log("ERROR ON RIGHT" + coordenate);
}

export function onMove(location: string): string[] {
    let [x0,y0,coordenate]: string[] = location.split(" ");
    let x0number = parseInt(x0);
    let y0number = parseInt(y0);
    if (coordenate == 'N') return [x0, (y0number + 1).toString(), "N"];
    if (coordenate == 'E') return [(x0number + 1).toString(), y0, "E"];
    if (coordenate == 'S') return [x0, (y0number - 1).toString(), "S"];
    if (coordenate == 'W') return [(x0number - 1).toString(), y0, "W"];
    console.log("ERROR ON MOVE" + coordenate);
}

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