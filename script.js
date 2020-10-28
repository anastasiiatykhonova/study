function exampleArray() {
    let phrases = [
        "Звучить непогано!",
        "Ти втомився, не йди!",
        "Може прогуляєшь?",
        "Сиди дома. Досить шастать!",
        "Ти не кіт, ти лонгет"
    ];
    alert(phrases[Math.floor(Math.random() * 5)]);
};


function cycleDemonstration() {
    let count = +document.getElementById('id1').value;
    for (let i = 1; i <= count; i++) {
        console.log("Це демонстрація циклу №" + i);
    }
}

let car = {
    color: 'White',
    maxSpeed: 220,
    audio: {
        brand: 'Sony',
        type: 'mp4',
        size: 'micro'
    }
}

console.log(car.audio.brand);

let car2 = {
    manufacturer: 'Nissan',
    model: 'Juke',
    color: 'White'
}
for (let propName in car2) {
    console.log(propName + '='+ car2[propName]);
}
