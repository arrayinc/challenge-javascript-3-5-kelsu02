// *** YOUR ANSWER BELOW ***
function drawBox(width, height) {
    let corner = "+";
    for (let i = 1; i <= height; i++) {
        let horizon = "";
        let vertical = "|";
        if (i === 1 || i === height) {
            for (let j = 2; j < width; j++) {
                horizon += "-";
            } 
            console.log(corner + horizon + corner);
        } else {
            for (let j = 2; j < width; j++) {
                horizon += " ";
            } 
            console.log(vertical + horizon + vertical);
        }
    }
}

drawBox(52,6);