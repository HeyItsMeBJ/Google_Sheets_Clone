
for (let alpha = 1; alpha <= 100; alpha++) {
    var rowBar = document.querySelector('#rowBar');
    var temp = document.createElement('div');
    temp.classList.add('rowBarCells');
    temp.setAttribute('id', `${alpha}`);
    temp.innerHTML = alpha;
    rowBar.appendChild(temp);

}

for (let alpha = 'A'; alpha <= 'Z'; alpha = String.fromCharCode(alpha.charCodeAt(0) + 1)) {
    var columnBar = document.querySelector('#columnBar');
    var temp = document.createElement('div');
    temp.classList.add('columnBarCells');
    temp.setAttribute('id', `${alpha}`);
    temp.innerHTML = alpha;
    columnBar.appendChild(temp);

}
for (let n = 1; n <= 100; n++) {
    var columnBar = document.querySelector('#columnBar');
    var rowBar = document.querySelector('#rowBar');
    var sheetBox = document.querySelector('#sheetBox')
    var temprow = document.createElement('div');
    temprow.classList.add('rowNo');
    temprow.setAttribute('id', `${n}`);
    for (let alpha = 'A'; alpha <= 'Z'; alpha = String.fromCharCode(alpha.charCodeAt(0) + 1)) {
        var temp = document.createElement('div');
        temp.classList.add('sheetCells');
        temp.setAttribute('id', `${alpha}${n}`);
        temp.setAttribute('contenteditable', 'false');
        // temp.innerHTML = alpha + n;
        temprow.appendChild(temp);
    }
    sheetBox.appendChild(temprow);
}
const sheetCell = document.querySelectorAll('.sheetCells');
sheetCell.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.setAttribute('contenteditable', 'true');
    })
})
sheetCell.forEach(item => {
    item.addEventListener('mouseout', event => {
        item.setAttribute('contenteditable', 'false');
    })
})

