let fromvalueEl = document.getElementById("fromvalue");
let toValueEl = document.getElementById("toValue");
let countEl = document.getElementById("count");



function startButton() {
    let from = fromvalueEl.value;
    let to = toValueEl.value;

    if (from === "") {
        alert("Enter from val")
        return;
    } else if (to === "") {
        alert("Enter to val")
        return;
    }

    from = parseInt(from)
    to = parseInt(to)

    let clearId = setInterval(function () {

        if (from < to) {
            from = from + 1;
            countEl.textContent = from
        } else {
            clearInterval(clearId);
        }
    }, 1000)

}