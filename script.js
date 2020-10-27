function cycleDemonstration() {
    let count = +document.getElementById('id1').value;
    for (let i = 1; i <= count; i++) {
        console.log("Це демонстрація циклу №" + i);
    }
}

function workWithObject() {
    let form = {
        firstName: document.getElementById('fName').value,
        lastName: document.getElementById('lName').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    let formReady = true;
    for (let field in form) {
        if (form[field] == "") {
            alert('Поле ' + field + ' не заповнено');
            formReady = false;
        }
    }
    if (formReady) {
        alert("Форма успішно відправлена!");
    }
}

function exampleArray() {
    let phrases = [
        "Звучить непогано!",
        "Ти втомився, не йди!",
        "Може прогуляєшь?",
        "Сиди дома. Досить шастать!",
        "Ти не кіт, ти лонгет"
    ];
    alert(phrases[Math.floor(Math.random() * 5)]);
}
