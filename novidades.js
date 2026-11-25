/* =========================================================================
   MIGA MODAS — NOVIDADES
   =========================================================================
   Este é o ÚNICO arquivo que você precisa editar para trocar as peças da
   seção "Novidades" do site. Não precisa mexer no index.html.

   COMO ADICIONAR UMA PEÇA
   1. Coloque a foto na pasta  img/novidades/
      (de preferência em pé, proporção 4:5, até ~200 KB; nome sem espaço
      nem acento, ex.: vestido-floral-rosa.jpg)
   2. Copie o MODELO abaixo, cole dentro da lista NOVIDADES e preencha.
      A ordem da lista é a ordem no site: a primeira peça aparece primeiro.
   3. Salve e suba para o GitHub. O site se atualiza em ~1 minuto.

   COMO REMOVER UMA PEÇA
   Apague o bloco dela, do  {  até o  },  (inclusive a vírgula).
   Se quiser, apague também a foto da pasta img/novidades/.

   COMO MARCAR COMO ESGOTADA
   Troque  esgotado: false  por  esgotado: true
   (a peça continua no site com o selo "Esgotado" e o botão vira
   "Avise-me quando chegar").

   SE NÃO HOUVER NENHUMA PEÇA NA LISTA, o site mostra automaticamente
   "Nenhuma novidade disponível no momento".

   ---------------------------------------------------------------------
   MODELO (copie daqui...)

   {
     titulo:    "Nome da peça",               // obrigatório
     publico:   "fem",                        // "fem", "masc" ou "inf"
     tipo:      "Vestido",                    // aparece acima do nome
     fotos:     ["img/novidades/foto-1.jpg"], // a 1ª é a capa; pode ter várias
     tamanhos:  ["P", "M", "G"],              // deixe [] se não quiser mostrar
     preco:     "69,90",                      // deixe "" para "Consulte o valor"
     cores:     "",                           // opcional, ex.: "Rosa e preto"
     descricao: "",                           // opcional: tecido, caimento...
     novo:      true,                         // selo "Chegou agora"
     destaque:  false,                        // selo "Destaque"
     esgotado:  false                         // selo "Esgotado"
   },

   ...até aqui)
   ---------------------------------------------------------------------
   Dica: textos SEMPRE entre aspas "assim". Cada bloco termina com  },
   ========================================================================= */

const NOVIDADES = [

  {
    titulo:    "Vestido Longo Azul",
    publico:   "fem",
    tipo:      "Vestido",
    fotos:     ["img/novidades/vestido-longo-azul.jpg"],
    tamanhos:  [],
    preco:     "69,90",
    cores:     "Azul",
    descricao: "",
    novo:      true,
    destaque:  true,
    esgotado:  false
  },

  {
    titulo:    "Vestido Longo Preto com Bojo",
    publico:   "fem",
    tipo:      "Vestido",
    fotos:     ["img/novidades/vestido-longo-preto-bojo.jpg"],
    tamanhos:  ["M", "G"],
    preco:     "69,90",
    cores:     "Preto",
    descricao: "Frente com bojo e costas com lastex para um ajuste perfeito.",
    novo:      true,
    destaque:  false,
    esgotado:  false
  },

  {
    titulo:    "Vestido Azul Frente Única",
    publico:   "fem",
    tipo:      "Vestido",
    fotos:     ["img/novidades/vestido-azul-frente-unica.jpg"],
    tamanhos:  [],
    preco:     "",
    cores:     "Azul",
    descricao: "Com faixa para amarrar na cintura.",
    novo:      true,
    destaque:  false,
    esgotado:  false
  },

  {
    titulo:    "Vestido Longo de Crochê",
    publico:   "fem",
    tipo:      "Vestido",
    fotos:     ["img/novidades/vestido-croche-off-white.jpg"],
    tamanhos:  [],
    preco:     "",
    cores:     "Off-white",
    descricao: "",
    novo:      false,
    destaque:  false,
    esgotado:  false
  },

  {
    titulo:    "Vestido Listrado de Alcinha",
    publico:   "fem",
    tipo:      "Vestido",
    fotos:     ["img/novidades/vestido-listrado-rose.jpg"],
    tamanhos:  [],
    preco:     "",
    cores:     "Rosé e off-white",
    descricao: "",
    novo:      false,
    destaque:  false,
    esgotado:  false
  },

  {
    titulo:    "Vestido Coral com Renda",
    publico:   "fem",
    tipo:      "Vestido",
    fotos:     ["img/novidades/vestido-coral-renda.jpg"],
    tamanhos:  ["G"],
    preco:     "",
    cores:     "Coral",
    descricao: "",
    novo:      false,
    destaque:  false,
    esgotado:  false
  },

  {
    titulo:    "Saída de Praia Estampada",
    publico:   "fem",
    tipo:      "Moda praia",
    fotos:     ["img/novidades/saida-de-praia-estampada.jpg"],
    tamanhos:  [],
    preco:     "",
    cores:     "",
    descricao: "",
    novo:      false,
    destaque:  false,
    esgotado:  false
  },

  {
    titulo:    "Conjunto de Praia",
    publico:   "fem",
    tipo:      "Moda praia",
    fotos:     ["img/novidades/conjunto-praia-azul.jpg"],
    tamanhos:  [],
    preco:     "",
    cores:     "Azul, preto e verde",
    descricao: "",
    novo:      false,
    destaque:  false,
    esgotado:  false
  },

];
