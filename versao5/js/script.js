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
            botaoFavorito.textContent = "★ Favoritado"}

        else { botaoFavorito.textContent = "☆ Favorito"}

        //Chama a função de atualização toda vez que clicar no botãoFavorito
        atualizarContadorFavoritos()

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
        botaoMenu.textContent = "✖ Fechar";
    }

    else { botaoMenu.textContent = "☰ Menu"; }


})

//Versão 4: scritp para contagem de favoritos
// Selecionar o elemento que apresenta a quantidade de favorito

const quantidadeFavoritos = document.querySelector("#quantidade-favoritos")

//Função para atualização dos favoritos
function atualizarContadorFavoritos() {

    //Guardar em memória a contagem, começando em zero

    let quantidade = 0

    //Percorrer todos os  cards, inclusive os ocultos pelos filtros
    cards.forEach(function (card) {

        //Verificar se o card possui a classe "favoritado"
        if (card.classList.contains("favoritado")) {

            //Se possiur, incrementamos a variável quantidade
            //Incrementar significa adicionar 1
            quantidade++
        }
    }) //Fechamento do ForEach


    //Após a contagem, atualizar o número exibido no spam HTML
    quantidadeFavoritos.textContent = quantidade

} //Final função atualizarContadorFavoritos



//Versão 5: curiosidade aleatorias
const tituloCuriosidadeAleatoria = document.querySelector("#titulo-curiosidade-aleatoria")
const explicacaoCuriosidadeAleatoria = document.querySelector ("#explicacao-curiosidade-aleatoria")
const botaoCuriosidadeAleatoria = document.querySelector(".botao-curiosidade-aleatoria")

//Lista  de curiosidaes a serem usadas pela função
const curiosidadesUniverso = [
  {
    titulo: "A luz do Sol não chega instantaneamente à Terra",
    explicacao: "A luz viaja pelo espaço e leva cerca de 8 minutos para chegar até nós."
  },
  {
    titulo: "Em Vênus, um dia é mais longo que um ano",
    explicacao: "Vênus leva cerca de 243 dias terrestres para girar uma vez em torno do próprio eixo e cerca de 225 dias para completar uma órbita ao redor do Sol."
  },
  {
    titulo: "Marte tem duas luas pequenas",
    explicacao: "As luas de Marte se chamam Fobos e Deimos. Elas têm formas irregulares, diferentes da forma quase esférica da Lua da Terra."
  },
  {
    titulo: "Júpiter tem uma tempestade gigante",
    explicacao: "A Grande Mancha Vermelha é uma enorme tempestade na atmosfera de Júpiter. Ela é mais larga que a Terra e vem sendo observada há séculos."
  },
  {
    titulo: "Europa pode esconder um oceano",
    explicacao: "A lua Europa, de Júpiter, tem uma crosta de gelo. Observações indicam que pode haver um oceano de água líquida sob essa superfície."
  },
  {
    titulo: "Uma lua de Júpiter é maior que Mercúrio",
    explicacao: "Ganimedes é a maior lua do Sistema Solar. Seu diâmetro é maior que o do planeta Mercúrio."
  },
  {
    titulo: "Os anéis de Saturno são feitos de muitos fragmentos",
    explicacao: "Eles contêm bilhões de pedaços de gelo e rocha, desde grãos muito pequenos até blocos enormes."
  },
  {
    titulo: "A Lua mantém quase sempre a mesma face voltada para a Terra",
    explicacao: "A Lua leva praticamente o mesmo tempo para girar em torno de si e para dar uma volta ao redor da Terra. Por isso, vemos quase sempre o mesmo hemisfério."
  },
  {
    titulo: "Mercúrio pode ter gelo em crateras escuras",
    explicacao: "Em crateras profundas próximas aos polos, há regiões que nunca recebem luz solar direta. Essas áreas podem conservar gelo de água apesar do calor em outras partes do planeta."
  },
  {
    titulo: "O Sol também se move pela galáxia",
    explicacao: "O Sol e seu sistema planetário orbitam o centro da Via Láctea. Uma volta completa leva cerca de 230 milhões de anos terrestres."
  },
  {
    titulo: "A Via Láctea é uma galáxia espiral barrada",
    explicacao: "Ela tem uma região central alongada, em forma de barra, e braços espirais. O Sistema Solar fica numa região chamada Braço de Órion."
  },
  {
    titulo: "Há planetas que orbitam duas estrelas",
    explicacao: "Alguns exoplanetas, que são planetas fora do Sistema Solar, orbitam um par de estrelas em vez de uma estrela só."
  }
];
console.log(curiosidadesUniverso)

function exibirCuriosidadeAleatoria(){
//curiosidadesUniverso.length -> quantidade de dados na lista
//Math.random() -> gera valor aleatórios entre 0 e 1
//Math.floor() -> arredonda para baixo

    const indiceAleatorio = Math.floor(Math.random () * curiosidadesUniverso.length)

    //Acessando/guardando a curiosidade pelo índice aleatório (0,1,2,3)
    const curiosidadeEscolhida = curiosidadesUniverso [indiceAleatorio]

    //Exibindo o titulo da curiosidade escolhida no h3
    tituloCuriosidadeAleatoria.textContent = curiosidadeEscolhida.titulo;

    //exibindo a explicação da curiosidade escolhida no p
    explicacaoCuriosidadeAleatoria.textContent = curiosidadeEscolhida.explicacao;
}

botaoCuriosidadeAleatoria.addEventListener("click", exibirCuriosidadeAleatoria)

//Chamar a função de forma automatica no momento da entrada do site
exibirCuriosidadeAleatoria()