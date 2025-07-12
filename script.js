// Variáveis globais
let licaoAtual = 1
let perguntaAtual = 1
let totalPerguntas = 5
let respostaSelecionada = null
let pontuacao = 0
let vidasRestantes = 3
let xpTotal = 1250
let nivelAtual = 3
let sequenciaDias = 7
let temaAtual = "claro"

// Dados das lições organizados por unidades
const dadosLicoes = {
  1: {
    titulo: "Cumprimentos",
    unidade: 1,
    xp: 50,
    perguntas: [
      {
        pergunta: "Qual é o sinal para 'Olá'?",
        opcoes: ["Olá", "Tchau", "Obrigado", "Desculpa"],
        respostaCorreta: "Olá",
        explicacao: "O sinal de 'Olá' é feito com a mão aberta, balançando de um lado para o outro.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Olá",
      },
      {
        pergunta: "Como se faz o sinal de 'Tchau'?",
        opcoes: ["Mão fechada", "Mão aberta balançando", "Polegar para cima", "Mão no peito"],
        respostaCorreta: "Mão aberta balançando",
        explicacao: "O sinal de 'Tchau' é similar ao gesto comum, com a mão aberta balançando.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Tchau",
      },
      {
        pergunta: "Qual sinal representa 'Obrigado'?",
        opcoes: ["Mão no peito", "Mão na testa", "Mãos juntas", "Polegar para cima"],
        respostaCorreta: "Mão no peito",
        explicacao: "O sinal de 'Obrigado' é feito tocando o peito com a mão aberta.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Obrigado",
      },
      {
        pergunta: "Como se expressa 'Por favor' em Libras?",
        opcoes: ["Mãos juntas", "Mão na boca", "Mão no queixo", "Mão na testa"],
        respostaCorreta: "Mãos juntas",
        explicacao: "O sinal de 'Por favor' é feito com as mãos juntas, como em uma oração.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Por+Favor",
      },
      {
        pergunta: "Qual é o sinal para 'Desculpa'?",
        opcoes: ["Mão na testa", "Mão no peito", "Mão no queixo", "Mãos cruzadas"],
        respostaCorreta: "Mão na testa",
        explicacao: "O sinal de 'Desculpa' é feito tocando a testa com a mão.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Desculpa",
      },
    ],
  },
  2: {
    titulo: "Apresentação",
    unidade: 1,
    xp: 60,
    perguntas: [
      {
        pergunta: "Como se faz o sinal de 'Meu nome'?",
        opcoes: ["Mão no peito + nome", "Mão na testa", "Mãos juntas", "Polegar no peito"],
        respostaCorreta: "Mão no peito + nome",
        explicacao: "Para dizer 'meu nome', toque o peito e depois faça o sinal do seu nome.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Meu+Nome",
      },
      {
        pergunta: "Qual é o sinal para 'Idade'?",
        opcoes: ["Dedos contando", "Mão no rosto", "Mão no cabelo", "Mão no queixo"],
        respostaCorreta: "Dedos contando",
        explicacao: "O sinal de 'idade' é feito mostrando a quantidade com os dedos.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Idade",
      },
      {
        pergunta: "Como se expressa 'Onde você mora'?",
        opcoes: ["Mão apontando + casa", "Mão no peito", "Mãos abertas", "Dedo indicador"],
        respostaCorreta: "Mão apontando + casa",
        explicacao: "Para perguntar onde mora, aponte e faça o sinal de casa.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Onde+Mora",
      },
      {
        pergunta: "Qual sinal representa 'Trabalho'?",
        opcoes: ["Mãos batendo", "Mão no bolso", "Mãos cruzadas", "Mão na testa"],
        respostaCorreta: "Mãos batendo",
        explicacao: "O sinal de 'trabalho' é feito batendo uma mão na outra.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Trabalho",
      },
      {
        pergunta: "Como se faz o sinal de 'Estudar'?",
        opcoes: ["Mão na cabeça", "Mãos como livro", "Dedo na testa", "Mãos escrevendo"],
        respostaCorreta: "Mãos como livro",
        explicacao: "O sinal de 'estudar' é feito como se estivesse abrindo um livro.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Estudar",
      },
    ],
  },
  3: {
    titulo: "Família",
    unidade: 1,
    xp: 70,
    perguntas: [
      {
        pergunta: "Como se faz o sinal de 'Mãe'?",
        opcoes: ["Mão no queixo", "Mão na testa", "Mão no peito", "Mão no ombro"],
        respostaCorreta: "Mão no queixo",
        explicacao: "O sinal de 'Mãe' é feito tocando o queixo com o polegar.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Mãe",
      },
      {
        pergunta: "Qual é o sinal para 'Pai'?",
        opcoes: ["Mão na testa", "Mão no queixo", "Mão no peito", "Mão no nariz"],
        respostaCorreta: "Mão na testa",
        explicacao: "O sinal de 'Pai' é feito tocando a testa com o polegar.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Pai",
      },
      {
        pergunta: "Como se expressa 'Irmão' em Libras?",
        opcoes: ["Dedos entrelaçados", "Mãos lado a lado", "Mão no ombro", "Polegar para cima"],
        respostaCorreta: "Dedos entrelaçados",
        explicacao: "O sinal de 'Irmão' é feito entrelaçando os dedos indicadores.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Irmão",
      },
      {
        pergunta: "Qual sinal representa 'Avó'?",
        opcoes: ["Mão no queixo duas vezes", "Mão na bochecha", "Mão no cabelo", "Mão no pescoço"],
        respostaCorreta: "Mão no queixo duas vezes",
        explicacao: "O sinal de 'Avó' é similar ao de 'Mãe', mas repetido duas vezes.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Avó",
      },
      {
        pergunta: "Como se faz o sinal de 'Bebê'?",
        opcoes: ["Braços balançando", "Mão pequena", "Dedos pequenos", "Mão no colo"],
        respostaCorreta: "Braços balançando",
        explicacao: "O sinal de 'Bebê' é feito balançando os braços como se estivesse ninando.",
        imagemSinal: "/placeholder.svg?height=250&width=350&text=Sinal+Bebê",
      },
    ],
  },
}

// Dados de progresso do usuário
let progressoUsuario = {
  licoesCompletas: 1,
  licaoAtual: 2,
  sinaisAprendidos: 25,
  sequenciaDias: 7,
  precisaoMedia: 89,
  xpTotal: 1250,
  nivelAtual: 3,
  tempoEstudo: "2h 15m",
  historicoLicoes: [
    { licao: "Cumprimentos", pontuacao: 100, data: "Hoje", xp: 50 },
    { licao: "Apresentação", pontuacao: 60, data: "Hoje", xp: 36 },
  ],
}

// Dados do dicionário
const dicionarioSinais = [
  {
    palavra: "Olá",
    categoria: "cumprimentos",
    descricao: "Saudação básica em Libras",
    imagem: "/placeholder.svg?height=150&width=200&text=Olá",
  },
  {
    palavra: "Tchau",
    categoria: "cumprimentos",
    descricao: "Despedida em Libras",
    imagem: "/placeholder.svg?height=150&width=200&text=Tchau",
  },
  {
    palavra: "Obrigado",
    categoria: "cumprimentos",
    descricao: "Agradecimento em Libras",
    imagem: "/placeholder.svg?height=150&width=200&text=Obrigado",
  },
  {
    palavra: "Mãe",
    categoria: "familia",
    descricao: "Sinal para mãe",
    imagem: "/placeholder.svg?height=150&width=200&text=Mãe",
  },
  {
    palavra: "Pai",
    categoria: "familia",
    descricao: "Sinal para pai",
    imagem: "/placeholder.svg?height=150&width=200&text=Pai",
  },
  {
    palavra: "Um",
    categoria: "numeros",
    descricao: "Número 1 em Libras",
    imagem: "/placeholder.svg?height=150&width=200&text=1",
  },
  {
    palavra: "Casa",
    categoria: "casa",
    descricao: "Sinal para casa",
    imagem: "/placeholder.svg?height=150&width=200&text=Casa",
  },
]

// Funções de navegação
function mostrarSecao(nomeSecao) {
  // Esconder todas as seções
  const secoes = document.querySelectorAll(".secao")
  secoes.forEach((secao) => secao.classList.remove("secao-ativa"))

  // Mostrar seção selecionada
  const secaoSelecionada = document.getElementById(nomeSecao)
  if (secaoSelecionada) {
    secaoSelecionada.classList.add("secao-ativa")
  }

  // Atualizar dados específicos da seção
  switch (nomeSecao) {
    case "progresso":
      atualizarProgresso()
      break
    case "inicio":
      atualizarTrilhas()
      break
    case "dicionario":
      carregarDicionario()
      break
    case "perfil":
      atualizarPerfil()
      break
  }

  // Fechar menu mobile se estiver aberto
  fecharMenuMobile()
}

// Função para alternar tema
function alternarTema() {
  const body = document.body
  const botaoTema = document.querySelector(".icone-tema")

  if (body.classList.contains("tema-escuro")) {
    body.classList.remove("tema-escuro")
    body.classList.add("tema-claro")
    botaoTema.textContent = "🌙"
    temaAtual = "claro"
  } else {
    body.classList.remove("tema-claro")
    body.classList.add("tema-escuro")
    botaoTema.textContent = "☀️"
    temaAtual = "escuro"
  }

  // Atualizar switch no perfil
  const switchTema = document.getElementById("switch-tema-perfil")
  if (switchTema) {
    switchTema.checked = temaAtual === "escuro"
  }

  salvarConfiguracoes()
}

// Função para alternar tema via perfil
function alternarTemaViaPerfil() {
  const switchTema = document.getElementById("switch-tema-perfil")
  if (switchTema.checked) {
    if (!document.body.classList.contains("tema-escuro")) {
      alternarTema()
    }
  } else {
    if (document.body.classList.contains("tema-escuro")) {
      alternarTema()
    }
  }
}

// Função para menu mobile
function alternarMenuMobile() {
  const menu = document.querySelector(".menu-navegacao")
  const botao = document.querySelector(".botao-menu-mobile")

  menu.classList.toggle("menu-ativo")
  botao.classList.toggle("ativo")
}

function fecharMenuMobile() {
  const menu = document.querySelector(".menu-navegacao")
  const botao = document.querySelector(".botao-menu-mobile")

  menu.classList.remove("menu-ativo")
  botao.classList.remove("ativo")
}

// Funções de lição
function iniciarLicao(numeroLicao) {
  // Verificar se a lição está disponível
  const licaoElement = document.querySelector(`[data-licao="${numeroLicao}"]`)
  if (licaoElement && licaoElement.classList.contains("bloqueada")) {
    mostrarFeedback("Lição Bloqueada", "Complete as lições anteriores primeiro!", "erro")
    return
  }

  licaoAtual = numeroLicao
  perguntaAtual = 1
  pontuacao = 0
  vidasRestantes = 3
  respostaSelecionada = null

  mostrarSecao("licoes")
  carregarLicao()
  atualizarVidas()
}

function carregarLicao() {
  const licao = dadosLicoes[licaoAtual]
  if (!licao) return

  totalPerguntas = licao.perguntas.length

  // Atualizar cabeçalho da lição
  document.getElementById("titulo-licao-atual").textContent = licao.titulo
  document.getElementById("total-perguntas").textContent = totalPerguntas

  // Carregar primeira pergunta
  carregarPergunta()
}

function carregarPergunta() {
  const licao = dadosLicoes[licaoAtual]
  const pergunta = licao.perguntas[perguntaAtual - 1]

  // Atualizar interface
  document.getElementById("pergunta-atual").textContent = perguntaAtual
  document.getElementById("pergunta-texto").textContent = pergunta.pergunta

  // Atualizar barra de progresso
  const progresso = (perguntaAtual / totalPerguntas) * 100
  document.getElementById("barra-progresso-atual").style.width = progresso + "%"

  // Atualizar imagem do sinal
  const imagemSinal = document.getElementById("imagem-sinal")
  imagemSinal.src = pergunta.imagemSinal
  imagemSinal.alt = `Demonstração do sinal para ${pergunta.pergunta}`

  // Limpar seleção anterior
  respostaSelecionada = null
  document.getElementById("botao-verificar").disabled = true

  // Carregar opções de resposta
  const containerOpcoes = document.getElementById("opcoes-resposta")
  containerOpcoes.innerHTML = ""

  pergunta.opcoes.forEach((opcao) => {
    const elementoOpcao = document.createElement("div")
    elementoOpcao.className = "opcao-resposta"
    elementoOpcao.textContent = opcao
    elementoOpcao.onclick = () => selecionarResposta(elementoOpcao, opcao)
    elementoOpcao.setAttribute("tabindex", "0")
    elementoOpcao.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        selecionarResposta(elementoOpcao, opcao)
      }
    })
    containerOpcoes.appendChild(elementoOpcao)
  })
}

function selecionarResposta(elemento, resposta) {
  // Remover seleção anterior
  document.querySelectorAll(".opcao-resposta").forEach((opcao) => {
    opcao.classList.remove("selecionada")
  })

  // Selecionar nova resposta
  elemento.classList.add("selecionada")
  respostaSelecionada = resposta
  document.getElementById("botao-verificar").disabled = false
}

function verificarResposta() {
  if (!respostaSelecionada) return

  const licao = dadosLicoes[licaoAtual]
  const pergunta = licao.perguntas[perguntaAtual - 1]
  const respostaCorreta = pergunta.respostaCorreta

  // Desabilitar todas as opções
  document.querySelectorAll(".opcao-resposta").forEach((opcao) => {
    opcao.style.pointerEvents = "none"

    if (opcao.textContent === respostaCorreta) {
      opcao.classList.add("correta")
    } else if (opcao.classList.contains("selecionada") && opcao.textContent !== respostaCorreta) {
      opcao.classList.add("incorreta")
    }
  })

  // Verificar se está correto
  const acertou = respostaSelecionada === respostaCorreta
  if (acertou) {
    pontuacao++
    mostrarFeedback("Correto!", pergunta.explicacao, "sucesso")
  } else {
    vidasRestantes--
    atualizarVidas()

    if (vidasRestantes <= 0) {
      mostrarFeedback("Game Over", "Você perdeu todas as vidas! Tente novamente.", "erro")
      setTimeout(() => {
        voltarParaInicio()
      }, 3000)
      return
    }

    mostrarFeedback("Incorreto", `A resposta correta é: ${respostaCorreta}. ${pergunta.explicacao}`, "erro")
  }

  // Aguardar antes de continuar
  setTimeout(() => {
    proximaPergunta()
  }, 3000)
}

function proximaPergunta() {
  if (perguntaAtual < totalPerguntas) {
    perguntaAtual++

    // Reabilitar opções
    document.querySelectorAll(".opcao-resposta").forEach((opcao) => {
      opcao.style.pointerEvents = "auto"
      opcao.classList.remove("correta", "incorreta", "selecionada")
    })

    carregarPergunta()
  } else {
    finalizarLicao()
  }
}

function pularPergunta() {
  proximaPergunta()
}

function finalizarLicao() {
  const licao = dadosLicoes[licaoAtual]
  const porcentagemAcerto = (pontuacao / licao.perguntas.length) * 100
  const xpGanho = Math.floor((porcentagemAcerto / 100) * licao.xp)

  // Atualizar progresso se passou
  if (porcentagemAcerto >= 70) {
    if (licaoAtual > progressoUsuario.licoesCompletas) {
      progressoUsuario.licoesCompletas = licaoAtual
      progressoUsuario.licaoAtual = licaoAtual + 1
      progressoUsuario.sinaisAprendidos += licao.perguntas.length
    }

    progressoUsuario.xpTotal += xpGanho
    xpTotal = progressoUsuario.xpTotal

    // Verificar se subiu de nível
    const novoNivel = Math.floor(xpTotal / 500) + 1
    if (novoNivel > nivelAtual) {
      nivelAtual = novoNivel
      progressoUsuario.nivelAtual = nivelAtual
      mostrarFeedback(
        "Parabéns! Novo Nível!",
        `Você alcançou o nível ${nivelAtual}! Continue assim! +${xpGanho} XP`,
        "sucesso",
      )
    } else {
      mostrarFeedback(
        "Lição Completa!",
        `Você acertou ${pontuacao} de ${licao.perguntas.length} perguntas (${porcentagemAcerto.toFixed(0)}%). +${xpGanho} XP!`,
        "sucesso",
      )
    }
  } else {
    mostrarFeedback(
      "Tente Novamente",
      `Você precisa de pelo menos 70% para passar. Você fez ${porcentagemAcerto.toFixed(0)}%`,
      "erro",
    )
  }

  // Adicionar ao histórico
  progressoUsuario.historicoLicoes.unshift({
    licao: licao.titulo,
    pontuacao: porcentagemAcerto,
    data: new Date().toLocaleDateString(),
    xp: xpGanho,
  })

  salvarProgresso()

  setTimeout(() => {
    voltarParaInicio()
  }, 4000)
}

function reproduzirSinal() {
  const imagemSinal = document.getElementById("imagem-sinal")
  imagemSinal.style.animation = "none"
  setTimeout(() => {
    imagemSinal.style.animation = "pulse 1s ease"
  }, 10)
}

function atualizarVidas() {
  const vidasDisplay = document.getElementById("vidas-display")
  vidasDisplay.innerHTML = ""

  for (let i = 0; i < 3; i++) {
    const vida = document.createElement("span")
    vida.className = "vida"
    vida.textContent = "❤️"

    if (i >= vidasRestantes) {
      vida.classList.add("perdida")
    }

    vidasDisplay.appendChild(vida)
  }
}

function voltarParaInicio() {
  mostrarSecao("inicio")
  atualizarTrilhas()
  atualizarEstatisticasRapidas()
}

// Funções de progresso
function atualizarTrilhas() {
  const licoes = document.querySelectorAll(".licao-item")

  licoes.forEach((licao, index) => {
    const numeroLicao = index + 1

    // Remover todas as classes de status
    licao.classList.remove("completa", "atual", "disponivel", "bloqueada")

    if (numeroLicao <= progressoUsuario.licoesCompletas) {
      licao.classList.add("completa")
    } else if (numeroLicao === progressoUsuario.licaoAtual) {
      licao.classList.add("atual")
    } else if (numeroLicao === progressoUsuario.licoesCompletas + 1) {
      licao.classList.add("disponivel")
    } else {
      licao.classList.add("bloqueada")
    }
  })
}

function atualizarProgresso() {
  document.getElementById("licoes-completas").textContent = progressoUsuario.licoesCompletas
  document.getElementById("sinais-aprendidos").textContent = progressoUsuario.sinaisAprendidos
  document.getElementById("sequencia-dias").textContent = progressoUsuario.sequenciaDias
  document.getElementById("xp-total-progresso").textContent = progressoUsuario.xpTotal
  document.getElementById("precisao-media").textContent = progressoUsuario.precisaoMedia + "%"
  document.getElementById("tempo-estudo").textContent = progressoUsuario.tempoEstudo
}

function atualizarEstatisticasRapidas() {
  document.getElementById("sequencia-atual").textContent = progressoUsuario.sequenciaDias
  document.getElementById("xp-total").textContent = progressoUsuario.xpTotal
  document.getElementById("nivel-atual").textContent = progressoUsuario.nivelAtual
}

function alternarFiltroTempo(elemento, periodo) {
  document.querySelectorAll(".filtro-tempo").forEach((f) => f.classList.remove("ativo"))
  elemento.classList.add("ativo")

  // Aqui você pode implementar a lógica para filtrar dados por período
  console.log(`Filtro alterado para: ${periodo}`)
}

// Funções do dicionário
function carregarDicionario() {
  const listaSinais = document.getElementById("lista-sinais")
  listaSinais.innerHTML = ""

  dicionarioSinais.forEach((sinal) => {
    const itemSinal = document.createElement("div")
    itemSinal.className = "item-sinal"
    itemSinal.innerHTML = `
      <img src="${sinal.imagem}" alt="${sinal.palavra}" class="imagem-sinal-dicionario">
      <h4 class="palavra-sinal">${sinal.palavra}</h4>
      <p class="categoria-sinal">${sinal.categoria}</p>
      <p class="descricao-sinal">${sinal.descricao}</p>
    `
    listaSinais.appendChild(itemSinal)
  })
}

function filtrarCategoria(categoria) {
  // Atualizar botões ativos
  document.querySelectorAll(".categoria-botao").forEach((btn) => btn.classList.remove("ativo"))
  event.target.classList.add("ativo")

  const listaSinais = document.getElementById("lista-sinais")
  listaSinais.innerHTML = ""

  const sinaisFiltrados =
    categoria === "todos" ? dicionarioSinais : dicionarioSinais.filter((sinal) => sinal.categoria === categoria)

  sinaisFiltrados.forEach((sinal) => {
    const itemSinal = document.createElement("div")
    itemSinal.className = "item-sinal"
    itemSinal.innerHTML = `
      <img src="${sinal.imagem}" alt="${sinal.palavra}" class="imagem-sinal-dicionario">
      <h4 class="palavra-sinal">${sinal.palavra}</h4>
      <p class="categoria-sinal">${sinal.categoria}</p>
      <p class="descricao-sinal">${sinal.descricao}</p>
    `
    listaSinais.appendChild(itemSinal)
  })
}

function buscarSinal() {
  const campoBusca = document.getElementById("campo-busca-dicionario")
  const termo = campoBusca.value.toLowerCase()

  const sinaisFiltrados = dicionarioSinais.filter(
    (sinal) => sinal.palavra.toLowerCase().includes(termo) || sinal.descricao.toLowerCase().includes(termo),
  )

  const listaSinais = document.getElementById("lista-sinais")
  listaSinais.innerHTML = ""

  sinaisFiltrados.forEach((sinal) => {
    const itemSinal = document.createElement("div")
    itemSinal.className = "item-sinal"
    itemSinal.innerHTML = `
      <img src="${sinal.imagem}" alt="${sinal.palavra}" class="imagem-sinal-dicionario">
      <h4 class="palavra-sinal">${sinal.palavra}</h4>
      <p class="categoria-sinal">${sinal.categoria}</p>
      <p class="descricao-sinal">${sinal.descricao}</p>
    `
    listaSinais.appendChild(itemSinal)
  })
}

// Funções do perfil
function atualizarPerfil() {
  // Sincronizar switch do tema
  const switchTema = document.getElementById("switch-tema-perfil")
  if (switchTema) {
    switchTema.checked = temaAtual === "escuro"
  }
}

// Funções de feedback
function mostrarFeedback(titulo, mensagem, tipo) {
  const modal = document.getElementById("modal-feedback")
  const overlay = document.getElementById("overlay")
  const icone = document.getElementById("icone-feedback")
  const xpDisplay = document.getElementById("xp-ganho-display")

  document.getElementById("titulo-feedback").textContent = titulo
  document.getElementById("mensagem-feedback").textContent = mensagem

  // Definir ícone baseado no tipo
  if (tipo === "sucesso") {
    icone.textContent = "✅"
    xpDisplay.style.display = "inline-block"
  } else if (tipo === "erro") {
    icone.textContent = "❌"
    xpDisplay.style.display = "none"
  }

  modal.className = `modal-feedback ${tipo}`
  modal.style.display = "block"
  overlay.style.display = "block"
}

function fecharFeedback() {
  document.getElementById("modal-feedback").style.display = "none"
  document.getElementById("overlay").style.display = "none"
}

// Funções de armazenamento
function salvarProgresso() {
  localStorage.setItem("progressoLibras", JSON.stringify(progressoUsuario))
}

function carregarProgresso() {
  const progressoSalvo = localStorage.getItem("progressoLibras")
  if (progressoSalvo) {
    progressoUsuario = JSON.parse(progressoSalvo)
    xpTotal = progressoUsuario.xpTotal
    nivelAtual = progressoUsuario.nivelAtual
    sequenciaDias = progressoUsuario.sequenciaDias
    atualizarTrilhas()
    atualizarEstatisticasRapidas()
  }
}

function salvarConfiguracoes() {
  const configuracoes = {
    tema: temaAtual,
  }
  localStorage.setItem("configuracoesLibras", JSON.stringify(configuracoes))
}

function carregarConfiguracoes() {
  const configuracoesString = localStorage.getItem("configuracoesLibras")
  if (configuracoesString) {
    const configuracoes = JSON.parse(configuracoesString)

    if (configuracoes.tema === "escuro") {
      document.body.classList.remove("tema-claro")
      document.body.classList.add("tema-escuro")
      document.querySelector(".icone-tema").textContent = "☀️"
      temaAtual = "escuro"
    }
  }
}

// Função para resetar progresso (desenvolvimento)
function resetarProgresso() {
  progressoUsuario = {
    licoesCompletas: 1,
    licaoAtual: 2,
    sinaisAprendidos: 25,
    sequenciaDias: 7,
    precisaoMedia: 89,
    xpTotal: 1250,
    nivelAtual: 3,
    tempoEstudo: "2h 15m",
    historicoLicoes: [],
  }
  salvarProgresso()
  atualizarTrilhas()
  atualizarEstatisticasRapidas()
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Carregar dados salvos
  carregarProgresso()
  carregarConfiguracoes()

  // Inicializar interface
  atualizarTrilhas()
  atualizarEstatisticasRapidas()
  atualizarVidas()

  // Event listener para busca no dicionário
  const campoBusca = document.getElementById("campo-busca-dicionario")
  if (campoBusca) {
    campoBusca.addEventListener("input", (e) => {
      const termo = e.target.value.toLowerCase()
      const sinaisFiltrados = dicionarioSinais.filter(
        (sinal) => sinal.palavra.toLowerCase().includes(termo) || sinal.descricao.toLowerCase().includes(termo),
      )

      const listaSinais = document.getElementById("lista-sinais")
      listaSinais.innerHTML = ""

      sinaisFiltrados.forEach((sinal) => {
        const itemSinal = document.createElement("div")
        itemSinal.className = "item-sinal"
        itemSinal.innerHTML = `
          <img src="${sinal.imagem}" alt="${sinal.palavra}" class="imagem-sinal-dicionario">
          <h4 class="palavra-sinal">${sinal.palavra}</h4>
          <p class="categoria-sinal">${sinal.categoria}</p>
          <p class="descricao-sinal">${sinal.descricao}</p>
        `
        listaSinais.appendChild(itemSinal)
      })
    })
  }

  // Adicionar efeitos de hover nas lições
  document.querySelectorAll(".licao-item").forEach((licao) => {
    licao.addEventListener("mouseenter", function () {
      if (!this.classList.contains("bloqueada")) {
        this.style.transform = "scale(1.02)"
      }
    })

    licao.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Fechar menu mobile ao clicar fora
  document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu-navegacao")
    const botao = document.querySelector(".botao-menu-mobile")

    if (!menu.contains(e.target) && !botao.contains(e.target)) {
      fecharMenuMobile()
    }
  })

  // Atalhos de teclado
  document.addEventListener("keydown", (e) => {
    // ESC para fechar modais
    if (e.key === "Escape") {
      fecharFeedback()
    }

    // Enter para verificar resposta se uma opção estiver selecionada
    if (e.key === "Enter" && respostaSelecionada && !document.getElementById("botao-verificar").disabled) {
      verificarResposta()
    }
  })
})

// Salvar progresso periodicamente
setInterval(salvarProgresso, 30000) // A cada 30 segundos

// Adicionar função de debug no console
window.debugLibras = {
  resetarProgresso,
  progressoUsuario,
  dadosLicoes,
  alternarTema,
  mostrarSecao,
}
