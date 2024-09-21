const cells = document.querySelectorAll('.cell__item')
const info = document.querySelector('.winn_info');
const reset = document.querySelector('.reset');

let symbolX = "X";
let symbolO = "O";
let flag = true;

let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        e.target.textContent = flag ? symbolX : symbolO;
        e.target.style.pointerEvents = "none";
        flag = !flag;
        winner()
    })
})

reset.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = "auto";
        info.textContent = "";
        if (cell.classList.contains("animation")) {
            cell.classList.remove("animation")
        }
    })
})

function winner() {
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ''
        ) {
            info.textContent =  `Winner ${cells[comb[0]].textContent}`
            cells[comb[0]].classList.add('animation')
            cells[comb[1]].classList.add('animation')
            cells[comb[2]].classList.add('animation')
            return true;
        }
    }

    return false;
}