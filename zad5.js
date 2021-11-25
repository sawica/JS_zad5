// Dokument składa się z pewnej liczby elementów <p>.
//
// Tekst każdego z nich pokoloruj na losowy kolor ze zdefiniowanej uprzednio puli (np. "red", "orange", "green", "blue" itd.).
// Do każdego paragrafu dodaj atrybut title (podpowiedź pojawiająca się po najechaniu myszą) zawierający liczbę jego znaków.
//     Po kliknięciu w dowolny paragraf, jest on otaczany zieloną ramką. Paragraf tuż za nim (o ile ten nie był ostatni) otoczony zostaje ramką niebieską, a ten przed nim - pomarańczową. Jeśli kliknięty element był parzysty, zostaje wyświetlony na jasnoszarym tle, a jeśli nieparzysty - na ciemnoszarym. Po kliknięciu w jakikolwiek inny element, poprzednie wracają do stanu pierwotnego.
//     Przed każdym paragrafem dodaj nagłówek o treści "paragraf 1", "paragraf 2" itd.
//     Kliknięcie w nagłówek ukrywa treść poniższego paragrafu. Ponowne kliknięcie - odsłania ją.
//     Dodaj pole tekstowe pozwalające na dodanie kolejnego paragrafu. Zadbaj, aby wszelkie zachowania z powyższych punktów nadal działały.
// function zad5() {

    let colorList = [
        "blue",
        "green",
        "red",
        "orange",
        "cyan",
    ]
    let randomNumber
    let paragraphs = document.getElementsByTagName("p")
    const list = document.getElementById("list")
    let headers = document.getElementsByTagName("header")
    let header1
    for(let i = 0; i < paragraphs.length; i++){
        header1 = document.createElement("header")
        header1.innerText = "paragraf " + (i + 1)
        list.insertBefore(header1, paragraphs[i])
    }
    addProperties()
    function addProperties(){
        for (let i = 0; i < paragraphs.length; i++) {
            randomNumber = Math.floor(Math.random() * 5)
            paragraphs[i].style.color = colorList[randomNumber]

            paragraphs[i].title = paragraphs[i].innerText.length + " znaków"

            paragraphs[i].addEventListener('mousedown', () => {
                for (let i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.border = "none"
                    paragraphs[i].style.backgroundColor = "white"
                }
                paragraphs[i].style.border = "double green"
                paragraphs[i - 1].style.border = "double orange"
                if (i + 1 < paragraphs.length) paragraphs[i + 1].style.border = "double blue"
                if (i % 2 === 0) paragraphs[i].style.backgroundColor = "lightgrey"
                else paragraphs[i].style.backgroundColor = "darkgrey"
            })
        }

        for(let i = 0; i < headers.length; i++ ){
            headers[i].addEventListener('click', () => {
                paragraphs[i].hidden =  ! paragraphs[i].hidden
            })
        }
    }

    function createParagraf(){
        let newParagraph = document.createElement("p")
        newParagraph.innerText = document.getElementById("text1").value
        let newHeader = document.createElement("header")
        newHeader.innerText = 'paragraf ' + (paragraphs.length+1)
        list.appendChild(newHeader)
        list.appendChild(newParagraph)
        addProperties()
}