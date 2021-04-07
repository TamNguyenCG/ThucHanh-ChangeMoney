function covertMoney() {
    let money = document.getElementById('ip').value;
    let to = document.getElementById('to').value;
    let from = document.getElementById('from').value;
    Result = money * to / from;
    document.getElementById('Result').innerHTML=('Result: ' +Result)
}
