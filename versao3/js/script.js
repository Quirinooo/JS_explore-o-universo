//selecionar todos os cards
let cards = document.querySelectorAll(".card-destino")

//Percorrer todos os cards selecionados e para cada um (sparadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function (card) {

    let botaoCuriosidade = card.querySelector('.botao-curiosidade')
    let botaoFavorito = card.querySelector('.botao-favorito')
    let curiosidade = card.querySelector('.curiosidade')

    botaoCuriosidade.addEventListener("click", function () {

        if (curiosidade.hidden) {
            curiosidade.hidden = false
            botaoCuriosidade.setAttribute("aria-expanded", "true")
            botaoCuriosidade.textContent = "Ocultar curiosidade"
        }

        else {
            curiosidade.hidden = true
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent = "Ver curiosidades"
        }

    }) //Fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function () {

        //Aplicar/Remover a classe "favoritando"
        //Classe foi aplicada? true
        //Classe foi removida? false

        let favoritado = card.classList.toggle("favoritado")

        //Atualizar o estado (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)

        if (favoritado) {
            botaoFavorito.textContent = "★ Favoritado"
        }

        else { botaoFavorito.textContent = "☆ Favorito" }

    });

}); // fechamento do forEach

// V2: progamação para o recurso de filtragem de destinos

//Procurar e selecinar os botões de filtro 

const botoesFiltro = document.querySelectorAll("[data-filtro]");

//Percorrer/acessar cada botão  desntro no botoesFiltros

//Descobrir/guardae qual fitro foi escolhido

botoesFiltro.forEach(function (botaoFiltro) {

    botaoFiltro.addEventListener("click", function () {

        const filtro = botaoFiltro.dataset.filtro
        //Percorrando cada card...
        cards.forEach(function (card) {
            //...guradando e categoria de cada um
            const categoria = card.dataset.categoria

            //Mostrar  todos os cards OU apenas os cards da categoria

            if (filtro === "todos" || categoria === filtro) {
                //Então mostramos o card
                card.hidden = false

            }

            else {
                //Senão, escondemos o card
                card.hidden = true
            }

        }) // Fechamento do ForEach dos cards

        botoesFiltro.forEach(function (botaoFiltro) {

            //Verificamos se o botão atual que foi clicado é o mesmo do filtro

            if (botaoFiltro.dataset.filtro === filtro) {

                //se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo")

                //E mudamos o estado para pressionado/ativado (true)
                botaoFiltro.setAttribute("aria-pressed", "true")
            }


            else {
                //Senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo")

                //E mudamos o estado para não pressionado/desativado (false)
                botaoFiltro.setAttribute("aria-pressed", "false")
            }

        })

    })// Fechamento do event lisntener


}); // Fechamento ForEach 

//Versão 3: Scritp para o menu responsivo
//Selecionar os elementos que serão manipulados

//Botão Menu
const botaoMenu = document.querySelector(".botao-menu")

//Navegação principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal")

//Detectando o acionamento do botão
botaoMenu.addEventListener("click", function () {

    //Ao clicar no botaoMenu, o JS deve  aplicar ou remover a classe "menu-aberto"
    //Classe aplicada? true
    //Classe removida? flase
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto")

    //Atualizar o estado do botão usando aria-exepanded
    botaoMenu.setAttribute("aria-expanded", menuAberto)

    //Exercicios

    // Atualizar o texto do botão (☰ ✖)

    botaoMenu.setAttribute("aria-pressed", menuAberto);

    if (menuAberto) {
        botaoMenu.textContent = "✖ Fechar";}

    else {botaoMenu.textContent = "☰ Menu";}


})