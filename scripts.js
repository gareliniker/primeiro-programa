

let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")




async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high



    let inputvaloremReais = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("input-moedas")
    let textoreal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valoremdolares = inputvaloremReais / dolar
        inputmoedas.innerHTML = valoremdolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }

    if (select.value === "€ Euro") {

        let valoremeuros = inputvaloremReais / euro
        inputmoedas.innerHTML = valoremeuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }


    textoreal.innerHTML = inputvaloremReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
// essa funcao e responsavel por troca a bandeira e o nome das moedas
function trocademoedas() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textomoedas.innerHTML = "Dólar Americano"
        bandeiramoedas.src = "img/eua pequena.png"

    }
    
    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "img/euro.png"

    }
    convertermoedas()
}



botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoedas)



