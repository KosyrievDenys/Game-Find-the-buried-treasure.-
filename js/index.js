function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

let width = 500;
let height = 500;
let clicks = 0;
let maxClicks = 20;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

function getDistanceHint(distance) {
    if (distance < 10) return 'Boiling hot!';
    if (distance < 20) return 'Really hot';
    if (distance < 40) return 'Hot';
    if (distance < 80) return 'Warm';
    if (distance < 160) return 'Cold';
    if (distance < 320) return 'Really cold';
    else return 'Freezing';
};

$('#map').click(function (event) {
    clicks++;
    maxClicks--;
    if (clicks === 20) {
        clicks = 0;
        maxClicks = 20;
        $('#distance').text(' ');
        return alert('GAME OVER');
    }

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('#distance').text(`${distanceHint}   ${maxClicks}`);

    if (distance < 8) {
        alert(`Found the treasure in ${clicks} clicks!`);
    }
});