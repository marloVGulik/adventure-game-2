function mapGrid() {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 4;
    context.strokeRect(0, 0, 300, 150);
    context.strokeRect(75, 0, 75, 150);
    context.strokeRect(75, 0, 150, 150);
    context.lineWidth = 2;
    context.strokeRect(0, 37.5, 300, 37.5);
    context.strokeRect(0, 37.5, 300, 75);
}
function fillSquare(pos) {
    context.clearRect(0, 0, map.width, map.height);
    context.fillStyle = "#FFFFFF";
    context.fillRect(pos.x * 75, (3 - pos.y) * 37.5, 75, 37.5);
    mapGrid();
}