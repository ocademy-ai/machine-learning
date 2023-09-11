function clicked() {
    let x = (click_x - canvas_width / 2) * scale;
    let y = (canvas_height / 2 - click_y) * scale;

    let element_removed = false;
    for(let point of points) {
        if(getDistance(x, y, point.x, point.y) < point_radius * scale) {
            points = removeElement(points, point);
            element_removed = true;
            updated = false;
            break;
        }
    }
    if(!element_removed) {
        points.push({
            x: x,
            y: y
        });
        updated = false;
    }
}

function moved() {

}

function released() {

}

function keyPressed(key) {

}

function keyReleased(key) {
    
}