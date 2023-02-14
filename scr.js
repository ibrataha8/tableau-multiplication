table = document.querySelector("#tab");
btn = document.querySelector('#btn');
valeur = document.querySelector('#valeur')
derk = document.querySelector('#darkmo')
hadaf = document.querySelector('.hadaf')

darkmo.addEventListener("click", () => {
    hadaf.classList.toggle("dark");
    if (hadaf.classList.contains("dark")) {
        darkmo.textContent = "🌚";
        darkmo.style.background = "black"
    } else {
        darkmo.textContent = "🌞";
        darkmo.style.background = "white"
    }
});


btn.addEventListener("click", () => {
    if (isNaN(Number(valeur.value))) {
        alert('Not a Number');
        return
    }
    let nbre = valeur.value;
    for (let i = 1; i < 10; i++) {
        const element = nbre * i;
        let template = "<tr>" +
            "<td>" + nbre +" x "+i+ "</td>" +
            "<td>" + element + "</td>" +
            "</tr>"
        table.innerHTML += template;
}

});