import { useState } from "react";

const curiosidadesIniciais = [
  { id: 1, pokemon: "Pikachu", emoji: "⚡", cor: "#FFD700", curiosidade: "Pikachu foi quase substituído! Os criadores queriam que Clefairy fosse o mascote do anime, mas mudaram para Pikachu porque acharam ele mais fofo.", categoria: "História" },
  { id: 2, pokemon: "Gengar", emoji: "👻", cor: "#7B68EE", curiosidade: "Gengar é a sombra de um Clefable! Muitas pessoas acreditam que Gengar foi criado como o alter-ego sombrio do Clefable, já que os dois têm formatos muito parecidos.", categoria: "Teoria" },
  { id: 3, pokemon: "Mewtwo", emoji: "🧬", cor: "#FF6B9D", curiosidade: "Mewtwo foi criado a partir do DNA de Mew em um laboratório. Ele foi o primeiro Pokémon lendário apresentado na história e ainda é um dos mais poderosos.", categoria: "Lore" },
  { id: 4, pokemon: "Charizard", emoji: "🔥", cor: "#FF4500", curiosidade: "Charizard não é do tipo Dragão, mas parece muito! Ele só virou Dragão nas Mega Evoluções. Muitos fãs ficaram surpresos com isso por anos.", categoria: "Tipo" },
  { id: 5, pokemon: "Snorlax", emoji: "😴", cor: "#4A90D9", curiosidade: "Snorlax dorme 90% do tempo e come até 400kg de comida por dia antes de dormir. Ele só acorda quando está com fome.", categoria: "Curiosidade" },
  { id: 6, pokemon: "Ditto", emoji: "🔮", cor: "#DA70D6", curiosidade: "Ditto pode se transformar em qualquer Pokémon, inclusive em humanos! Existe uma teoria de que Ditto é um experimento falho de clonagem de Mew.", categoria: "Teoria" },
  { id: 7, pokemon: "Magikarp", emoji: "🐟", cor: "#FF8C00", curiosidade: "Magikarp parece inútil, mas evolui para Gyarados — um dos mais poderosos do jogo! É uma lição: nunca subestime ninguém.", categoria: "Evolução" },
  { id: 8, pokemon: "Alakazam", emoji: "🥄", cor: "#FFD700", curiosidade: "Alakazam tem um QI de 5000 e memoriza tudo que já aconteceu desde que nasceu. As colheres que ele segura se curvam com o poder da sua mente!", categoria: "Curiosidade" },
  { id: 9, pokemon: "Cubone", emoji: "💀", cor: "#8B7355", curiosidade: "O crânio que Cubone usa na cabeça é da sua própria mãe. Ele chora todas as noites com saudade dela. É um dos Pokémon com a história mais triste.", categoria: "Lore" },
  { id: 10, pokemon: "Eevee", emoji: "🌟", cor: "#C4A35A", curiosidade: "Eevee tem o maior número de evoluções: 8 formas diferentes! Cada uma depende de uma pedra, local ou nível de amizade.", categoria: "Evolução" },
  { id: 11, pokemon: "Slowpoke", emoji: "🌸", cor: "#FFB6C1", curiosidade: "Slowpoke demora 5 segundos para sentir dor. Se ele perder a cauda, nem percebe! E a cauda cresce de volta rapidinho.", categoria: "Curiosidade" },
  { id: 12, pokemon: "Gastly", emoji: "🌙", cor: "#7B68EE", curiosidade: "Gastly é feito de gás venenoso e consegue envolver um elefante inteiro com seu corpo! Ele não tem forma física de verdade.", categoria: "Tipo" },
  { id: 13, pokemon: "Raichu", emoji: "⚡", cor: "#FF8C00", curiosidade: "O Pikachu do Ash recusou a Pedra Trovão porque não queria virar Raichu. Ele preferia ficar pequeno e continuar sendo ele mesmo!", categoria: "História" },
  { id: 14, pokemon: "Bulbasaur", emoji: "🍃", cor: "#4CAF50", curiosidade: "Bulbasaur é o número 001 da Pokédex, mas Rhydon foi o primeiro Pokémon desenhado de toda a franquia!", categoria: "História" },
  { id: 15, pokemon: "Gyarados", emoji: "🐉", cor: "#2196F3", curiosidade: "Gyarados é do tipo Água e Voador, mas parece Dragão! Ele ficou sem o tipo Dragão por limitações técnicas do Game Boy.", categoria: "Tipo" },
  { id: 16, pokemon: "Jigglypuff", emoji: "🎯", cor: "#FF6B9D", curiosidade: "Jigglypuff fica com raiva quando as pessoas dormem durante sua música! Por isso ele desenha nos rostos de quem dorme com caneta permanente.", categoria: "Lore" },
  { id: 17, pokemon: "Vaporeon", emoji: "🌊", cor: "#4A90D9", curiosidade: "Vaporeon pode se dissolver na água e se tornar completamente invisível! Suas células são parecidas com moléculas de água.", categoria: "Teoria" },
  { id: 18, pokemon: "Arcanine", emoji: "🔥", cor: "#FF4500", curiosidade: "Arcanine foi quase um Pokémon lendário! Na série original, ele aparece numa pintura junto com os pássaros lendários.", categoria: "História" },
  { id: 19, pokemon: "Mew", emoji: "💎", cor: "#FF6B9D", curiosidade: "Mew contém o DNA de todos os Pokémon e pode aprender qualquer golpe! Ele foi escondido secretamente no código do jogo Red e Blue como surpresa.", categoria: "Teoria" },
  { id: 20, pokemon: "Haunter", emoji: "👻", cor: "#9C27B0", curiosidade: "Haunter pode matar com apenas um toque e atravessa paredes! É considerado um dos Pokémon mais assustadores de toda a Pokédex.", categoria: "Lore" },
  { id: 21, pokemon: "Eternatus", emoji: "🐉", cor: "#8A2BE2", curiosidade: "Eternatus chegou à Terra dentro de um meteorito há 20.000 anos! Ele ficou dormindo no centro do planeta até ser acordado acidentalmente.", categoria: "Lore" },
  { id: 22, pokemon: "Eternatus", emoji: "🐉", cor: "#8A2BE2", curiosidade: "Na forma Eternamax, Eternatus mede 100 metros — maior que um prédio de 30 andares! É o maior Pokémon já registrado.", categoria: "Curiosidade" },
  { id: 23, pokemon: "Eternatus", emoji: "🐉", cor: "#8A2BE2", curiosidade: "O corpo de Eternatus libera energia infinita chamada Eternergy, que causou a Darkest Day — um evento apocalíptico que quase destruiu Galar.", categoria: "Lore" },
  { id: 24, pokemon: "Eternatus", emoji: "🐉", cor: "#8A2BE2", curiosidade: "Eternamax Eternatus tem os maiores status de base de todos os Pokémon da história: 1125 pontos no total. Nenhum outro chega perto!", categoria: "Curiosidade" },
  { id: 25, pokemon: "Eternatus", emoji: "🐉", cor: "#8A2BE2", curiosidade: "A forma Eternamax só aparece na batalha final de Sword e Shield. Ela é tão poderosa que você não pode capturá-la nessa forma.", categoria: "História" },
  { id: 26, pokemon: "Lucario", emoji: "🥊", cor: "#4A90D9", curiosidade: "Lucario consegue sentir os pensamentos e emoções de qualquer ser vivo através da Aura. Ele consegue prever ataques antes mesmo de acontecerem!", categoria: "Curiosidade" },
  { id: 27, pokemon: "Garchomp", emoji: "🦈", cor: "#6B5B95", curiosidade: "Garchomp voa tão rápido quanto um jato e pode alcançar o topo de montanhas em segundos. Suas asas parecem barbatanas de tubarão!", categoria: "Curiosidade" },
  { id: 28, pokemon: "Umbreon", emoji: "🌙", cor: "#FFD700", curiosidade: "Umbreon foi o primeiro Pokémon do tipo Sombrio a ser introduzido. Os anéis dourados no seu corpo brilham na lua cheia e liberam toxinas.", categoria: "Tipo" },
  { id: 29, pokemon: "Espeon", emoji: "☀️", cor: "#DA70D6", curiosidade: "Espeon desenvolveu seus poderes psíquicos para proteger seu treinador. O rubim na testa absorve energia solar e amplifica seus poderes telepáticos.", categoria: "Lore" },
  { id: 30, pokemon: "Tyranitar", emoji: "🏔️", cor: "#4CAF50", curiosidade: "Tyranitar é tão forte que pode destruir montanhas com suas mãos! Ele remodela a paisagem ao seu redor apenas caminhando.", categoria: "Curiosidade" },
  { id: 31, pokemon: "Dragonite", emoji: "🐉", cor: "#FF8C00", curiosidade: "Dragonite é incrivelmente gentil apesar do tamanho! Ele guia navios perdidos no mar e salva pessoas que estão se afogando.", categoria: "Lore" },
  { id: 32, pokemon: "Scyther", emoji: "🌿", cor: "#4CAF50", curiosidade: "As lâminas de Scyther são tão afiadas que conseguem cortar troncos de árvores com um único golpe. Elas ficam mais afiadas com o uso!", categoria: "Curiosidade" },
  { id: 33, pokemon: "Lapras", emoji: "🌊", cor: "#4A90D9", curiosidade: "Lapras quase foi extinto por causa da caça excessiva. Ele é tão gentil que gosta de carregar humanos nas costas atravessando mares.", categoria: "História" },
  { id: 34, pokemon: "Porygon", emoji: "💻", cor: "#FF6B9D", curiosidade: "Porygon foi o primeiro Pokémon criado completamente por computador! Ele pode entrar na internet e viajar pelo ciberespaço.", categoria: "História" },
  { id: 35, pokemon: "Aerodactyl", emoji: "🦕", cor: "#8B7355", curiosidade: "Aerodactyl foi restaurado de um fragmento de âmbar com DNA pré-histórico, assim como os dinossauros de Jurassic Park!", categoria: "Lore" },
  { id: 36, pokemon: "Articuno", emoji: "❄️", cor: "#4A90D9", curiosidade: "Articuno congela a umidade do ar ao voar, criando nevascas onde quer que passe. Diz-se que aparece para pessoas perdidas em montanhas geladas.", categoria: "Lore" },
  { id: 37, pokemon: "Zapdos", emoji: "⚡", cor: "#FFD700", curiosidade: "Zapdos vive dentro de nuvens de tempestade e se alimenta de raios! Cada vez que ele bate as asas, raios explodem ao seu redor.", categoria: "Curiosidade" },
  { id: 38, pokemon: "Moltres", emoji: "🔥", cor: "#FF4500", curiosidade: "Moltres cura suas feridas mergulhando em lava de vulcões! Quando ele voa, gotas de fogo caem de suas asas flamejantes.", categoria: "Lore" },
  { id: 39, pokemon: "Togepi", emoji: "🥚", cor: "#FFD700", curiosidade: "Togepi absorve a felicidade e bondade das pessoas ao redor e armazena dentro do seu ovo. Pessoas más nunca conseguem fazê-lo feliz.", categoria: "Lore" },
  { id: 40, pokemon: "Ampharos", emoji: "⚡", cor: "#FFD700", curiosidade: "A luz da cauda de Ampharos é tão brilhante que era usada como farol pelos marinheiros antigos para guiar navios à noite.", categoria: "História" },
  { id: 41, pokemon: "Espeon", emoji: "☀️", cor: "#DA70D6", curiosidade: "Espeon pode prever o futuro próximo com seus pelos. Quando algo perigoso está perto, os pelos ficam em pé automaticamente.", categoria: "Curiosidade" },
  { id: 42, pokemon: "Umbreon", emoji: "🌙", cor: "#1a1a2e", curiosidade: "Umbreon só evolui de Eevee quando há um laço de amizade muito forte e é noite. É um dos Pokémon que mais representa lealdade.", categoria: "Evolução" },
  { id: 43, pokemon: "Heracross", emoji: "🦋", cor: "#4A90D9", curiosidade: "Heracross tem força suficiente para lançar um Snorlax para longe! Ele usa seu chifre enorme como alavanca para virar oponentes.", categoria: "Curiosidade" },
  { id: 44, pokemon: "Sneasel", emoji: "❄️", cor: "#4A90D9", curiosidade: "Sneasel rouba ovos de ninhos de pássaros para se alimentar. Ele é tão ágil que consegue escalar montanhas de gelo em segundos.", categoria: "Lore" },
  { id: 45, pokemon: "Teddiursa", emoji: "🍯", cor: "#FF8C00", curiosidade: "Teddiursa sempre lambe as patas porque elas ficam cobertas de mel! Ele coleta mel de várias fontes e mistura com frutas silvestres.", categoria: "Curiosidade" },
  { id: 46, pokemon: "Houndoom", emoji: "🔥", cor: "#FF4500", curiosidade: "As chamas de Houndoom são venenosas — as queimaduras que ele causa nunca param de doer! Na Idade Média, as pessoas acreditavam que ele era um demônio.", categoria: "Lore" },
  { id: 47, pokemon: "Kingdra", emoji: "🌊", cor: "#4A90D9", curiosidade: "Quando Kingdra boceja nas profundezas do oceano, cria redemoinhos tão fortes que afundam navios. Ele dorme no fundo do mar por séculos.", categoria: "Lore" },
  { id: 48, pokemon: "Donphan", emoji: "🐘", cor: "#8B7355", curiosidade: "Donphan se enrola numa bola e rola em alta velocidade para atacar! Ele pode destruir casas de madeira sem perceber.", categoria: "Curiosidade" },
  { id: 49, pokemon: "Stantler", emoji: "🦌", cor: "#8B7355", curiosidade: "Os chifres de Stantler criam ilusões tão poderosas que quem os olha por tempo demais começa a se sentir tonto e desorientado.", categoria: "Curiosidade" },
  { id: 50, pokemon: "Smeargle", emoji: "🎨", cor: "#FF8C00", curiosidade: "Smeargle pode aprender qualquer golpe do jogo usando seu Esboço! Ele marca seu território pintando com a tinta que sai da cauda.", categoria: "Curiosidade" },
  { id: 51, pokemon: "Miltank", emoji: "🐄", cor: "#FFB6C1", curiosidade: "O leite de Miltank tem propriedades curativas incríveis e é tão nutritivo que pode curar qualquer pessoa doente em poucos dias.", categoria: "Curiosidade" },
  { id: 52, pokemon: "Raikou", emoji: "⚡", cor: "#FFD700", curiosidade: "Raikou desceu dos céus com um raio durante uma tempestade. Ele corre tão rápido que parece um trovão atravessando a terra.", categoria: "Lore" },
  { id: 53, pokemon: "Entei", emoji: "🔥", cor: "#FF4500", curiosidade: "Cada vez que Entei ruge, um vulcão em algum lugar do mundo entra em erupção. Ele corre pela terra como lava derretida.", categoria: "Lore" },
  { id: 54, pokemon: "Suicune", emoji: "🌊", cor: "#4A90D9", curiosidade: "Suicune purifica água poluída onde quer que passe. Ele sempre corre contra o vento e ninguém sabe onde ele vai aparecer.", categoria: "Lore" },
  { id: 55, pokemon: "Larvitar", emoji: "🏔️", cor: "#4CAF50", curiosidade: "Larvitar nasce comendo a montanha onde foi enterrado! Ele precisa comer a montanha inteira antes de conseguir ver a luz do sol pela primeira vez.", categoria: "Lore" },
  { id: 56, pokemon: "Lugia", emoji: "🌊", cor: "#4A90D9", curiosidade: "Lugia se esconde no fundo do oceano porque suas asas são tão poderosas que um simples bater causa tempestades por 40 dias!", categoria: "Lore" },
  { id: 57, pokemon: "Ho-Oh", emoji: "🔥", cor: "#FFD700", curiosidade: "Ho-Oh ressuscitou os três cães lendários — Raikou, Entei e Suicune — após um incêndio destruir a Torre Burnada. Diz-se que ver Ho-Oh traz felicidade eterna.", categoria: "Lore" },
  { id: 58, pokemon: "Celebi", emoji: "🍃", cor: "#4CAF50", curiosidade: "Celebi viaja no tempo e aparece apenas em épocas de paz. Onde ele aparece, as plantas florescem instantaneamente.", categoria: "Lore" },
  { id: 59, pokemon: "Treecko", emoji: "🍃", cor: "#4CAF50", curiosidade: "Treecko consegue escalar paredes lisas e tetos usando as ventosas minúsculas nas patas. Ele nunca recua de uma batalha, não importa o quão forte seja o oponente.", categoria: "Curiosidade" },
  { id: 60, pokemon: "Mudkip", emoji: "🌊", cor: "#4A90D9", curiosidade: "A barbatana na cabeça de Mudkip funciona como um radar supersensível. Ele consegue sentir o movimento da água e do ar ao redor sem usar os olhos.", categoria: "Curiosidade" },
  { id: 61, pokemon: "Blaziken", emoji: "🔥", cor: "#FF4500", curiosidade: "Blaziken pode saltar sobre prédios de 30 andares de uma vez! Seus chutes são tão poderosos que partem pedras e deixam chamas no ar.", categoria: "Curiosidade" },
  { id: 62, pokemon: "Beautifly", emoji: "🦋", cor: "#FFD700", curiosidade: "Beautifly parece inofensivo, mas é agressivo! Ele usa a tromba afiada para perfurar a pele de outros Pokémon e sugar sua energia.", categoria: "Curiosidade" },
  { id: 63, pokemon: "Gardevoir", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Gardevoir criaria um buraco negro para proteger seu treinador! Ele tem poderes psíquicos tão fortes que consegue distorcer o espaço-tempo.", categoria: "Lore" },
  { id: 64, pokemon: "Sableye", emoji: "💎", cor: "#9C27B0", curiosidade: "Os olhos de Sableye são feitos de gemas preciosas! Ele vive em cavernas escuras e come pedras e minerais. Por ser tipo Sombrio e Fantasma, não tinha fraquezas por muito tempo.", categoria: "Tipo" },
  { id: 65, pokemon: "Aggron", emoji: "🏔️", cor: "#8B7355", curiosidade: "Aggron considera uma montanha inteira como seu território e cuida dela com dedicação. Se alguém desmatá-la, ele parte para cima de cidades inteiras em fúria.", categoria: "Lore" },
  { id: 66, pokemon: "Medicham", emoji: "🧘", cor: "#FF6B9D", curiosidade: "Medicham medita por 30 dias seguidos sem comer nada! Durante a meditação, seus poderes psíquicos atingem o pico máximo.", categoria: "Curiosidade" },
  { id: 67, pokemon: "Flygon", emoji: "🐉", cor: "#4CAF50", curiosidade: "Flygon bate as asas tão rápido que cria uma música parecida com um canto. Por isso é chamado de O Espírito do Deserto.", categoria: "Lore" },
  { id: 68, pokemon: "Absol", emoji: "🌙", cor: "#4A90D9", curiosidade: "Absol aparece antes de desastres naturais para avisar as pessoas. Por isso as pessoas o chamavam de Pokémon do Azar — quando na verdade ele estava tentando ajudar!", categoria: "Lore" },
  { id: 69, pokemon: "Salamence", emoji: "🐉", cor: "#4A90D9", curiosidade: "Salamence quis tanto ter asas que seu desejo foi tão intenso que as células do corpo se reorganizaram e as asas cresceram! É um caso único na biologia Pokémon.", categoria: "Evolução" },
  { id: 70, pokemon: "Metagross", emoji: "🤖", cor: "#8B7355", curiosidade: "Metagross tem quatro cérebros trabalhando juntos, o que o torna mais inteligente que um supercomputador! Ele prende a presa com as garras e come com calma.", categoria: "Curiosidade" },
  { id: 71, pokemon: "Regirock", emoji: "🏔️", cor: "#FF8C00", curiosidade: "Regirock é feito inteiramente de pedras e se autorrrepara adicionando novas rochas ao corpo quando danificado. Sua origem é um completo mistério.", categoria: "Lore" },
  { id: 72, pokemon: "Regice", emoji: "❄️", cor: "#4A90D9", curiosidade: "Regice foi criado durante a Era do Gelo há milhares de anos. O gelo que o compõe é tão frio que nenhuma chama consegue derreter — nem magma de vulcão!", categoria: "Lore" },
  { id: 73, pokemon: "Registeel", emoji: "🤖", cor: "#8B7355", curiosidade: "O corpo de Registeel é mais duro que qualquer metal conhecido. Ele foi temperado pelas pressões do interior da Terra por milhões de anos.", categoria: "Lore" },
  { id: 74, pokemon: "Kyogre", emoji: "🌊", cor: "#4A90D9", curiosidade: "Kyogre expandiu os mares do mundo com seus poderes! Ele é tão antigo que viveu antes de existirem continentes no planeta.", categoria: "Lore" },
  { id: 75, pokemon: "Groudon", emoji: "🔥", cor: "#FF4500", curiosidade: "Groudon criou os continentes e os desertos do mundo! Sua batalha com Kyogre pelo domínio da Terra durou séculos e quase destruiu o planeta.", categoria: "Lore" },
  { id: 76, pokemon: "Rayquaza", emoji: "🐉", cor: "#4CAF50", curiosidade: "Rayquaza vive na camada de ozônio há bilhões de anos! Ele foi quem separou Kyogre e Groudon quando eles quase destruíram o mundo.", categoria: "Lore" },
  { id: 77, pokemon: "Jirachi", emoji: "⭐", cor: "#FFD700", curiosidade: "Jirachi concede qualquer desejo quando acorda — mas só fica acordado por 7 dias a cada 1000 anos! Depois volta a dormir em seu casulo de cristal.", categoria: "Lore" },
  { id: 78, pokemon: "Deoxys", emoji: "🧬", cor: "#4CAF50", curiosidade: "Deoxys é um vírus alienígena que foi transformado por radiação cósmica! Ele pode mudar completamente de forma alterando seu DNA instantaneamente.", categoria: "Lore" },
  { id: 79, pokemon: "Turtwig", emoji: "🍃", cor: "#4CAF50", curiosidade: "A casca de Turtwig é feita de terra endurecida e o galho na cabeça fica murcho quando ele está com sede. Ele faz fotossíntese pela carapaça!", categoria: "Curiosidade" },
  { id: 80, pokemon: "Piplup", emoji: "🌊", cor: "#4A90D9", curiosidade: "Piplup é extremamente orgulhoso e odeia receber ajuda de qualquer um! Mesmo quando cai, ele finge que foi de propósito e segue em frente.", categoria: "Curiosidade" },
  { id: 81, pokemon: "Chimchar", emoji: "🔥", cor: "#FF4500", curiosidade: "A chama na cauda de Chimchar não apaga nem na chuva! Ela é alimentada por gases do estômago e só some quando ele está dormindo profundamente.", categoria: "Curiosidade" },
  { id: 82, pokemon: "Cranidos", emoji: "🦕", cor: "#FF6B9D", curiosidade: "Cranidos viveu há 100 milhões de anos e tinha o crânio mais duro já registrado. Ele usava a cabeça para abrir buracos em árvores e caçar.", categoria: "História" },
  { id: 83, pokemon: "Budew", emoji: "🌸", cor: "#4CAF50", curiosidade: "Budew libera pólen venenoso quando estressado! O pólen causa espirros e coriza incontroláveis em qualquer pessoa que o inale.", categoria: "Curiosidade" },
  { id: 84, pokemon: "Riolu", emoji: "🥊", cor: "#4A90D9", curiosidade: "Riolu consegue correr por montanhas durante a noite inteira sem parar! Ele se comunica com outros da mesma espécie usando ondas de Aura.", categoria: "Curiosidade" },
  { id: 85, pokemon: "Hippopotas", emoji: "🐘", cor: "#FF8C00", curiosidade: "Hippopotas expele areia em vez de suor para proteger o corpo! Em vez de se banhar em água, ele se enterra na areia para se limpar.", categoria: "Curiosidade" },
  { id: 86, pokemon: "Gible", emoji: "🐉", cor: "#4A90D9", curiosidade: "Gible vive em cavernas aquecidas pelo sol e morde tudo que se mexe perto dele! Quando tenta morder alguém grande demais, acaba ficando preso.", categoria: "Curiosidade" },
  { id: 87, pokemon: "Rotom", emoji: "⚡", cor: "#FFD700", curiosidade: "Rotom pode se infiltrar em eletrodomésticos e controlá-los! Ele muda de tipo dependendo de qual aparelho ele habita — forno, ventilador, geladeira!", categoria: "Tipo" },
  { id: 88, pokemon: "Uxie", emoji: "💎", cor: "#FFD700", curiosidade: "Uxie apaga a memória de qualquer pessoa que olhar nos seus olhos! Por isso ele sempre mantém os olhos fechados na presença de humanos.", categoria: "Lore" },
  { id: 89, pokemon: "Mesprit", emoji: "💎", cor: "#FF6B9D", curiosidade: "Mesprit ensinou os humanos a sentirem emoções! Quando ele sai do Lago Valor, o corpo fica para trás como uma casca vazia enquanto o espírito voa livre.", categoria: "Lore" },
  { id: 90, pokemon: "Azelf", emoji: "💎", cor: "#4A90D9", curiosidade: "Azelf deu à humanidade a força de vontade e a determinação! Ele pode paralisar qualquer ser vivo com seu olhar por uma semana inteira.", categoria: "Lore" },
  { id: 91, pokemon: "Dialga", emoji: "💎", cor: "#4A90D9", curiosidade: "Dialga controla o tempo e pode ir para o passado ou futuro! Diz-se que o tempo começou a existir no exato momento em que Dialga nasceu.", categoria: "Lore" },
  { id: 92, pokemon: "Palkia", emoji: "💎", cor: "#DA70D6", curiosidade: "Palkia controla o espaço e pode dobrar a realidade! Ele vive numa dimensão paralela e aparece no mundo real apenas em raras ocasiões.", categoria: "Lore" },
  { id: 93, pokemon: "Giratina", emoji: "👻", cor: "#8B7355", curiosidade: "Giratina foi banido por Arceus para o Mundo Distorcido por causa de sua violência! Ele vive numa dimensão antimatéria onde as leis da física são invertidas.", categoria: "Lore" },
  { id: 94, pokemon: "Cresselia", emoji: "🌙", cor: "#FFD700", curiosidade: "Cresselia cria belas auroras lunares ao voar! Uma pena de sua asa pode curar pesadelos — por isso ela e Darkrai são eternas rivais.", categoria: "Lore" },
  { id: 95, pokemon: "Darkrai", emoji: "🌙", cor: "#1a1a2e", curiosidade: "Darkrai causa pesadelos em qualquer pessoa que dorme perto dele — mas não é maldade, é um mecanismo de defesa involuntário! Ele se isola para não machucar ninguém.", categoria: "Lore" },
  { id: 96, pokemon: "Shaymin", emoji: "🌸", cor: "#4CAF50", curiosidade: "Shaymin pode absorver toxinas do ar e transformá-las em flores! Onde ele passa, campos poluídos viram pradarias floridas em instantes.", categoria: "Lore" },
  { id: 97, pokemon: "Arceus", emoji: "⭐", cor: "#FFD700", curiosidade: "Arceus criou o universo Pokémon inteiro! Diz-se que ele nasceu de um ovo no meio do nada antes de qualquer coisa existir. Ele tem 1000 braços.", categoria: "Lore" },
  { id: 98, pokemon: "Victini", emoji: "⭐", cor: "#FFD700", curiosidade: "Victini traz vitória a qualquer treinador que o encontrar! Ele gera energia infinita e compartilha com quem toca nele, nunca ficando sem forças.", categoria: "Curiosidade" },
  { id: 99, pokemon: "Snivy", emoji: "🍃", cor: "#4CAF50", curiosidade: "Snivy usa a fotossíntese para se alimentar! Quanto mais sol brilha, mais rápido e forte ele fica. Quando está de mau humor, a cauda cai para baixo.", categoria: "Curiosidade" },
  { id: 100, pokemon: "Tepig", emoji: "🔥", cor: "#FF4500", curiosidade: "Tepig lança chamas pelo nariz quando está bem de saúde! Quando está doente, a fumaça fica preta e escorregadia. É tipo um termômetro de fogo.", categoria: "Curiosidade" },
  { id: 101, pokemon: "Oshawott", emoji: "🌊", cor: "#4A90D9", curiosidade: "O Oshawott usa a concha da barriga como arma e escudo! A concha pode ser removida e usada como uma espada afiada em batalhas.", categoria: "Curiosidade" },
  { id: 102, pokemon: "Zorua", emoji: "🦊", cor: "#FF4500", curiosidade: "Zorua se transforma em crianças humanas quando quer se aproximar das pessoas! Ele é tão convincente que muitos pais já foram enganados.", categoria: "Teoria" },
  { id: 103, pokemon: "Zoroark", emoji: "🦊", cor: "#FF4500", curiosidade: "Zoroark protege seu bando criando ilusões de paisagens inteiras! Ele faz cidades inteiras desaparecerem para afastar invasores do seu território.", categoria: "Lore" },
  { id: 104, pokemon: "Minccino", emoji: "🐭", cor: "#FFB6C1", curiosidade: "Minccino limpa tudo o que vê com a cauda felpuda! Ele é tão obcecado com limpeza que ataca qualquer coisa suja que apareça na frente.", categoria: "Curiosidade" },
  { id: 105, pokemon: "Gothitelle", emoji: "🌙", cor: "#9C27B0", curiosidade: "Gothitelle pode ver o futuro — inclusive a hora da morte de seu treinador! Por isso eles ficam muito tristes às vezes, conhecendo o que vem por aí.", categoria: "Lore" },
  { id: 106, pokemon: "Reuniclus", emoji: "🧬", cor: "#4CAF50", curiosidade: "Reuniclus tem um cérebro poderoso protegido por fluido gelatinoso! Quando dois se encontram, unem os braços e compartilham pensamentos diretamente.", categoria: "Curiosidade" },
  { id: 107, pokemon: "Vanilluxe", emoji: "❄️", cor: "#4A90D9", curiosidade: "Vanilluxe foi criado por neve que congelou durante a noite e ganhou vida! Cada uma das duas cabeças tem personalidade diferente e às vezes discutem entre si.", categoria: "Lore" },
  { id: 108, pokemon: "Sawsbuck", emoji: "🦌", cor: "#4CAF50", curiosidade: "Sawsbuck muda de aparência com as estações do ano! No verão tem folhas verdes, no outono folhas laranjas, no inverno fica sem folhas e na primavera tem flores.", categoria: "Evolução" },
  { id: 109, pokemon: "Emolga", emoji: "⚡", cor: "#FFD700", curiosidade: "Emolga planeja de árvore em árvore usando as membranas nas laterais do corpo! Ele armazena eletricidade nas bochechas e solta raios enquanto voa.", categoria: "Curiosidade" },
  { id: 110, pokemon: "Chandelure", emoji: "👻", cor: "#9C27B0", curiosidade: "Chandelure queima a alma das pessoas com suas chamas hipnóticas! A alma fica presa vagando para sempre enquanto o corpo fica completamente vazio.", categoria: "Lore" },
  { id: 111, pokemon: "Haxorus", emoji: "🐉", cor: "#FFD700", curiosidade: "Os dentes de Haxorus são mais afiados do que qualquer espada e nunca ficam cegos! Ele pode cortar aço como se fosse papel.", categoria: "Curiosidade" },
  { id: 112, pokemon: "Cubchoo", emoji: "❄️", cor: "#4A90D9", curiosidade: "Cubchoo tem sempre o nariz escorrendo — e usa esse muco como arma congelante! Quando está saudável, o muco é abundante e brilhante.", categoria: "Curiosidade" },
  { id: 113, pokemon: "Cryogonal", emoji: "❄️", cor: "#4A90D9", curiosidade: "Cryogonal nasce de nuvens em altíssimas temperaturas negativas. Ele captura a presa com correntes feitas de cristais de gelo a menos de 100 graus!", categoria: "Lore" },
  { id: 114, pokemon: "Golett", emoji: "🤖", cor: "#4CAF50", curiosidade: "Golett é um robô feito de argila criado por uma civilização antiga! A energia misteriosa que o anima é desconhecida até hoje pelos cientistas Pokémon.", categoria: "História" },
  { id: 115, pokemon: "Bisharp", emoji: "⚔️", cor: "#FF4500", curiosidade: "Bisharp lidera um grupo de Pawniard que testa sua força constantemente. Se perder a batalha, perde o posto de líder imediatamente.", categoria: "Lore" },
  { id: 116, pokemon: "Bouffalant", emoji: "🐃", cor: "#FF8C00", curiosidade: "Bouffalant tem um afro tão denso que absorve qualquer impacto! Ele usa a cabeça como aríete e não sente absolutamente nada.", categoria: "Curiosidade" },
  { id: 117, pokemon: "Volcarona", emoji: "🔥", cor: "#FFD700", curiosidade: "Volcarona substituiu o sol quando cinzas vulcânicas cobriram o céu na antiguidade! Ele criou um mar de chamas para aquecer o mundo gelado.", categoria: "Lore" },
  { id: 118, pokemon: "Cobalion", emoji: "⚔️", cor: "#4A90D9", curiosidade: "Cobalion protegeu Pokémon de humanos cruéis no passado! Seu olhar de aço pode paralisar qualquer pessoa de medo instantaneamente.", categoria: "Lore" },
  { id: 119, pokemon: "Terrakion", emoji: "🏔️", cor: "#FF8C00", curiosidade: "Terrakion derrubou um castelo inteiro com uma carga! Ele usa a força bruta para proteger Pokémon mais fracos que não conseguem se defender.", categoria: "Lore" },
  { id: 120, pokemon: "Virizion", emoji: "🍃", cor: "#4CAF50", curiosidade: "Virizion se move tão rápido que parece invisível! Seus golpes são tão ágeis que confundem qualquer oponente antes que possam reagir.", categoria: "Lore" },
  { id: 121, pokemon: "Tornadus", emoji: "🌪️", cor: "#4CAF50", curiosidade: "Tornadus é o único Pokémon do tipo Voador puro! Ele viaja por Unova causando tempestades e tornados onde quer que passe.", categoria: "Tipo" },
  { id: 122, pokemon: "Thundurus", emoji: "⚡", cor: "#4A90D9", curiosidade: "Thundurus destrói campos e casas com os raios que dispara da cauda! Os agricultores de Unova temiam sua chegada mais que qualquer outra coisa.", categoria: "Lore" },
  { id: 123, pokemon: "Landorus", emoji: "🌾", cor: "#FF8C00", curiosidade: "Landorus é venerado como o deus da colheita! Onde ele passa, as plantações crescem abundantes. Ele veio para acalmar Tornadus e Thundurus.", categoria: "Lore" },
  { id: 124, pokemon: "Reshiram", emoji: "🔥", cor: "#FFD700", curiosidade: "Reshiram representa a verdade e queima com chamas tão quentes que podem mudar o clima do mundo! Ele escolhe o lado de quem busca a verdade.", categoria: "Lore" },
  { id: 125, pokemon: "Zekrom", emoji: "⚡", cor: "#1a1a2e", curiosidade: "Zekrom representa os ideais e gera eletricidade com a cauda giratória! Ele escolhe o lado de quem age pelos seus ideais, mesmo que sejam errados.", categoria: "Lore" },
  { id: 126, pokemon: "Kyurem", emoji: "❄️", cor: "#4A90D9", curiosidade: "Kyurem é o que sobrou depois que Reshiram e Zekrom se separaram de um mesmo dragão original! Ele está incompleto e congelado por dentro.", categoria: "Lore" },
  { id: 127, pokemon: "Keldeo", emoji: "🌊", cor: "#4A90D9", curiosidade: "Keldeo só acessa sua Forma Resoluta quando enfrenta um oponente mais forte com coragem! O chifre cresce quando ele aprende o Golpe Sagrado.", categoria: "Evolução" },
  { id: 128, pokemon: "Meloetta", emoji: "🎵", cor: "#FFD700", curiosidade: "A melodia de Meloetta tem o poder de mudar as emoções de todos que ouvem! Ela perdeu a música uma vez e todas as plantas do mundo murcharam.", categoria: "Lore" },
  { id: 129, pokemon: "Genesect", emoji: "🤖", cor: "#FF4500", curiosidade: "Genesect existiu há 300 milhões de anos e foi modificado pelo Team Plasma! O canhão nas costas foi adicionado artificialmente para torná-lo uma arma.", categoria: "História" },
  { id: 130, pokemon: "Chespin", emoji: "🌰", cor: "#4CAF50", curiosidade: "O espinho de Chespin é tão duro que consegue perfurar pedras! Quando ele endurece a cobertura da cabeça, fica praticamente invulnerável.", categoria: "Curiosidade" },
  { id: 131, pokemon: "Fennekin", emoji: "🔥", cor: "#FF8C00", curiosidade: "Fennekin expele ar quente a mais de 200 graus pelas orelhas! Ele come gravetos para alimentar a chama interna do seu corpo.", categoria: "Curiosidade" },
  { id: 132, pokemon: "Froakie", emoji: "🌊", cor: "#4A90D9", curiosidade: "A espuma no pescoço de Froakie amortece impactos e protege o corpo! Ele a usa como arma lançando bolinhas de espuma cortantes nos inimigos.", categoria: "Curiosidade" },
  { id: 133, pokemon: "Sylveon", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Sylveon usa as fitas para envolver o braço do treinador enquanto caminham! As fitas emitem uma aura que acalma qualquer agressividade ao redor.", categoria: "Curiosidade" },
  { id: 134, pokemon: "Hawlucha", emoji: "🦅", cor: "#4CAF50", curiosidade: "Hawlucha é um lutador profissional de luta livre! Ele usa movimentos acrobáticos que aprendeu observando lutas humanas. É o campeão não oficial das montanhas.", categoria: "Lore" },
  { id: 135, pokemon: "Goodra", emoji: "🐉", cor: "#9C27B0", curiosidade: "Goodra é o dragão mais carinhoso de todos! Ele adora abraçar o treinador, mas o muco pegajoso do corpo deixa todos encharcados depois.", categoria: "Curiosidade" },
  { id: 136, pokemon: "Klefki", emoji: "🔑", cor: "#FFD700", curiosidade: "Klefki coleciona chaves obsessivamente e nunca devolve! Ele cuida das chaves como se fossem tesouros e fica inconsolável se perder alguma.", categoria: "Curiosidade" },
  { id: 137, pokemon: "Phantump", emoji: "👻", cor: "#4CAF50", curiosidade: "Phantump é o espírito de uma criança que se perdeu na floresta e morreu! O espírito habitou um toco de árvore e criou aquele corpo assustador.", categoria: "Lore" },
  { id: 138, pokemon: "Noivern", emoji: "🦇", cor: "#9C27B0", curiosidade: "Noivern usa as orelhas em forma de corneta para lançar ondas de som tão poderosas que podem destruir pedras enormes! Ele enxerga perfeitamente no escuro.", categoria: "Curiosidade" },
  { id: 139, pokemon: "Xerneas", emoji: "🦌", cor: "#4A90D9", curiosidade: "Xerneas pode dar vida eterna! Quando seus chifres brilham nas sete cores, ele compartilha energia com todos ao redor. Quando quer descansar, vira uma árvore por 1000 anos.", categoria: "Lore" },
  { id: 140, pokemon: "Yveltal", emoji: "🦅", cor: "#FF4500", curiosidade: "Quando Yveltal expande as asas, absorve a energia vital de todos os seres vivos ao redor! Quando morre, vira um casulo por 1000 anos.", categoria: "Lore" },
  { id: 141, pokemon: "Zygarde", emoji: "🐍", cor: "#4CAF50", curiosidade: "Zygarde existe em várias formas dependendo de quantas células se unem. Com 100% das células, ele é mais poderoso que Xerneas e Yveltal juntos!", categoria: "Evolução" },
  { id: 142, pokemon: "Diancie", emoji: "💎", cor: "#FF6B9D", curiosidade: "Diancie cria diamantes do nada comprimindo ar com as mãos! Ela é uma mutação rara de Carbink e a princesa de um reino subterrâneo.", categoria: "Lore" },
  { id: 143, pokemon: "Hoopa", emoji: "🔮", cor: "#9C27B0", curiosidade: "Hoopa pode transportar qualquer coisa através dos seus aros mágicos — até lendários! Já roubou tesouros de todo o mundo usando esse poder.", categoria: "Curiosidade" },
  { id: 144, pokemon: "Volcanion", emoji: "🔥", cor: "#FF4500", curiosidade: "Volcanion expele vapor tão poderoso que pode arrancar o topo de montanhas! Ele odeia humanos e vive isolado em áreas vulcânicas inacessíveis.", categoria: "Lore" },
  { id: 145, pokemon: "Rowlet", emoji: "🦉", cor: "#4CAF50", curiosidade: "Rowlet pode girar a cabeça 180 graus! Ele armazena energia durante o dia com fotossíntese e caça silenciosamente à noite sem fazer nenhum barulho.", categoria: "Curiosidade" },
  { id: 146, pokemon: "Litten", emoji: "🔥", cor: "#FF4500", curiosidade: "Litten não demonstra emoções para não parecer fraco! Ele lambe o pelo regularmente e quando tem muita gordura no estômago, cospe bolas de fogo.", categoria: "Curiosidade" },
  { id: 147, pokemon: "Popplio", emoji: "🌊", cor: "#4A90D9", curiosidade: "Popplio faz bolhas de água com o nariz e usa para pular e fazer acrobacias! Quanto mais treina, maiores e mais resistentes ficam as bolhas.", categoria: "Curiosidade" },
  { id: 148, pokemon: "Wishiwashi", emoji: "🐟", cor: "#4A90D9", curiosidade: "Sozinho, Wishiwashi é o Pokémon mais fraco de todos! Mas quando muitos se juntam formam um cardume tão enorme e assustador que predadores fogem.", categoria: "Evolução" },
  { id: 149, pokemon: "Mimikyu", emoji: "👻", cor: "#FFD700", curiosidade: "Mimikyu usa uma fantasia de Pikachu porque quer ser amado como ele! O que está dentro da fantasia é um mistério — diz-se que ver o corpo verdadeiro causa doenças.", categoria: "Lore" },
  { id: 150, pokemon: "Kommo-o", emoji: "🐉", cor: "#FFD700", curiosidade: "Kommo-o chacoalha as escamas para criar uma música intimidadora! As escamas caem em batalha e o Pokémon que coletá-las pode usá-las como amuleto.", categoria: "Lore" },
  { id: 151, pokemon: "Tapu Koko", emoji: "⚡", cor: "#FFD700", curiosidade: "Tapu Koko é o guardião de Melemele e protege seus habitantes, mas é tão curioso e impulsivo que às vezes causa mais problemas do que resolve!", categoria: "Lore" },
  { id: 152, pokemon: "Cosmog", emoji: "⭐", cor: "#9C27B0", curiosidade: "Cosmog é formado pela matéria das estrelas! Ele absorve luz e cresce lentamente. É considerado o bebê dos ultraespaços.", categoria: "Lore" },
  { id: 153, pokemon: "Solgaleo", emoji: "☀️", cor: "#FFD700", curiosidade: "Solgaleo come estrelas para se alimentar! Seu corpo absorve toda a luz ao redor e abre portais para dimensões paralelas. É chamado de O Sol que Devora o Céu.", categoria: "Lore" },
  { id: 154, pokemon: "Lunala", emoji: "🌙", cor: "#9C27B0", curiosidade: "Lunala absorve a luz e cria escuridão absoluta ao redor! Ela abre portais entre dimensões com as asas e é chamada de A Lua que Convoca a Noite.", categoria: "Lore" },
  { id: 155, pokemon: "Necrozma", emoji: "💎", cor: "#1a1a2e", curiosidade: "Necrozma é um ser de luz pura que foi partido em pedaços e ficou com dor constante! Por isso absorve a luz de outros — incluindo Solgaleo e Lunala.", categoria: "Lore" },
  { id: 156, pokemon: "Marshadow", emoji: "👻", cor: "#1a1a2e", curiosidade: "Marshadow se esconde na sombra das pessoas e copia seus movimentos! Quando ele toma a sombra de alguém, essa pessoa fica sem energia e letárgica.", categoria: "Lore" },
  { id: 157, pokemon: "Grookey", emoji: "🍃", cor: "#4CAF50", curiosidade: "O galho que Grookey carrega foi roubado do grupo! Quando ele bate o galho no chão, plantas mortas voltam à vida e florescem instantaneamente.", categoria: "Curiosidade" },
  { id: 158, pokemon: "Scorbunny", emoji: "🔥", cor: "#FF4500", curiosidade: "Scorbunny tem um curativo no nariz que esconde uma chama! Quanto mais ele corre, mais quente o corpo fica e mais forte o fogo nos pés se torna.", categoria: "Curiosidade" },
  { id: 159, pokemon: "Sobble", emoji: "🌊", cor: "#4A90D9", curiosidade: "As lágrimas de Sobble são tão poderosas quanto 100 cebolas! Se ele chora perto de outras pessoas, todo mundo começa a chorar junto sem conseguir parar.", categoria: "Curiosidade" },
  { id: 160, pokemon: "Corviknight", emoji: "🦅", cor: "#8B7355", curiosidade: "Corviknight trabalha como táxi voador em Galar! Ele transporta pessoas entre cidades nas costas. Seu metal é tão resistente que nenhum golpe consegue arranhá-lo.", categoria: "História" },
  { id: 161, pokemon: "Wooloo", emoji: "🐑", cor: "#FFD700", curiosidade: "A lã de Wooloo é tão macia que é usada para fazer os melhores cobertores de Galar! Ela volta ao tamanho original depois de tosada em apenas 3 dias.", categoria: "Curiosidade" },
  { id: 162, pokemon: "Drednaw", emoji: "🐢", cor: "#4CAF50", curiosidade: "Drednaw morde pedras e ferro com facilidade! Ele tem mandíbulas tão fortes que conseguem triturar o que qualquer outro Pokémon não conseguiria.", categoria: "Curiosidade" },
  { id: 163, pokemon: "Cramorant", emoji: "🦅", cor: "#4A90D9", curiosidade: "Cramorant engole peixes inteiros durante a pesca e às vezes engole coisas acidentalmente! Quando é atingido, cospe o que comeu no atacante.", categoria: "Curiosidade" },
  { id: 164, pokemon: "Toxtricity", emoji: "⚡", cor: "#9C27B0", curiosidade: "Toxtricity toca música no próprio peito como se fosse uma guitarra! As toxinas no corpo vibram e criam sons elétricos parecidos com heavy metal.", categoria: "Curiosidade" },
  { id: 165, pokemon: "Sinistea", emoji: "👻", cor: "#8B7355", curiosidade: "Sinistea é o fantasma de uma pessoa que morreu bebendo uma xícara de chá envenenada! Ele habita a xícara e tenta fazer as pessoas beberem seu corpo.", categoria: "Lore" },
  { id: 166, pokemon: "Impidimp", emoji: "👻", cor: "#9C27B0", curiosidade: "Impidimp se alimenta da frustração e raiva das pessoas! Ele se intromete em situações para irritar e provocar as pessoas e absorve a energia negativa.", categoria: "Curiosidade" },
  { id: 167, pokemon: "Falinks", emoji: "⚔️", cor: "#FF8C00", curiosidade: "Falinks é formado por seis pequenos Pokémon que formam uma falange romana! O líder na frente dá ordens e os cinco de trás executam perfeitamente.", categoria: "Curiosidade" },
  { id: 168, pokemon: "Stonjourner", emoji: "🏔️", cor: "#8B7355", curiosidade: "Uma vez por ano, Stonjourner viaja longas distâncias para se reunir com outros da espécie num campo! Ninguém sabe por quê — é um mistério total.", categoria: "Lore" },
  { id: 169, pokemon: "Eiscue", emoji: "❄️", cor: "#4A90D9", curiosidade: "Eiscue tem a cabeça coberta por um bloco de gelo que o protege! Quando o gelo derrete num lugar quente, a cabeça verdadeira aparece com um penteado afro engraçado.", categoria: "Curiosidade" },
  { id: 170, pokemon: "Indeedee", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Indeedee antecipa as necessidades das pessoas antes que elas peçam! Ele serve como assistente perfeito e registra memórias emocionais nos chifres da cabeça.", categoria: "Curiosidade" },
  { id: 171, pokemon: "Dracovish", emoji: "🦕", cor: "#4A90D9", curiosidade: "Dracovish é um fóssil montado errado — cabeça de um Pokémon com corpo de outro! Por ser montado incorretamente, respira pela boca e sofre muito.", categoria: "História" },
  { id: 172, pokemon: "Zacian", emoji: "⚔️", cor: "#4A90D9", curiosidade: "Zacian carrega uma espada na boca que não enferruja nunca! Ela corta qualquer coisa com um único golpe. Junto com Zamazenta, derrotou Eternatus há milênios.", categoria: "Lore" },
  { id: 173, pokemon: "Zamazenta", emoji: "🛡️", cor: "#FF4500", curiosidade: "Zamazenta usa um escudo mágico que pode resistir a qualquer ataque! Os escudos se tornaram parte do corpo ao longo do tempo de tanto lutar pelo mundo.", categoria: "Lore" },
  { id: 174, pokemon: "Zarude", emoji: "🍃", cor: "#4CAF50", curiosidade: "Zarude é agressivo com estranhos mas criou um bebê humano na floresta! Ele o protegeu como se fosse filho, mostrando um lado gentil escondido.", categoria: "Lore" },
  { id: 175, pokemon: "Regieleki", emoji: "⚡", cor: "#FFD700", curiosidade: "Regieleki é o Pokémon mais rápido já criado, com 200 de velocidade! Ele é feito de eletricidade pura e pode energizar cidades inteiras.", categoria: "Curiosidade" },
  { id: 176, pokemon: "Regidrago", emoji: "🐉", cor: "#FF4500", curiosidade: "Regidrago foi criado com o coração de um dragão ancestral! Seu corpo imita o formato de uma cabeça de dragão e ele pode aprender qualquer golpe de dragão.", categoria: "Lore" },
  { id: 177, pokemon: "Glastrier", emoji: "❄️", cor: "#4A90D9", curiosidade: "Glastrier é tão territorial e agressivo que nenhum Pokémon se atreve a chegar perto! Suas patas de gelo são mais duras que qualquer aço.", categoria: "Curiosidade" },
  { id: 178, pokemon: "Spectrier", emoji: "🌙", cor: "#9C27B0", curiosidade: "Spectrier galopa pelo mundo à noite absorvendo a energia vital dos seres que dorme! Onde ele passa, um silêncio absoluto e frio toma conta do lugar.", categoria: "Lore" },
  { id: 179, pokemon: "Calyrex", emoji: "👑", cor: "#4CAF50", curiosidade: "Calyrex foi rei de Galar no passado e controlava as colheitas! Com o tempo foi esquecido e perdeu os poderes — mas ainda carrega a dignidade de um rei.", categoria: "Lore" },
  { id: 180, pokemon: "Wyrdeer", emoji: "🦌", cor: "#FFD700", curiosidade: "Wyrdeer é venerado em Hisui como um ser sagrado! Os pelos brancos do pescoço emitem ondas psíquicas que orientam viajantes perdidos na neve.", categoria: "Lore" },
  { id: 181, pokemon: "Basculegion", emoji: "🌊", cor: "#8B7355", curiosidade: "Basculegion é habitado pelas almas de Basculin que morreram durante a migração! As almas lhe dão força e ele carrega pessoas pelas águas de Hisui.", categoria: "Lore" },
  { id: 182, pokemon: "Sneasler", emoji: "🏔️", cor: "#9C27B0", curiosidade: "Sneasler é extraordinariamente ágil nas montanhas e carrega pessoas nas costas! O veneno nas garras paralisa instantaneamente qualquer oponente.", categoria: "Curiosidade" },
  { id: 183, pokemon: "Overqwil", emoji: "🌊", cor: "#9C27B0", curiosidade: "Overqwil acumula veneno no corpo até o ponto em que os espinhos explodem! Um único espinho contém veneno suficiente para paralisar qualquer Pokémon.", categoria: "Curiosidade" },
  { id: 184, pokemon: "Enamorus", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Enamorus traz a primavera a Hisui depois do inverno rigoroso! Ela é a quarta força da natureza, junto com Tornadus, Thundurus e Landorus.", categoria: "Lore" },
  { id: 185, pokemon: "Sprigatito", emoji: "🍃", cor: "#4CAF50", curiosidade: "Sprigatito libera um pólen aromático que hipnotiza quem cheira! Quando está nervoso, o cheiro fica mais intenso e a fotossíntese acelera.", categoria: "Curiosidade" },
  { id: 186, pokemon: "Fuecoco", emoji: "🔥", cor: "#FF4500", curiosidade: "Fuecoco absorve calor pelo corpo todo e converte em energia de fogo! Quando come muita comida quente, as chamas na cabeça ficam grandes e descontroladas.", categoria: "Curiosidade" },
  { id: 187, pokemon: "Quaxly", emoji: "🌊", cor: "#4A90D9", curiosidade: "Quaxly sempre mantém o topete penteado e fica extremamente chateado quando fica bagunçado! O gel natural do cabelo repele água e sujeira.", categoria: "Curiosidade" },
  { id: 188, pokemon: "Lechonk", emoji: "🐷", cor: "#FF8C00", curiosidade: "Lechonk come apenas ervas aromáticas e flores! Por isso, apesar do nome, ele cheira muito bem. Seu corpo é quase todo músculo, não gordura!", categoria: "Curiosidade" },
  { id: 189, pokemon: "Smoliv", emoji: "🫒", cor: "#4CAF50", curiosidade: "Smoliv armazena azeite de oliva no fruto da cabeça! Quando assustado, lança um jato de azeite amargo no oponente e foge enquanto ele pisca.", categoria: "Curiosidade" },
  { id: 190, pokemon: "Pawmi", emoji: "⚡", cor: "#FFD700", curiosidade: "Pawmi gera eletricidade esfregando as bochechas com as patas! As almofadas nas patas funcionam como descarregadores elétricos em batalha.", categoria: "Curiosidade" },
  { id: 191, pokemon: "Makuhita", emoji: "🥊", cor: "#FF8C00", curiosidade: "Makuhita treina todos os dias sem parar até cair de exaustão! Cada derrota o torna mais forte e determinado. Ele nunca desiste de uma luta.", categoria: "Curiosidade" },
  { id: 192, pokemon: "Hariyama", emoji: "🥊", cor: "#FF8C00", curiosidade: "Hariyama pode parar um caminhão em movimento com as palmas das mãos! Seu corpo parece gordo mas é quase completamente músculo.", categoria: "Curiosidade" },
  { id: 193, pokemon: "Nosepass", emoji: "🧭", cor: "#8B7355", curiosidade: "O nariz de Nosepass aponta sempre para o norte como uma bússola magnética! Dois Nosepass nunca podem se aproximar — os narizes se repelem magneticamente.", categoria: "Curiosidade" },
  { id: 194, pokemon: "Skitty", emoji: "🌸", cor: "#FFB6C1", curiosidade: "Skitty persegue qualquer coisa que se mova — inclusive a própria cauda! Ele fica girando em círculos até cair tonto de tanto tentar pegar.", categoria: "Curiosidade" },
  { id: 195, pokemon: "Mawile", emoji: "⚔️", cor: "#FFD700", curiosidade: "A mandíbula enorme atrás da cabeça de Mawile não tem nervos, então ela morde com toda a força sem sentir nada! É um truque de caça perfeito.", categoria: "Curiosidade" },
  { id: 196, pokemon: "Aron", emoji: "🏔️", cor: "#8B7355", curiosidade: "Aron come ferro e aço para construir sua armadura! Ele devora trilhos de trem inteiros e já causou vários acidentes ferroviários.", categoria: "Curiosidade" },
  { id: 197, pokemon: "Electrike", emoji: "⚡", cor: "#FFD700", curiosidade: "Electrike acumula eletricidade no pelo e a libera durante a corrida! Em dias secos, faíscas aparecem constantemente em volta do corpo.", categoria: "Curiosidade" },
  { id: 198, pokemon: "Plusle", emoji: "⚡", cor: "#FF4500", curiosidade: "Plusle sempre encoraja os aliados enviando faíscas! Quando um amigo perde, ele chora lágrimas de faísca até ficar sem energia elétrica.", categoria: "Curiosidade" },
  { id: 199, pokemon: "Minun", emoji: "⚡", cor: "#4A90D9", curiosidade: "Minun se preocupa mais com o time do que consigo mesmo! Ele gasta toda sua eletricidade animando os aliados e nunca guarda nada para si.", categoria: "Curiosidade" },
  { id: 200, pokemon: "Volbeat", emoji: "⚡", cor: "#FFD700", curiosidade: "Volbeat usa a luz da cauda para escrever mensagens no céu à noite! Cada grupo tem um padrão de luz diferente como código secreto.", categoria: "Curiosidade" },
  { id: 201, pokemon: "Illumise", emoji: "🌸", cor: "#9C27B0", curiosidade: "Illumise usa Volbeat para fazer apresentações de luz no céu! Ela é a diretora criativa das performances e recebe toda a atenção da plateia.", categoria: "Lore" },
  { id: 202, pokemon: "Roselia", emoji: "🌸", cor: "#4CAF50", curiosidade: "As flores de Roselia liberam aromas diferentes dependendo do estado de saúde! Quando está saudável, cheira maravilhosamente. Quando está doente, o cheiro é horrível.", categoria: "Curiosidade" },
  { id: 203, pokemon: "Gulpin", emoji: "☠️", cor: "#4CAF50", curiosidade: "O estômago de Gulpin ocupa quase todo o corpo! Ele pode digerir qualquer coisa que caiba na boca, inclusive venenos e ácidos corrosivos.", categoria: "Curiosidade" },
  { id: 204, pokemon: "Carvanha", emoji: "🦈", cor: "#FF4500", curiosidade: "Carvanha é tão agressivo que afunda barcos de pesca em grupo! Individualmente é covarde, mas em cardumes fica imparável e ataca qualquer coisa.", categoria: "Lore" },
  { id: 205, pokemon: "Wailord", emoji: "🐋", cor: "#4A90D9", curiosidade: "Wailord é o maior Pokémon em tamanho: 14,5 metros! Curiosamente, ele pesa menos que Gastly por ter densidade muito baixa — é tipo uma baleia inflável.", categoria: "Curiosidade" },
  { id: 206, pokemon: "Numel", emoji: "🔥", cor: "#FF8C00", curiosidade: "Numel carrega magma dentro da corcova! Quando a corcova esfria, o magma endurece e ele fica lento. A chuva o incomoda muito por resfriar o magma interno.", categoria: "Curiosidade" },
  { id: 207, pokemon: "Spoink", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Spoink usa a cauda como mola para pular eternamente! Se parar de pular, o coração para de bater. Ele não consegue dormir parado — pula até dormindo!", categoria: "Curiosidade" },
  { id: 208, pokemon: "Spinda", emoji: "🐼", cor: "#FF6B9D", curiosidade: "Cada Spinda tem um padrão de manchas único — como uma impressão digital! Nenhum Spinda no mundo é igual ao outro. São bilhões de combinações possíveis.", categoria: "Curiosidade" },
  { id: 209, pokemon: "Trapinch", emoji: "🏜️", cor: "#FF8C00", curiosidade: "Trapinch faz armadilhas em forma de funil na areia! Qualquer coisa que cai dentro não consegue sair. Ele fica dias sem comer esperando pacientemente.", categoria: "Curiosidade" },
  { id: 210, pokemon: "Cacnea", emoji: "🌵", cor: "#4CAF50", curiosidade: "Cacnea floresce uma vez por ano e o aroma atrai Pokémon da região inteira! Paradoxalmente, os espinhos ao redor machucam quem tenta chegar perto.", categoria: "Curiosidade" },
  { id: 211, pokemon: "Swablu", emoji: "☁️", cor: "#4A90D9", curiosidade: "Swablu tem asas macias como algodão e gosta de pousar na cabeça das pessoas! Ele limpa coisas sujas com as asas como se fossem panos de polir.", categoria: "Curiosidade" },
  { id: 212, pokemon: "Zangoose", emoji: "⚔️", cor: "#FF4500", curiosidade: "Zangoose e Seviper são inimigos mortais há gerações! Eles lutam instintivamente sempre que se encontram. Nenhum dos dois sabe por que a rivalidade começou.", categoria: "Lore" },
  { id: 213, pokemon: "Seviper", emoji: "☠️", cor: "#9C27B0", curiosidade: "Seviper afia a cauda venenosa em pedras o tempo todo! Ele guarda rancor de Zangoose para sempre e nunca esquece quem o machucou.", categoria: "Lore" },
  { id: 214, pokemon: "Lunatone", emoji: "🌙", cor: "#4A90D9", curiosidade: "Lunatone foi encontrado num cratéra de meteorito! Ele ficou mais forte na lua cheia e hipnotiza a presa com os olhos vermelhos brilhantes.", categoria: "Lore" },
  { id: 215, pokemon: "Solrock", emoji: "☀️", cor: "#FFD700", curiosidade: "Solrock absorve energia solar para viver! Ele não precisa de comida — só de luz. À noite, brilha com a energia acumulada durante o dia.", categoria: "Curiosidade" },
  { id: 216, pokemon: "Baltoy", emoji: "🏺", cor: "#FF8C00", curiosidade: "Baltoy foi descoberto em ruínas antigas junto com pinturas de 10.000 anos! Não se sabe se ele sempre existiu ou foi criado por uma civilização perdida.", categoria: "História" },
  { id: 217, pokemon: "Lileep", emoji: "🌊", cor: "#9C27B0", curiosidade: "Lileep foi restaurado de um fóssil de 100 milhões de anos! Ele ficava fixo no fundo do mar e usava os tentáculos para atrair e capturar presas.", categoria: "História" },
  { id: 218, pokemon: "Anorith", emoji: "🦀", cor: "#FF8C00", curiosidade: "Anorith nadava nos oceanos primitivos há 300 milhões de anos! Com os oito pernas, era um dos predadores mais eficientes da era pré-histórica.", categoria: "História" },
  { id: 219, pokemon: "Feebas", emoji: "🐟", cor: "#4A90D9", curiosidade: "Feebas é feio e fraco mas evolui para o lindo Milotic! A evolução exige máxima beleza ou grande amizade — é uma metáfora perfeita sobre não julgar pela aparência.", categoria: "Evolução" },
  { id: 220, pokemon: "Milotic", emoji: "🌊", cor: "#4A90D9", curiosidade: "Milotic é considerado o Pokémon mais belo de todos! Sua presença acalma guerras e conflitos. Artistas de todo o mundo o pintam como símbolo de paz.", categoria: "Lore" },
  { id: 221, pokemon: "Kecleon", emoji: "🦎", cor: "#4CAF50", curiosidade: "Kecleon muda de cor para se camuflar perfeitamente, mas a listra vermelha no barriga nunca muda! É sempre pelo essa listra que as pessoas o encontram.", categoria: "Curiosidade" },
  { id: 222, pokemon: "Shuppet", emoji: "👻", cor: "#9C27B0", curiosidade: "Shuppet se alimenta de sentimentos negativos como raiva, rancor e ciúme! Ele aparece mais em casas onde as pessoas estão tristes ou com raiva.", categoria: "Lore" },
  { id: 223, pokemon: "Duskull", emoji: "💀", cor: "#9C27B0", curiosidade: "Duskull atravessa paredes e persegue crianças desobedientes! Diz-se nas lendas que ele leva embora quem não dorme na hora certa.", categoria: "Lore" },
  { id: 224, pokemon: "Tropius", emoji: "🍃", cor: "#4CAF50", curiosidade: "Tropius tem frutas crescendo no pescoço que amadurecem duas vezes por ano! As crianças da região adoram pegar as frutas diretamente do pescoço dele.", categoria: "Curiosidade" },
  { id: 225, pokemon: "Chimecho", emoji: "🎵", cor: "#4A90D9", curiosidade: "Chimecho usa sons do corpo para atacar e se comunicar! Na antiguidade, era considerado um mensageiro dos espíritos pelos povos do Leste.", categoria: "História" },
  { id: 226, pokemon: "Wynaut", emoji: "🌀", cor: "#4A90D9", curiosidade: "Wynaut sempre sorri — mesmo quando está com raiva! Ele aguça os sentimentos negativos pressionando o corpo contra os rivais.", categoria: "Curiosidade" },
  { id: 227, pokemon: "Snorunt", emoji: "❄️", cor: "#4A90D9", curiosidade: "Se uma família acolhe Snorunt em casa, diz-se que ela terá prosperidade por gerações! Ele adora ambientes frios e come gelo e neve constantemente.", categoria: "Lore" },
  { id: 228, pokemon: "Spheal", emoji: "❄️", cor: "#4A90D9", curiosidade: "Spheal rola para se movimentar porque é mais rápido do que andar! Quando está feliz, bate palma com as nadadeiras e faz muito barulho.", categoria: "Curiosidade" },
  { id: 229, pokemon: "Relicanth", emoji: "🌊", cor: "#8B7355", curiosidade: "Relicanth existe há 100 milhões de anos sem mudar nada! Ele sobreviveu a extinções em massa e é considerado um fóssil vivo pelos cientistas.", categoria: "História" },
  { id: 230, pokemon: "Luvdisc", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Casais que encontram Luvdisc juntos ficam felizes para sempre! Ele nada em pares de casais e guia barcos perdidos com sua bioluminescência rosada.", categoria: "Lore" },
  { id: 231, pokemon: "Bagon", emoji: "🐉", cor: "#4A90D9", curiosidade: "Bagon sonha tanto em voar que pula de falésias constantemente! Com o tempo, o crânio ficou duro de tanto bater. Eventualmente, esse desejo cria asas.", categoria: "Evolução" },
  { id: 232, pokemon: "Beldum", emoji: "🤖", cor: "#8B7355", curiosidade: "Beldum não tem boca nem órgãos internos! Ele é um robô puro controlado por eletricidade magnética. Dois Beldum se fundem para criar Metang.", categoria: "Curiosidade" },
  { id: 233, pokemon: "Tropius", emoji: "🍃", cor: "#4CAF50", curiosidade: "Tropius aprendeu a voar graças às folhas enormes nas costas! As folhas batem tão rápido que levantam o corpo pesado do chão.", categoria: "Curiosidade" },
  { id: 234, pokemon: "Latias", emoji: "🐉", cor: "#FF4500", curiosidade: "Latias pode ler a mente humana e se comunicar por telepatia! Ela assume a forma de uma menina para se aproximar das pessoas sem assustar.", categoria: "Lore" },
  { id: 235, pokemon: "Latios", emoji: "🐉", cor: "#4A90D9", curiosidade: "Latios voa mais rápido que um jato dobrando o corpo para reduzir o atrito! Ele pode mostrar imagens mentais para pessoas de confiança.", categoria: "Curiosidade" },
  { id: 236, pokemon: "Tropius", emoji: "🍃", cor: "#4CAF50", curiosidade: "A lenda diz que Tropius começou a dar frutas depois de comer muitas frutas tropicais ao longo dos séculos!", categoria: "Lore" },
  { id: 237, pokemon: "Surskit", emoji: "🌊", cor: "#4A90D9", curiosidade: "Surskit patina sobre a água usando uma secreção oleosa das patas! Ele atrai presas liberando um líquido doce parecido com mel.", categoria: "Curiosidade" },
  { id: 238, pokemon: "Slakoth", emoji: "😴", cor: "#8B7355", curiosidade: "Slakoth dorme 20 horas por dia e não se move quando acorda! Ele come folhas que crescem ao redor sem nem se levantar.", categoria: "Curiosidade" },
  { id: 239, pokemon: "Vigoroth", emoji: "🐒", cor: "#FF4500", curiosidade: "Vigoroth não consegue parar de se mexer! Se ficar parado por muito tempo, fica ansioso e enlouquece. Ele é o extremo oposto de Slakoth.", categoria: "Curiosidade" },
  { id: 240, pokemon: "Slaking", emoji: "😴", cor: "#8B7355", curiosidade: "Slaking tem os maiores status base de qualquer Pokémon não lendário! Mas a habilidade Preguiça faz ele pular um turno sim, um não. Pura preguiça.", categoria: "Curiosidade" },
  { id: 241, pokemon: "Nincada", emoji: "🐛", cor: "#4CAF50", curiosidade: "Nincada passa anos debaixo da terra absorvendo nutrientes pelas raízes! Seus olhos atrofiaram por ficar tanto tempo no escuro.", categoria: "Evolução" },
  { id: 242, pokemon: "Ninjask", emoji: "🐝", cor: "#FFD700", curiosidade: "Ninjask é tão rápido que fica invisível a olho nu! Ele cria um som de tão alta frequência que irrita qualquer pessoa ao redor.", categoria: "Curiosidade" },
  { id: 243, pokemon: "Shedinja", emoji: "👻", cor: "#8B7355", curiosidade: "Shedinja é a casca vazia que Nincada deixa ao evoluir — e ganhou vida! Olhar pelo buraco nas costas rouba a alma imediatamente. Ele só tem 1 HP para sempre.", categoria: "Tipo" },
  { id: 244, pokemon: "Loudred", emoji: "🔊", cor: "#9C27B0", curiosidade: "Os gritos de Loudred são tão altos que podem destruir casas! Ele grita para atacar e o som sai pelas orelhas em forma de tubos que vibram violentamente.", categoria: "Curiosidade" },
  { id: 245, pokemon: "Makuhita", emoji: "🥊", cor: "#FF8C00", curiosidade: "Makuhita busca os oponentes mais fortes do mundo para treinar! Cada derrota o motiva ainda mais a continuar treinando.", categoria: "Lore" },
  { id: 246, pokemon: "Natu", emoji: "🐦", cor: "#4CAF50", curiosidade: "Natu não consegue voar porque as asas ainda não cresceram! Para subir em árvores, ele pula usando as pernas. Seus olhos podem ver o futuro.", categoria: "Curiosidade" },
  { id: 247, pokemon: "Xatu", emoji: "🐦", cor: "#4CAF50", curiosidade: "Xatu fica parado olhando o sol o dia todo! Diz-se que ele pode ver simultaneamente o passado e o futuro — mas fica paralisado de medo do que vê.", categoria: "Lore" },
  { id: 248, pokemon: "Mareep", emoji: "⚡", cor: "#FFD700", curiosidade: "A lã de Mareep armazena eletricidade estática! Quanto mais ele se move, mais eletricidade acumula. A lã dobra de tamanho quando está totalmente carregado.", categoria: "Curiosidade" },
  { id: 249, pokemon: "Sudowoodo", emoji: "🌳", cor: "#8B7355", curiosidade: "Sudowoodo é do tipo Pedra mas finge ser uma árvore! Ele odeia água — se molhar, a camuflagem falha. Por isso evita chuvas a todo custo.", categoria: "Tipo" },
  { id: 250, pokemon: "Politoed", emoji: "🐸", cor: "#4CAF50", curiosidade: "Politoed se torna chefe automaticamente de todos os Poliwag e Poliwhirl da região! O canto dele em noites quentes atrai outros anfíbios de longe.", categoria: "Lore" },
  { id: 251, pokemon: "Hoppip", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Hoppip pesa tão pouco que ventos fortes o arrastam! Ele se agarra às grama com as raízes para não voar em tempestades.", categoria: "Curiosidade" },
  { id: 252, pokemon: "Aipom", emoji: "🐒", cor: "#9C27B0", curiosidade: "Aipom usa a cauda como mão principal! A cauda é tão habilidosa que ele mal usa as mãos para qualquer coisa. Escala árvores com velocidade incrível.", categoria: "Curiosidade" },
  { id: 253, pokemon: "Sunkern", emoji: "🌻", cor: "#FFD700", curiosidade: "Sunkern tem os menores status base de todos os Pokémon! Para sobreviver, ele não come nada além do orvalho da manhã.", categoria: "Curiosidade" },
  { id: 254, pokemon: "Wooper", emoji: "🌊", cor: "#4A90D9", curiosidade: "Wooper vive na água mas caminha em terra à noite para se aquecer! Quando faz isso, produz uma gosma venenosa para proteger o corpo do frio.", categoria: "Curiosidade" },
  { id: 255, pokemon: "Girafarig", emoji: "🦒", cor: "#FFD700", curiosidade: "A cauda de Girafarig tem um cérebro próprio pequenino! Esse segundo cérebro reage a estímulos e pode morder quem se aproxima por trás sem aviso.", categoria: "Curiosidade" },
  { id: 256, pokemon: "Forretress", emoji: "🛡️", cor: "#8B7355", curiosidade: "Ninguém nunca viu o interior de Forretress! Ele vive completamente escondido na casca de aço. Explode com fragmentos quando ameaçado.", categoria: "Lore" },
  { id: 257, pokemon: "Dunsparce", emoji: "🐍", cor: "#FFD700", curiosidade: "Dunsparce cava buracos com a cauda em espiral e vive no subsolo! Ele é tão raro de encontrar que virou lenda. As pessoas mal acreditam que existe.", categoria: "Lore" },
  { id: 258, pokemon: "Gligar", emoji: "🦂", cor: "#FF8C00", curiosidade: "Gligar planeja de árvore em árvore e agarra a presa pelo rosto com as garras! O ferrão da cauda é venenoso mas raramente causa danos graves.", categoria: "Curiosidade" },
  { id: 259, pokemon: "Qwilfish", emoji: "🐡", cor: "#1a1a2e", curiosidade: "Qwilfish absorve água para inflar e atirar espinhos venenosos em alta velocidade! Um único espinho tem veneno suficiente para nocautear humanos.", categoria: "Curiosidade" },
  { id: 260, pokemon: "Shuckle", emoji: "🐢", cor: "#FF4500", curiosidade: "Shuckle tem a maior defesa de todos os Pokémon! O suco dentro da casca fermentado por anos torna-se o líquido mais nutritivo do mundo Pokémon.", categoria: "Curiosidade" },
  { id: 261, pokemon: "Snubbull", emoji: "🐶", cor: "#FF6B9D", curiosidade: "Snubbull parece assustador mas é covarde! Pokémon menores fogem dele pela aparência, o que deixa Snubbull solitário e triste.", categoria: "Lore" },
  { id: 262, pokemon: "Corsola", emoji: "🌊", cor: "#FF6B9D", curiosidade: "Os galhos de Corsola crescem de volta rapidamente quando quebrados! Em Galar, existe uma versão fantasma de Corsola que morreu pela poluição dos oceanos.", categoria: "Lore" },
  { id: 263, pokemon: "Remoraid", emoji: "🐟", cor: "#8B7355", curiosidade: "Remoraid dispara água com precisão de franco-atirador! Ele vive junto com Mantine se alimentando das sobras de comida que passam por ele.", categoria: "Curiosidade" },
  { id: 264, pokemon: "Delibird", emoji: "❄️", cor: "#FF4500", curiosidade: "Delibird carrega presentes na cauda e os distribui para viajantes perdidos! Às vezes explode no processo, o que provavelmente não era a intenção.", categoria: "Lore" },
  { id: 265, pokemon: "Mantine", emoji: "🌊", cor: "#4A90D9", curiosidade: "Mantine nada tão graciosamente que parece dançar! Ele é tão gentil que deixa Remoraid se fixar no corpo para se alimentar em troca de proteção.", categoria: "Lore" },
  { id: 266, pokemon: "Skarmory", emoji: "🦅", cor: "#8B7355", curiosidade: "Skarmory tem asas de aço que ficam amoladas com o uso, então ele as renova anualmente! Essas asas velhas são coletadas para fazer espadas leves.", categoria: "História" },
  { id: 267, pokemon: "Phanpy", emoji: "🐘", cor: "#4A90D9", curiosidade: "Phanpy dorme junto com a família enrolado numa bola! O abraço de tromba que ele dá é tão forte que adultos humanos voam longe sem querer.", categoria: "Curiosidade" },
  { id: 268, pokemon: "Porygon2", emoji: "💻", cor: "#FF6B9D", curiosidade: "Porygon2 foi criado para explorar o espaço, mas nunca foi ao espaço! Ele evoluiu para além do programado e demonstra comportamentos não previstos.", categoria: "História" },
  { id: 269, pokemon: "Smeargle", emoji: "🎨", cor: "#FF8C00", curiosidade: "Smeargle pode copiar qualquer golpe do jogo com Esboço! Existem estratégias competitivas inteiras construídas em volta dessa habilidade única.", categoria: "Curiosidade" },
  { id: 270, pokemon: "Tyrogue", emoji: "🥊", cor: "#FF6B9D", curiosidade: "Tyrogue evolui para Hitmonlee, Hitmonchan ou Hitmontop dependendo de quais atributos são maiores! É o único Pokémon com três evoluções baseadas em status.", categoria: "Evolução" },
  { id: 271, pokemon: "Smoochum", emoji: "🌸", cor: "#FF6B9D", curiosidade: "Smoochum usa os lábios para identificar e memorizar tudo! Ela toca o rosto em qualquer coisa nova para aprender sobre ela.", categoria: "Curiosidade" },
  { id: 272, pokemon: "Elekid", emoji: "⚡", cor: "#FFD700", curiosidade: "Elekid gira os braços para gerar eletricidade! Quando está completamente carregado, faíscas azuis saltam entre os chifres da cabeça.", categoria: "Curiosidade" },
  { id: 273, pokemon: "Magby", emoji: "🔥", cor: "#FF4500", curiosidade: "Magby cospe chamas amarelas quando está saudável e fumaça preta quando está doente! É uma forma de verificar a saúde sem precisar de um médico.", categoria: "Curiosidade" },
  { id: 274, pokemon: "Blissey", emoji: "🥚", cor: "#FFB6C1", curiosidade: "Blissey tem o maior HP de todos os Pokémon não lendários! O ovo que ela carrega cura qualquer doença e ela compartilha com quem estiver com dor.", categoria: "Curiosidade" },
  { id: 275, pokemon: "Larvitar", emoji: "🏔️", cor: "#4CAF50", curiosidade: "Larvitar nasce comendo a montanha onde foi enterrado. Ele precisa comer terra suficiente para finalmente sair à superfície!", categoria: "Lore" },
  { id: 276, pokemon: "Pupitar", emoji: "🏔️", cor: "#8B7355", curiosidade: "Pupitar se move sozinho dentro da crisálida extremamente dura! Ele acumula gases internamente para poder se mover e quase nada consegue arranhá-lo.", categoria: "Evolução" },
  { id: 277, pokemon: "Steelix", emoji: "🐍", cor: "#8B7355", curiosidade: "Steelix vive mais fundo que qualquer outra criatura! A pressão e o calor do núcleo da terra transformaram o corpo em metal mais duro que qualquer aço.", categoria: "Curiosidade" },
  { id: 278, pokemon: "Pineco", emoji: "🌲", cor: "#4CAF50", curiosidade: "Pineco coleta cascas de árvores para tornar sua armadura mais dura! Se alguém o perturbar enquanto come, ele explode violentamente.", categoria: "Curiosidade" },
  { id: 279, pokemon: "Wobbuffet", emoji: "🌀", cor: "#4A90D9", curiosidade: "Wobbuffet nunca ataca — só contra-ataca! Ele esconde a cauda preta porque é aí que fica seu cérebro verdadeiro. A parte azul é tipo um isca.", categoria: "Tipo" },
  { id: 280, pokemon: "Girafarig", emoji: "🦒", cor: "#FFD700", curiosidade: "Estudos mostram que os dois cérebros de Girafarig às vezes querem coisas diferentes! O cérebro da cauda é mais instintivo e reativo.", categoria: "Teoria" },
  { id: 281, pokemon: "Unown", emoji: "🔠", cor: "#1a1a2e", curiosidade: "Cada Unown tem formato de uma letra diferente! Diz-se que quando muitos se reúnem, criam uma realidade paralela baseada nos pensamentos dos humanos.", categoria: "Lore" },
  { id: 282, pokemon: "Sunflora", emoji: "🌻", cor: "#FFD700", curiosidade: "Sunflora converte energia solar em movimentos e fica completamente parado à noite! Ele sempre se vira para o sol e caminha em direção à luz.", categoria: "Curiosidade" },
  { id: 283, pokemon: "Yanma", emoji: "🐝", cor: "#4CAF50", curiosidade: "Yanma voa tão rápido que cria ondas de choque ao virar! As asas batem 10.000 vezes por minuto e podem quebrar vidros com as vibrações.", categoria: "Curiosidade" },
  { id: 284, pokemon: "Espeon", emoji: "☀️", cor: "#DA70D6", curiosidade: "Espeon pode prever o futuro próximo usando os pelos sensitivos! Quando o perigo está perto, eles ficam em pé automaticamente.", categoria: "Curiosidade" },
  { id: 285, pokemon: "Misdreavus", emoji: "👻", cor: "#9C27B0", curiosidade: "Misdreavus se alimenta do medo das pessoas! Ele puxa o cabelo e dá gritos no escuro para assustar. Quando alguém grita, ele absorve a energia do susto.", categoria: "Lore" },
  { id: 286, pokemon: "Wooper", emoji: "🌊", cor: "#4A90D9", curiosidade: "A versão de Paldea de Wooper trocou a água pela lama! Em vez de brânquias, tem um revestimento de lama que o protege das toxinas do ambiente.", categoria: "Tipo" },
  { id: 287, pokemon: "Scizor", emoji: "⚔️", cor: "#FF4500", curiosidade: "Scizor tem garras com padrões que imitam olhos de inseto para intimidar! Apesar das asas, raramente voa — prefere correr em alta velocidade.", categoria: "Curiosidade" },
  { id: 288, pokemon: "Heracross", emoji: "🦋", cor: "#4A90D9", curiosidade: "Heracross adora a seiva das árvores e compete com Pinsir constantemente pelo território! Ele é capaz de carregar 100 vezes seu próprio peso.", categoria: "Curiosidade" },
  { id: 289, pokemon: "Slugma", emoji: "🔥", cor: "#FF4500", curiosidade: "Slugma é magma vivo que nunca pode parar de se mover! Se ficar frio demais, o magma endurece e ele morre. Ele busca locais quentes para sobreviver.", categoria: "Curiosidade" },
  { id: 290, pokemon: "Swinub", emoji: "❄️", cor: "#8B7355", curiosidade: "Swinub usa o nariz para encontrar comida debaixo da neve! Ele adora cogumelos e pode farejar fungos enterrados a metros de profundidade.", categoria: "Curiosidade" },
  { id: 291, pokemon: "Rhydon", emoji: "🏔️", cor: "#8B7355", curiosidade: "Rhydon foi o primeiro Pokémon criado pelos desenvolvedores de toda a série! A estátua decorativa nos Centros Pokémon existe em homenagem a ele.", categoria: "História" },
  { id: 292, pokemon: "Chansey", emoji: "🥚", cor: "#FFB6C1", curiosidade: "Chansey é extremamente raro e considerado símbolo de sorte! Quem encontra um tem felicidade garantida segundo a lenda. Ela corre rapidamente apesar da aparência.", categoria: "Lore" },
  { id: 293, pokemon: "Tangela", emoji: "🌿", cor: "#4A90D9", curiosidade: "Ninguém sabe o que existe dentro das trepadeiras de Tangela! Quando perde ramos, crescem de volta no dia seguinte ainda mais vigorosos.", categoria: "Lore" },
  { id: 294, pokemon: "Kangaskhan", emoji: "🐨", cor: "#FF8C00", curiosidade: "O bebê de Kangaskhan nunca sai da bolsa até os 3 anos! Quando cresce, procura seu próprio território. Nunca se viu um Kangaskhan macho.", categoria: "Lore" },
  { id: 295, pokemon: "Horsea", emoji: "🌊", cor: "#4A90D9", curiosidade: "Horsea se enrola na cauda de corais e plantas para não ser levado pela corrente! Ele atira tinta preta quando está assustado.", categoria: "Curiosidade" },
  { id: 296, pokemon: "Seadra", emoji: "🌊", cor: "#4A90D9", curiosidade: "Seadra pode nadar de ré com a mesma velocidade que de frente! Os espinhos venenosos nas nadadeiras são tão afiados que perfuram borracha.", categoria: "Curiosidade" },
  { id: 297, pokemon: "Goldeen", emoji: "🌊", cor: "#FF6B9D", curiosidade: "Goldeen é chamado de A Rainha da Água pela beleza das nadadeiras! Apesar da aparência delicada, o chifre é tão forte que pode perfurar aço.", categoria: "Lore" },
  { id: 298, pokemon: "Staryu", emoji: "⭐", cor: "#FF4500", curiosidade: "O núcleo vermelho de Staryu brilha como uma estrela à noite! Se qualquer parte do corpo for removida, regenera completamente durante a noite.", categoria: "Curiosidade" },
  { id: 299, pokemon: "Scyther", emoji: "🌿", cor: "#4CAF50", curiosidade: "Scyther se move tão rápido que parece que está em vários lugares ao mesmo tempo! Em batalha, ele nunca ataca da mesma direção duas vezes.", categoria: "Curiosidade" },
  { id: 300, pokemon: "Tauros", emoji: "🐂", cor: "#FF8C00", curiosidade: "Tauros açoita o próprio corpo com as três caudas para se encher de raiva antes de atacar! Quanto mais raiva, mais forte fica o ataque.", categoria: "Curiosidade" },
];

const curiosidadesVip = [
  { id: 401, pokemon: "Terapagos", emoji: "⭐", cor: "#9C27B0", curiosidade: "Terapagos é a origem de toda a energia Terastal de Paldea! Sem ele, nenhum Pokémon conseguiria Terastalizar. Ele carrega o poder de todas as formas Tera dentro do corpinho.", categoria: "Lore" },
  { id: 402, pokemon: "Terapagos", emoji: "⭐", cor: "#9C27B0", curiosidade: "Na forma Estelar, Terapagos é o único Pokémon do tipo Estelar da história! Seus golpes afetam qualquer tipo sem exceção — uma vantagem nunca vista antes.", categoria: "Tipo" },
  { id: 403, pokemon: "Terapagos", emoji: "⭐", cor: "#9C27B0", curiosidade: "O nome Terapagos vem de Terra + Pagos (gelo em grego), referência às Ilhas Galápagos — a inspiração real para a região de Paldea!", categoria: "História" },
  { id: 404, pokemon: "Pawmot", emoji: "⚡", cor: "#FFD700", curiosidade: "Pawmot é o único Pokémon capaz de usar o golpe Reavivamento — que cura qualquer status de um aliado em batalha dupla! Isso o tornou um dos mais usados no competitivo mundial.", categoria: "Curiosidade" },
  { id: 405, pokemon: "Pawmot", emoji: "⚡", cor: "#FFD700", curiosidade: "Pawmot é do tipo Elétrico e Lutador — uma combinação rarísima! Ele evoluiu de Pawmi passando por Pawmo, numa linha de três que surpreendeu todo o fandom.", categoria: "Evolução" },
  { id: 406, pokemon: "Gholdengo", emoji: "💎", cor: "#FFD700", curiosidade: "Para obter Gholdengo, você precisa coletar exatamente 999 moedas de Gimmighoul! É uma das tarefas mais trabalhosas de toda a franquia Pokémon.", categoria: "Curiosidade" },
  { id: 407, pokemon: "Gholdengo", emoji: "💎", cor: "#FFD700", curiosidade: "A habilidade Boa Recompensa de Gholdengo bloqueia completamente golpes de suporte do inimigo! Isso dominou o competitivo VGC por temporadas inteiras.", categoria: "Tipo" },
  { id: 408, pokemon: "Meowscarada", emoji: "🌸", cor: "#9C27B0", curiosidade: "Meowscarada é do tipo Planta e Sombrio — a primeira inicial Planta com tipo Sombrio! Ela usa flores como adagas e faz truques de mágica em batalha.", categoria: "Tipo" },
  { id: 409, pokemon: "Skeledirge", emoji: "🔥", cor: "#FF4500", curiosidade: "Skeledirge canta para atacar! O golpe exclusivo Torchsong aumenta o Ataque Especial após o uso. É o único Pokémon crocodilo cantor da história.", categoria: "Curiosidade" },
  { id: 410, pokemon: "Quaquaval", emoji: "🌊", cor: "#4A90D9", curiosidade: "Quaquaval dança para batalhar! Seus golpes de dança causam dano enorme e ele tem um dos designs mais elegantes entre os iniciais de todas as gerações.", categoria: "Curiosidade" },
  { id: 411, pokemon: "Koraidon", emoji: "🐉", cor: "#FF4500", curiosidade: "Koraidon é o lendário de Pokémon Scarlet e serve como montaria! Ele tem formas diferentes para correr, nadar e voar. É um paradoxo do passado.", categoria: "Lore" },
  { id: 412, pokemon: "Miraidon", emoji: "🐉", cor: "#4A90D9", curiosidade: "Miraidon é o lendário de Pokémon Violet e também serve como montaria elétrica! Ele é um paradoxo do futuro — a versão tecnológica de Koraidon.", categoria: "Lore" },
  { id: 413, pokemon: "Ting-Lu", emoji: "🏔️", cor: "#8B7355", curiosidade: "Ting-Lu é um dos Quatro Tesouros de Paldea, inspirado em lendas chinesas! Ele é um veado criado a partir da maldade e rancor acumulados por humanos.", categoria: "Lore" },
  { id: 414, pokemon: "Chien-Pao", emoji: "❄️", cor: "#4A90D9", curiosidade: "Chien-Pao tem presas de gelo que crescem do rosto como espadas! Diz-se que ele carrega a maldade congelada de gerações de humanos dentro das presas.", categoria: "Lore" },
  { id: 415, pokemon: "Wo-Chien", emoji: "🍃", cor: "#4CAF50", curiosidade: "Wo-Chien é um caracol feito de folhas murchas que carrega um registro antigo de injustiças! Ele drena a energia de plantas ao redor para sobreviver.", categoria: "Lore" },
  { id: 416, pokemon: "Chi-Yu", emoji: "🔥", cor: "#FF4500", curiosidade: "Chi-Yu parece um peixinho inofensivo, mas queima tudo ao redor com temperatura de magma! Ele foi banido do competitivo por ser poderoso demais.", categoria: "Tipo" },
  { id: 417, pokemon: "Roaring Moon", emoji: "🐉", cor: "#9C27B0", curiosidade: "Roaring Moon é o paradoxo do passado de Salamence — uma versão ancestral brutal e primitiva! Ele tem asas enormes e é do tipo Dragão e Sombrio.", categoria: "Lore" },
  { id: 418, pokemon: "Iron Valiant", emoji: "⚔️", cor: "#4A90D9", curiosidade: "Iron Valiant é o paradoxo do futuro de Gardevoir e Gallade fundidos! Um robô de luta do tipo Fada e Lutador, extremamente veloz e poderoso.", categoria: "Lore" },
  { id: 419, pokemon: "Baxcalibur", emoji: "🐉", cor: "#4A90D9", curiosidade: "Baxcalibur tem uma espada de gelo nas costas inspirada na lenda de Excalibur! Ele é o Pokémon Dragão de gelo mais forte já criado.", categoria: "Curiosidade" },
  { id: 420, pokemon: "Annihilape", emoji: "👻", cor: "#9C27B0", curiosidade: "Annihilape é a evolução de Primeape — que esperou 26 anos para evoluir desde a Gen 1! Ele morreu de raiva e virou um fantasma ainda mais furioso.", categoria: "Evolução" },
  { id: 421, pokemon: "Clodsire", emoji: "🌊", cor: "#9C27B0", curiosidade: "Clodsire é a evolução de Wooper de Paldea! Diferente do Wooper original aquático, ele vive na lama e é do tipo Veneno — uma inversão completa.", categoria: "Evolução" },
  { id: 422, pokemon: "Farigiraf", emoji: "🦒", cor: "#FFD700", curiosidade: "Farigiraf é a evolução de Girafarig após 26 anos de espera! Os dois cérebros se fundiram — o pescoço virou uma cabeça completa integrada ao corpo.", categoria: "Evolução" },
  { id: 423, pokemon: "Dudunsparce", emoji: "🐍", cor: "#FFD700", curiosidade: "Dunsparce finalmente evoluiu depois de décadas sendo o Pokémon favorito dos fãs sem evolução! E a evolução... praticamente não mudou nada. Os fãs adoraram mesmo assim.", categoria: "Evolução" },
  { id: 424, pokemon: "Kingambit", emoji: "⚔️", cor: "#1a1a2e", curiosidade: "Kingambit é a evolução de Bisharp que só acontece depois de derrotar outros Bisharps líderes! É um processo brutalmente competitivo dentro da espécie.", categoria: "Evolução" },
  { id: 425, pokemon: "Palafin", emoji: "🌊", cor: "#4A90D9", curiosidade: "Palafin parece um golfinho comum na forma Zero, mas na forma Herói vira um super-herói musculoso! É o Pokémon com a maior diferença visual entre formas.", categoria: "Evolução" },
  { id: 426, pokemon: "Ceruledge", emoji: "🔥", cor: "#9C27B0", curiosidade: "Ceruledge usa espadas feitas de chama e maldição! Ele absorve a energia vital dos oponentes com as lâminas e fica mais forte quanto mais luta.", categoria: "Curiosidade" },
  { id: 427, pokemon: "Armarouge", emoji: "🔥", cor: "#FF4500", curiosidade: "Armarouge usa a armadura de um guerreiro que morreu em batalha! O espírito do guerreiro vive dentro da armadura e protege Armarouge como se fossem um só.", categoria: "Lore" },
  { id: 428, pokemon: "Glimmora", emoji: "☠️", cor: "#FF6B9D", curiosidade: "Glimmora parece uma flor linda mas é extremamente venenosa! Ela usa cristais de toxinas como pétalas para atrair e envenenar presas desavisadas.", categoria: "Curiosidade" },
  { id: 429, pokemon: "Brambleghast", emoji: "👻", cor: "#8B7355", curiosidade: "Brambleghast é o espírito de uma planta que morreu no deserto! Ele rola pelo vento como uma tumbleweed e drena energia de qualquer coisa que toca.", categoria: "Lore" },
  { id: 430, pokemon: "Rabsca", emoji: "🌸", cor: "#4CAF50", curiosidade: "Rabsca carrega uma bola com um ovo sagrado dentro! Diz-se que o ovo contém o segredo da reencarnação. Quem tocar a bola tem sonhos estranhos.", categoria: "Lore" },
  { id: 431, pokemon: "Floragato", emoji: "🌸", cor: "#4CAF50", curiosidade: "Floragato usa uma flor como ioiô em batalha! O caule é resistente como aço e os movimentos são tão rápidos que parecem truques de mágica.", categoria: "Curiosidade" },
  { id: 432, pokemon: "Crocalor", emoji: "🔥", cor: "#FF4500", curiosidade: "Crocalor tem uma chama viva no topo da cabeça em formato de ovo! Essa chama cresce com as emoções — quanto mais animado, maior a chama fica.", categoria: "Curiosidade" },
  { id: 433, pokemon: "Quaxwell", emoji: "🌊", cor: "#4A90D9", curiosidade: "Quaxwell treina o corpo e a dança ao mesmo tempo! Ele usa os pés como instrumento musical e os golpes saem em ritmo perfeito com a música interna.", categoria: "Curiosidade" },
  { id: 434, pokemon: "Lechonk", emoji: "🐷", cor: "#FF8C00", curiosidade: "Lechonk virou um dos Pokémon mais amados da Gen 9! Apesar do nome, ele cheira bem e é quase todo músculo. O fandom o adotou como ícone imediatamente.", categoria: "História" },
  { id: 435, pokemon: "Tandemaus", emoji: "🐭", cor: "#FFB6C1", curiosidade: "Tandemaus é sempre um par de ratinhos que se movem perfeitamente sincronizados! Ninguém sabe se são dois Pokémon ou um só. A Pokédex não explica.", categoria: "Lore" },
  { id: 436, pokemon: "Maushold", emoji: "🐭", cor: "#FFB6C1", curiosidade: "Maushold é uma família inteira de ratinhos! Eles evoluem de Tandemaus e podem ter famílias de 3 ou 4 membros aleatoriamente. Os filhos são fofíssimos.", categoria: "Evolução" },
  { id: 437, pokemon: "Fidough", emoji: "🐶", cor: "#FFD700", curiosidade: "Fidough é um cachorrinho feito de massa de pão! A saliva dele contém fermento natural e tudo que ele morde começa a fermentar. Padeiros adoram ele.", categoria: "Curiosidade" },
  { id: 438, pokemon: "Dachsbun", emoji: "🐶", cor: "#FF8C00", curiosidade: "Dachsbun tem um aroma de pão recém-assado que acalma qualquer um ao redor! O calor do corpo fermenta a massa naturalmente. É quase irresistível.", categoria: "Curiosidade" },
  { id: 439, pokemon: "Smoliv", emoji: "🫒", cor: "#4CAF50", curiosidade: "O azeite que Smoliv lança é extremamente amargo para afastar predadores! Ele armazena energia solar no fruto e usa quando precisa escapar rapidamente.", categoria: "Curiosidade" },
  { id: 440, pokemon: "Dolliv", emoji: "🫒", cor: "#4CAF50", curiosidade: "Dolliv tem dois frutos de oliva que produzem azeite de qualidade diferente! Um é mais amargo para defesa, outro mais suave — usado como alimento.", categoria: "Curiosidade" },
  { id: 441, pokemon: "Arboliva", emoji: "🫒", cor: "#4CAF50", curiosidade: "Arboliva produz o azeite mais precioso de Paldea! O líquido dourado tem propriedades curativas e restaura energia de qualquer Pokémon que o beba.", categoria: "Lore" },
  { id: 442, pokemon: "Nacli", emoji: "🏔️", cor: "#FFD700", curiosidade: "Nacli é feito de cristais de sal! Ele nasce em cavernas e vai crescendo à medida que absorve minerais das pedras ao redor. É literalmente sal vivo.", categoria: "Curiosidade" },
  { id: 443, pokemon: "Naclstack", emoji: "🏔️", cor: "#FFD700", curiosidade: "Naclstack empilha cristais de sal no próprio corpo para ficar maior! Os cristais superiores são mais puros e preciosos que os inferiores.", categoria: "Curiosidade" },
  { id: 444, pokemon: "Garganacl", emoji: "🏔️", cor: "#FFD700", curiosidade: "Garganacl é enorme e cobre aliados com sal curativo! O sal no corpo tem propriedades antibacterianas e cura ferimentos de Pokémon aliados.", categoria: "Curiosidade" },
  { id: 445, pokemon: "Charcadet", emoji: "🔥", cor: "#FF4500", curiosidade: "Charcadet é feito das cinzas de guerreiros antigos! O fogo no corpo é alimentado pelo espírito de batalha dessas almas. Ele busca batalhas constantemente.", categoria: "Lore" },
  { id: 446, pokemon: "Tadbulb", emoji: "⚡", cor: "#FFD700", curiosidade: "Tadbulb é uma girino elétrico com uma lâmpada na cauda! A luz pisca quando está com medo ou excitado. Ele vive em grupos que iluminam poças inteiras.", categoria: "Curiosidade" },
  { id: 447, pokemon: "Bellibolt", emoji: "⚡", cor: "#FFD700", curiosidade: "Bellibolt gera eletricidade na barriga enorme e libera pelos olhos falsos! Os olhos reais são pequeninos no centro do rosto. Todos se enganam sobre onde ele olha.", categoria: "Curiosidade" },
  { id: 448, pokemon: "Wattrel", emoji: "⚡", cor: "#4A90D9", curiosidade: "Wattrel voa sobre o mar usando a eletricidade das tempestades! Ele atrai raios com as asas e armazena para mergulhar mais fundo na caça de peixes.", categoria: "Curiosidade" },
  { id: 449, pokemon: "Kilowattrel", emoji: "⚡", cor: "#4A90D9", curiosidade: "Kilowattrel pode voar 1000km sem pousar usando a eletricidade armazenada! Ele infla o papo para regular a pressão em grandes altitudes.", categoria: "Curiosidade" },
  { id: 450, pokemon: "Maschiff", emoji: "🐶", cor: "#8B7355", curiosidade: "Maschiff tenta parecer assustador mas é covarde! Ele rosna e faz cara feia, mas quando alguém avança, sai correndo. O coração é de manteiga.", categoria: "Curiosidade" },
  { id: 451, pokemon: "Mabosstiff", emoji: "🐶", cor: "#8B7355", curiosidade: "Mabosstiff se torna feroz quando precisa proteger seu grupo! A história do anime mostrou ele sacrificando a saúde para defender o treinador e emocionou todo o fandom.", categoria: "Lore" },
  { id: 452, pokemon: "Shroodle", emoji: "☠️", cor: "#9C27B0", curiosidade: "Shroodle morde qualquer coisa com os dentes venenosos! O veneno é tão poderoso que paralisa instantaneamente. Ele não sabe controlar — morde por instinto.", categoria: "Curiosidade" },
  { id: 453, pokemon: "Grafaiai", emoji: "☠️", cor: "#9C27B0", curiosidade: "Grafaiai faz pinturas nas árvores com saliva colorida e venenosa! Cada pintura tem significado — marca território, avisa perigo ou atrai parceiros.", categoria: "Lore" },
  { id: 454, pokemon: "Bramblin", emoji: "👻", cor: "#8B7355", curiosidade: "Bramblin é o espírito de uma planta que morreu de sede! Ele rola pelo deserto à procura de água que nunca encontra. Uma das histórias mais tristes de Paldea.", categoria: "Lore" },
  { id: 455, pokemon: "Toedscool", emoji: "🍄", cor: "#4CAF50", curiosidade: "Toedscool parece muito com Tentacool mas não tem nada a ver! Ele é um fungo terrestre que evoluiu independentemente para uma forma similar. Convergência evolutiva!", categoria: "Teoria" },
  { id: 456, pokemon: "Toedscruel", emoji: "🍄", cor: "#4CAF50", curiosidade: "Toedscruel libera esporos tóxicos que paralisam qualquer coisa ao redor! Os tentáculos são raízes que absorvem nutrientes do solo enquanto caminha.", categoria: "Curiosidade" },
  { id: 457, pokemon: "Klawf", emoji: "🦀", cor: "#FF4500", curiosidade: "Klawf fica de cabeça para baixo nas paredes esperando a presa! Os olhos giram 360 graus e ele pode ver em todas as direções ao mesmo tempo.", categoria: "Curiosidade" },
  { id: 458, pokemon: "Capsakid", emoji: "🌶️", cor: "#FF4500", curiosidade: "Capsakid libera capsaicina picante quando está com raiva! O calor interno vai aumentando durante o dia e ele precisa liberar à noite para não explodir.", categoria: "Curiosidade" },
  { id: 459, pokemon: "Scovillain", emoji: "🌶️", cor: "#FF4500", curiosidade: "Scovillain tem duas cabeças com personalidades opostas! A cabeça verde é calma, a vermelha é explosiva e furiosa. Elas brigam constantemente entre si.", categoria: "Curiosidade" },
  { id: 460, pokemon: "Rellor", emoji: "🪲", cor: "#8B7355", curiosidade: "Rellor empurra uma bolinha feita das suas próprias memórias! A bola fica maior conforme acumula mais experiências. Ele nunca abandona a bola.", categoria: "Lore" },
  { id: 461, pokemon: "Rabsca", emoji: "🌸", cor: "#4CAF50", curiosidade: "Rabsca protege o ovo sagrado dentro da bolha com a própria vida! Diz-se que o ovo pode reviver qualquer Pokémon — mas ninguém nunca confirmou.", categoria: "Teoria" },
  { id: 462, pokemon: "Flittle", emoji: "🦋", cor: "#FF6B9D", curiosidade: "Flittle usa as pernas para flutuar em vez das asas! A pressão psíquica das pernas levanta o corpo. As asas são apenas decoração.", categoria: "Curiosidade" },
  { id: 463, pokemon: "Espathra", emoji: "🦚", cor: "#FFD700", curiosidade: "Espathra usa os olhos para hipnotizar e adormecer qualquer oponente! Os padrões nas penas das asas funcionam como espirais hipnóticas naturais.", categoria: "Curiosidade" },
  { id: 464, pokemon: "Tinkatink", emoji: "🔨", cor: "#FF6B9D", curiosidade: "Tinkatink coleta sucata de ferro para construir seu martelo! Ela rouba materiais de qualquer lugar — inclusive de Pokémon de aço que encontra pelo caminho.", categoria: "Curiosidade" },
  { id: 465, pokemon: "Tinkaton", emoji: "🔨", cor: "#FF6B9D", curiosidade: "Tinkaton usa um martelo de 100kg feito de sucata roubada de Corviknight! Ela é do tipo Fada e Aço — e o martelo esmaga tudo que encontra pela frente.", categoria: "Curiosidade" },
  { id: 466, pokemon: "Wiglett", emoji: "🌊", cor: "#4A90D9", curiosidade: "Wiglett parece muito com Diglett mas não tem relação! Ele evoluiu de forma independente no oceano. O corpo branco é apenas a parte visível — o resto fica enterrado.", categoria: "Teoria" },
  { id: 467, pokemon: "Wugtrio", emoji: "🌊", cor: "#4A90D9", curiosidade: "Wugtrio é o trio aquático equivalente a Dugtrio! Três Wiglett emergindo juntos. Ninguém sabe o tamanho real do corpo submerso.", categoria: "Curiosidade" },
  { id: 468, pokemon: "Bombirdier", emoji: "🦅", cor: "#1a1a2e", curiosidade: "Bombirdier joga pedras e objetos pesados de grandes alturas sobre suas vítimas! Ele aprecia muito o som do impacto — é perturbadoramente satisfeito com isso.", categoria: "Lore" },
  { id: 469, pokemon: "Finizen", emoji: "🌊", cor: "#4A90D9", curiosidade: "Finizen é um golfinho que usa anéis de água para se comunicar e brincar! Os anéis têm significados diferentes dependendo do tamanho e velocidade.", categoria: "Curiosidade" },
  { id: 470, pokemon: "Varoom", emoji: "☠️", cor: "#8B7355", curiosidade: "Varoom é um motor de carro que ganhou vida! Ele parasita motores abandonados e usa o combustível como energia. É literalmente um motor Pokémon.", categoria: "Lore" },
  { id: 471, pokemon: "Revavroom", emoji: "☠️", cor: "#8B7355", curiosidade: "Revavroom é uma criatura que parasitou um motor inteiro de corrida! As diferentes formas dos vilões de Scarlet/Violet têm versões únicas de Revavroom.", categoria: "Lore" },
  { id: 472, pokemon: "Cyclizar", emoji: "🐉", cor: "#4CAF50", curiosidade: "Cyclizar é um Pokémon que serve de montaria naturalmente! Diferente de Koraidon e Miraidon, ele permite que qualquer um ande nas costas sem treinamento.", categoria: "Curiosidade" },
  { id: 473, pokemon: "Orthworm", emoji: "🏔️", cor: "#FF8C00", curiosidade: "Orthworm cava túneis comendo o ferro do solo e revestindo o corpo! Cada vez que come mais ferro, a armadura fica mais grossa e resistente.", categoria: "Curiosidade" },
  { id: 474, pokemon: "Glimmet", emoji: "☠️", cor: "#FF6B9D", curiosidade: "Glimmet parece uma flor bonita mas é altamente venenosa! As pétalas são cristais de toxinas que se quebram e liberam veneno quando tocadas.", categoria: "Curiosidade" },
  { id: 475, pokemon: "Greavard", emoji: "👻", cor: "#8B7355", curiosidade: "Greavard é um cachorrinho fantasma que gosta tanto de humanos que drena a energia vital deles sem querer! Ele não é maldoso — só quer carinho.", categoria: "Lore" },
  { id: 476, pokemon: "Houndstone", emoji: "👻", cor: "#8B7355", curiosidade: "Houndstone dorme nos túmulos de Pokémon e humanos! Ele protege os cemitérios e é o único Pokémon capaz de usar o golpe Última Hora.", categoria: "Tipo" },
  { id: 477, pokemon: "Flamigo", emoji: "🦩", cor: "#FF6B9D", curiosidade: "Flamigo é um flamingo que usa o pescoço longo como chicote em batalha! Dois Flamigo às vezes ficam com os pescoços enrolados e não conseguem se separar.", categoria: "Curiosidade" },
  { id: 478, pokemon: "Cetoddle", emoji: "❄️", cor: "#4A90D9", curiosidade: "Cetoddle é uma baleia terrestre que migra por terra em grupos! Eles sobrevivem acumulando gordura durante o verão para o inverno rigoroso.", categoria: "Curiosidade" },
  { id: 479, pokemon: "Cetitan", emoji: "❄️", cor: "#4A90D9", curiosidade: "Cetitan é enorme e usa os cinco chifres para se movimentar no gelo! Os chifres funcionam como âncoras e permitem que ele se locomova em superfícies geladas.", categoria: "Curiosidade" },
  { id: 480, pokemon: "Veluza", emoji: "🌊", cor: "#4A90D9", curiosidade: "Veluza descarta partes do próprio corpo para ficar mais ágil! Ele come as partes descartadas de volta quando precisa de energia — zero desperdício.", categoria: "Curiosidade" },
  { id: 481, pokemon: "Dondozo", emoji: "🌊", cor: "#4A90D9", curiosidade: "Dondozo é enorme mas completamente controlado por Tatsugiri que fica na boca! É o Pokémon que mais sofre de uma dinâmica de poder desigual.", categoria: "Lore" },
  { id: 482, pokemon: "Tatsugiri", emoji: "🐉", cor: "#FF4500", curiosidade: "Tatsugiri parece uma iguaria culinária mas é um predador! Ele entra na boca de Dondozo e controla o corpo enorme como um fantoche.", categoria: "Lore" },
  { id: 483, pokemon: "Frigibax", emoji: "🐉", cor: "#4A90D9", curiosidade: "Frigibax gera frio a partir da energia do dragão interno! Ele usa esse frio para criar gelo nas asas inacabadas, tentando aprender a voar.", categoria: "Evolução" },
  { id: 484, pokemon: "Arctibax", emoji: "🐉", cor: "#4A90D9", curiosidade: "Arctibax congela o ar ao redor para criar um campo protetor de gelo! Ele está desenvolvendo as asas mas ainda não consegue voar direito.", categoria: "Evolução" },
  { id: 485, pokemon: "Garganacl", emoji: "🏔️", cor: "#FFD700", curiosidade: "O sal de Garganacl tem propriedades mágicas que purifiam maldições e venenos! Antigos habitantes de Paldea usavam fragmentos do corpo como amuletos.", categoria: "História" },
  { id: 486, pokemon: "Iron Treads", emoji: "🤖", cor: "#8B7355", curiosidade: "Iron Treads é o paradoxo do futuro de Donphan — um robô tanque! Ele rola em alta velocidade destruindo tudo no caminho sem nenhuma emoção.", categoria: "Lore" },
  { id: 487, pokemon: "Iron Bundle", emoji: "🤖", cor: "#4A90D9", curiosidade: "Iron Bundle é o paradoxo do futuro de Delibird — um robô que lança mísseis de gelo! Ele foi banido do competitivo por ser absurdamente veloz e poderoso.", categoria: "Tipo" },
  { id: 488, pokemon: "Iron Hands", emoji: "🤖", cor: "#FFD700", curiosidade: "Iron Hands é o paradoxo do futuro de Hariyama — um robô elétrico enorme! Com HP altíssimo e ataques físicos devastadores, dominou o competitivo de doubles.", categoria: "Curiosidade" },
  { id: 489, pokemon: "Iron Jugulis", emoji: "🤖", cor: "#1a1a2e", curiosidade: "Iron Jugulis é o paradoxo do futuro de Hydreigon — três cabeças robóticas de metal! Ele voa em silêncio e ataca com feixes de energia sombria.", categoria: "Lore" },
  { id: 490, pokemon: "Iron Moth", emoji: "🤖", cor: "#FF6B9D", curiosidade: "Iron Moth é o paradoxo do futuro de Volcarona — uma mariposa robótica radioativa! O pó das asas é altamente radioativo e contamina tudo ao redor.", categoria: "Lore" },
  { id: 491, pokemon: "Iron Thorns", emoji: "🤖", cor: "#FF4500", curiosidade: "Iron Thorns é o paradoxo do futuro de Tyranitar — um dinossauro robótico! Ele parece saído de um filme de ficção científica dos anos 80.", categoria: "Lore" },
  { id: 492, pokemon: "Flutter Mane", emoji: "👻", cor: "#FF6B9D", curiosidade: "Flutter Mane é o paradoxo do passado de Misdreavus — uma versão antiga e muito mais perigosa! Foi banido do competitivo por Ataque Especial absurdo.", categoria: "Tipo" },
  { id: 493, pokemon: "Slither Wing", emoji: "🔥", cor: "#FF4500", curiosidade: "Slither Wing é o paradoxo do passado de Volcarona — uma mariposa primitiva que usa golpes físicos! É o oposto direto de seu equivalente futuro.", categoria: "Lore" },
  { id: 494, pokemon: "Sandy Shocks", emoji: "⚡", cor: "#FF8C00", curiosidade: "Sandy Shocks é o paradoxo do passado de Magneton — uma criatura pré-histórica magnética! Ela gera campos elétricos que desorientam bússolas por quilômetros.", categoria: "Lore" },
  { id: 495, pokemon: "Scream Tail", emoji: "❄️", cor: "#FF6B9D", curiosidade: "Scream Tail é o paradoxo do passado de Jigglypuff — uma versão ancestral feroz! O canto não é para dormir — é para paralisar de terror.", categoria: "Lore" },
  { id: 496, pokemon: "Brute Bonnet", emoji: "🍄", cor: "#9C27B0", curiosidade: "Brute Bonnet é o paradoxo do passado de Amoonguss — um fungo primitivo gigante! Os esporos que libera são muito mais tóxicos que os do equivalente moderno.", categoria: "Lore" },
  { id: 497, pokemon: "Walking Wake", emoji: "🌊", cor: "#4A90D9", curiosidade: "Walking Wake é o paradoxo do passado de Suicune! Uma versão ancestral selvagem do lendário — menos refinada mas igualmente majestosa e poderosa.", categoria: "Lore" },
  { id: 498, pokemon: "Iron Leaves", emoji: "🍃", cor: "#4CAF50", curiosidade: "Iron Leaves é o paradoxo do futuro de Virizion — uma espadachim robótica! Ela usa folhas de metal como lâminas que cortam qualquer material.", categoria: "Lore" },
  { id: 499, pokemon: "Poltchageist", emoji: "🍵", cor: "#4CAF50", curiosidade: "Poltchageist é um espírito em pó de chá matcha! Diferente de Sinistea que habita xícaras, ele está no próprio chá. Beber significa absorver o espírito.", categoria: "Lore" },
  { id: 500, pokemon: "Okidogi", emoji: "☠️", cor: "#FF4500", curiosidade: "Okidogi é um dos três guardiões de Kitakami! Ele usa correntes de toxinas e é venerado como herói — mas esconde uma natureza muito mais sombria.", categoria: "Lore" },
];


const tcgTecnicas = [
  { id: 1, titulo: "Controle de Prêmios", nivel: "Avançado", cor: "#FFD700", emoji: "🏆", dica: "Sempre calcule quantos Prêmios o adversário pega ao derrotar cada Pokémon seu. Pokémon de 1 Prêmio são iscas valiosas — eles avançam pouco o placar do adversário." },
  { id: 2, titulo: "Aceleração de Energia", nivel: "Intermediário", cor: "#FF4500", emoji: "⚡", dica: "Use Pokémon com habilidades de aceleração para colocar 2 energias por turno. Chegar ao ataque principal 1 turno antes do adversário é vantagem enorme." },
  { id: 3, titulo: "A Regra do Turno 1", nivel: "Básico", cor: "#4CAF50", emoji: "🎯", dica: "No turno 1, quem vai primeiro não pode atacar. Use esse turno para buscar peças essenciais com cartas de suporte, não para desperdiçar recursos." },
  { id: 4, titulo: "Mão de 7 Cartas", nivel: "Básico", cor: "#4A90D9", emoji: "🃏", dica: "Sempre que puder, use cartas que te deixam comprar mais cartas. Mão cheia é poder — quem fica com 2 cartas na mão perde consistência rapidamente." },
  { id: 5, titulo: "Bench Inteligente", nivel: "Intermediário", cor: "#9C27B0", emoji: "🧠", dica: "Não coloque Pokémon na bancada sem motivo. Cada Pokémon na bench é um alvo potencial para golpes de área. Bancada cheia sem propósito é bancada de Prêmios." },
  { id: 6, titulo: "Mulligan Estratégico", nivel: "Básico", cor: "#FF8C00", emoji: "🔄", dica: "Se sua mão inicial não tem Pokémon básico, você faz Mulligan obrigatório. O adversário compra 1 carta por Mulligan seu — minimize isso com muitos Pokémon básicos no deck." },
  { id: 7, titulo: "Consistência Antes de Poder", nivel: "Avançado", cor: "#FFD700", emoji: "📊", dica: "Um deck que executa um plano médio toda partida bate um deck que executa um plano poderoso só às vezes. Jogue 3 ou 4 cópias das peças críticas." },
  { id: 8, titulo: "Ler o Deck do Adversário", nivel: "Avançado", cor: "#FF6B9D", emoji: "👁️", dica: "Nos primeiros turnos, observe quais Pokémon o adversário coloca na bench. Isso revela o deck inteiro e te permite preparar a resposta certa antes que ele ataque." },
  { id: 9, titulo: "Economia de Recursos", nivel: "Intermediário", cor: "#4A90D9", emoji: "💰", dica: "Não use Pesquisador se você já tem a peça que precisava. Guardar cartas de suporte poderosas para quando realmente precisar pode decidir partidas nos turnos finais." },
  { id: 10, titulo: "Timing do Estádio", nivel: "Intermediário", cor: "#4CAF50", emoji: "🏟️", dica: "Jogue seu Estádio logo antes de precisar dele, não no primeiro turno. Isso evita que o adversário o destrua antes de você aproveitar o efeito." },
  { id: 11, titulo: "Pressão na Bench", nivel: "Avançado", cor: "#9C27B0", emoji: "🎯", dica: "Golpes que atacam a bancada do adversário são subestimados. Destruir o acelerador de energia na bench antes que ele seja ativado pode ganhar partidas sozinho." },
  { id: 12, titulo: "Pokémon Tool Timing", nivel: "Básico", cor: "#FF8C00", emoji: "🔧", dica: "Anexe Ferramentas Pokémon no momento certo — nem muito cedo (para não ser removida) nem tarde demais (para não perder o efeito quando precisar)." },
  { id: 13, titulo: "Plano A e Plano B", nivel: "Avançado", cor: "#FFD700", emoji: "📋", dica: "Todo deck competitivo precisa de um plano alternativo. Se o adversário bloquear seu atacante principal, você precisa ter outro caminho para fechar a partida." },
  { id: 14, titulo: "Contra o Meta", nivel: "Avançado", cor: "#FF4500", emoji: "⚔️", dica: "Incluir 1 ou 2 cartas específicas para combater os decks mais populares do torneio pode ser a diferença entre Top 8 e primeiro lugar." },
  { id: 15, titulo: "Não Desperdiçe Suporte", nivel: "Básico", cor: "#4A90D9", emoji: "🚫", dica: "Só pode usar 1 carta de Suporte por turno. Se você já usou um Suporte poderoso, guarde os outros para os próximos turnos em vez de descartar." },
  { id: 16, titulo: "Energia no Descarte", nivel: "Intermediário", cor: "#4CAF50", emoji: "🔋", dica: "Sempre monitore quantas energias foram para o descarte. Decks com recuperação de energia ficam muito mais fortes nos turnos finais quando os recursos são escassos." },
  { id: 17, titulo: "A Regra dos 60", nivel: "Básico", cor: "#FF6B9D", emoji: "📏", dica: "Menos é mais no deckbuilding. Um deck com 60 cartas focadas bate um deck com 60 cartas 'que parecem boas'. Cada carta deve ter uma função clara e necessária." },
  { id: 18, titulo: "Velocidade vs Controle", nivel: "Avançado", cor: "#9C27B0", emoji: "⚖️", dica: "Decks agressivos tentam ganhar antes do adversário se estabelecer. Decks de controle deixam o adversário jogar mas negam os recursos. Entenda qual é o seu estilo." },
  { id: 19, titulo: "Pokémon de 1 Prêmio como Finalizadores", nivel: "Avançado", cor: "#FF8C00", emoji: "🎮", dica: "Quando faltam 2 Prêmios para vencer, às vezes é melhor atacar com um Pokémon de 1 Prêmio que derrota o alvo do que arriscar o atacante principal que vale 2." },
  { id: 20, titulo: "Variedade de Atacantes", nivel: "Intermediário", cor: "#FFD700", emoji: "🥊", dica: "Ter 2 tipos diferentes de atacantes no deck te protege contra resistências e fraquezas. O adversário não pode preparar defesa para dois planos simultâneos." },
  { id: 21, titulo: "Gerenciar HP", nivel: "Intermediário", cor: "#FF4500", emoji: "❤️", dica: "Pokémon com muito HP mas pouco dano às vezes são melhores do que atacantes frágeis e poderosos. Um Pokémon vivo por 2 turnos pode ser mais valioso do que um turno de ataque forte." },
  { id: 22, titulo: "Efeitos de Status", nivel: "Básico", cor: "#4A90D9", emoji: "😵", dica: "Paralisia, Sono e Confusão podem decidir partidas. Paralisia é o mais poderoso — impede o adversário de atacar por um turno inteiro, o equivalente a ganhar um turno extra." },
  { id: 23, titulo: "Retirada Estratégica", nivel: "Intermediário", cor: "#4CAF50", emoji: "🔙", dica: "Retirar um Pokémon danificado para a bench antes de ser derrotado nega um Prêmio ao adversário. Calcule se vale a pena gastar energia de retirada ou sacrificar o Pokémon." },
  { id: 24, titulo: "Contagem de Decks", nivel: "Avançado", cor: "#FF6B9D", emoji: "🔢", dica: "Jogadores avançados contam quantas cópias das peças críticas do adversário já saíram do deck. Saber que o adversário já usou os 4 Pesquisadores muda completamente a estratégia." },
  { id: 25, titulo: "Pokémon de Suporte na Bench", nivel: "Intermediário", cor: "#9C27B0", emoji: "🛡️", dica: "Pokémon com habilidades passivas na bench são a espinha dorsal dos melhores decks. Eles trabalham sem precisar de energia e moldam o jogo silenciosamente." },
  { id: 26, titulo: "A Importância do Descarte", nivel: "Básico", cor: "#FF8C00", emoji: "🗑️", dica: "O descarte não é lixo — é um recurso. Muitas cartas poderosas buscam no descarte. Jogue com isso em mente e descarte estrategicamente o que vai precisar depois." },
  { id: 27, titulo: "Pressão Psicológica", nivel: "Avançado", cor: "#FFD700", emoji: "🧠", dica: "Em torneios, a postura e o ritmo de jogo importam. Jogar com confiança e sem hesitar pressiona o adversário. Dúvida aparente pode ser explorada por jogadores experientes." },
  { id: 28, titulo: "Mulligan do Adversário", nivel: "Intermediário", cor: "#FF4500", emoji: "🎰", dica: "Quando o adversário faz Mulligan, você compra cartas extras. Decks que forçam múltiplos Mulligans do adversário têm vantagem de consistência real nas primeiras mãos." },
  { id: 29, titulo: "Cartas de Busca Pokémon", nivel: "Básico", cor: "#4A90D9", emoji: "🔍", dica: "Ball search cards (Bola Ultra, Bola do Nível X etc) são as mais importantes do deck. Sempre inclua o máximo possível. Encontrar o Pokémon certo na hora certa resolve tudo." },
  { id: 30, titulo: "Saber Quando Passar", nivel: "Avançado", cor: "#4CAF50", emoji: "⏭️", dica: "Às vezes passar o turno sem fazer nada é a jogada correta. Se atacar significa dar um Prêmio valioso sem retorno, aguardar e reorganizar pode ser mais eficiente." },
  { id: 31, titulo: "Velocidade de Setup", nivel: "Intermediário", cor: "#FF6B9D", emoji: "🚀", dica: "O deck que se estabelece primeiro tem vantagem. Calcule quantos turnos seu deck precisa para ter o atacante principal pronto e reduza esse número ao mínimo possível." },
  { id: 32, titulo: "Proteção de Bench", nivel: "Intermediário", cor: "#9C27B0", emoji: "🛡️", dica: "Cartas como Mochila de Neve protegem Pokémon da bench de dano. Em metas cheios de golpes de área, essa proteção pode salvar peças críticas que sustentam todo o deck." },
  { id: 33, titulo: "Energias Especiais", nivel: "Avançado", cor: "#FF8C00", emoji: "✨", dica: "Energias Especiais têm efeitos poderosos mas são removíveis pelo adversário. Use-as estrategicamente — muitas vezes vale mais a pena guardar para o momento decisivo." },
  { id: 34, titulo: "O Jogo do Tempo", nivel: "Avançado", cor: "#FFD700", emoji: "⏱️", dica: "Em torneios com tempo limitado, saber gerenciar o relógio é uma habilidade separada. Jogar rápido quando está ganhando e devagar quando está perdendo é técnica legítima." },
  { id: 35, titulo: "Treinar com Listas Conhecidas", nivel: "Básico", cor: "#FF4500", emoji: "📚", dica: "Antes de inovar, domine as listas que já provaram funcionar em torneios. Entender por que cada carta está no deck é mais valioso do que criar algo novo sem base." },
  { id: 36, titulo: "Fraqueza como Arma", nivel: "Intermediário", cor: "#4A90D9", emoji: "💥", dica: "No TCG, ataques contra o tipo fraco causam o dobro do dano. Incluir um atacante que cubra a fraqueza do meta dominante pode ser a carta mais valiosa do seu deck." },
  { id: 37, titulo: "Pokémon Evolução na Bench", nivel: "Básico", cor: "#4CAF50", emoji: "⬆️", dica: "Sempre evolua Pokémon na bench antes de trazê-los para o ativo. Um Pokémon evoluído entra em batalha mais forte e com HP cheio — nunca evolua no ativo desnecessariamente." },
  { id: 38, titulo: "Técnica do Pivot", nivel: "Avançado", cor: "#FF6B9D", emoji: "🔄", dica: "Pivot Pokémon têm custo de retirada zero ou muito baixo. Eles entram, usam uma habilidade, e voltam para a bench sem custo — permitindo trocar de atacante livremente todo turno." },
  { id: 39, titulo: "Setup de 2 Frentes", nivel: "Avançado", cor: "#9C27B0", emoji: "⚔️", dica: "Preparar dois atacantes simultâneos na bench força o adversário a escolher qual ameaça eliminar. Qualquer escolha que ele fizer deixa a outra livre para atacar." },
  { id: 40, titulo: "Revisar o Descarte", nivel: "Básico", cor: "#FF8C00", emoji: "👀", dica: "Você tem direito de revisar o descarte durante a partida. Faça isso regularmente para saber quais recursos ainda estão disponíveis e planejar os próximos turnos." },
  { id: 41, titulo: "Não Revelar o Plano Cedo", nivel: "Avançado", cor: "#FFD700", emoji: "🎭", dica: "Evite colocar todas as peças do seu plano em jogo antes de precisar. Quanto mais o adversário souber sobre sua estratégia, mais tempo ele tem para preparar a resposta." },
  { id: 42, titulo: "Energia Básica vs Especial", nivel: "Básico", cor: "#FF4500", emoji: "⚡", dica: "Energia básica nunca é removida por efeitos de cartas. Energia especial pode ser descartada pelo adversário. Decks que dependem de energias especiais têm esse ponto fraco." },
  { id: 43, titulo: "A Importância do Comprar", nivel: "Intermediário", cor: "#4A90D9", emoji: "📥", dica: "Comprar 1 carta por turno é lento demais para o ritmo do meta moderno. Todo deck competitivo inclui formas de comprar 3, 4 ou 5 cartas em um único turno de suporte." },
  { id: 44, titulo: "Testar Contra o Meta", nivel: "Intermediário", cor: "#4CAF50", emoji: "🎮", dica: "Antes de um torneio, teste seu deck especificamente contra os 3 decks mais populares do meta. Você precisa ter pelo menos 50% de winrate contra cada um deles." },
  { id: 45, titulo: "Escolher o Inicial Certo", nivel: "Básico", cor: "#FF6B9D", emoji: "🎲", dica: "Qual Pokémon você coloca como ativo no turno 1 pode definir a partida. O inicial ideal tem HP razoável para sobreviver 1 ou 2 ataques enquanto você organiza a bench." },
  { id: 46, titulo: "Habilidades vs Ataques", nivel: "Intermediário", cor: "#9C27B0", emoji: "✨", dica: "Habilidades funcionam sem custo de energia e não gastam o turno de ataque. Pokémon com habilidades poderosas são quase sempre mais valiosos do que atacantes puros." },
  { id: 47, titulo: "Deck de 60 Focado", nivel: "Básico", cor: "#FF8C00", emoji: "🎯", dica: "A tentação de colocar 'só mais 1 carta boa' no deck é armadilha. Cada carta extra dilui a consistência. Quando em dúvida, remova — não adicione." },
  { id: 48, titulo: "Jogar Rápido e Limpo", nivel: "Básico", cor: "#FFD700", emoji: "⚡", dica: "Jogar rápido e sem erros é uma habilidade treinável. Conheça seu deck tão bem que você saiba a próxima jogada antes de terminar a atual. Prática faz isso acontecer." },
  { id: 49, titulo: "Gerenciar Energias na Bench", nivel: "Intermediário", cor: "#FF4500", emoji: "🔋", dica: "Distribuir energias entre Pokémon na bench prepara atacantes alternativos. Se o principal cair, o substituto já está carregado e pronto para entrar sem perder tempo." },
  { id: 50, titulo: "Perder para Aprender", nivel: "Básico", cor: "#4A90D9", emoji: "📖", dica: "Toda derrota é informação. Após perder, analise o turno exato em que a partida virou. Na maioria das vezes você vai encontrar uma jogada diferente que teria mudado tudo." },
  { id: 51, titulo: "Técnica da Âncora", nivel: "Avançado", cor: "#4CAF50", emoji: "⚓", dica: "Deixar 1 Pokémon fraco no ativo enquanto prepara os ataques reais na bench é a Âncora. Ele segura o adversário sem dar Prêmios importantes enquanto você se organiza." },
  { id: 52, titulo: "Saber o Meta de Cor", nivel: "Avançado", cor: "#FF6B9D", emoji: "🧠", dica: "Os melhores jogadores sabem de memória as listas dos 5 decks mais jogados do meta. Isso permite fazer jogadas antecipadas antes mesmo de ver as cartas do adversário." },
  { id: 53, titulo: "Timing de Evolução", nivel: "Intermediário", cor: "#9C27B0", emoji: "⬆️", dica: "Evoluir no turno errado pode ser um erro. Às vezes é melhor manter o básico por mais 1 turno do que evoluir antes de estar pronto para atacar imediatamente depois." },
  { id: 54, titulo: "Pokémon de Sacrifício", nivel: "Avançado", cor: "#FF8C00", emoji: "♟️", dica: "Em situações desesperadas, colocar um Pokémon fraco no ativo de propósito para ser derrotado pode comprar 1 turno extra para montar a resposta. É sacrifício estratégico." },
  { id: 55, titulo: "Ler as Probabilidades", nivel: "Avançado", cor: "#FFD700", emoji: "🎲", dica: "Pokémon TCG tem aleatoriedade, mas probabilidades importam. Se você precisa de 1 carta específica e tem 3 no deck com 20 cartas restantes, as chances são altas — jogue com isso." },
  { id: 56, titulo: "Defender com Bench Vazia", nivel: "Intermediário", cor: "#FF4500", emoji: "🛡️", dica: "Manter a bench propositalmente com poucos Pokémon contra decks de snipe (que atacam a bench) é uma técnica de defesa válida que limita os alvos do adversário." },
  { id: 57, titulo: "Combinar Cartas de Suporte", nivel: "Intermediário", cor: "#4A90D9", emoji: "🤝", dica: "Algumas cartas de Suporte combinam perfeitamente. Usar uma que embaralha a mão e outra que compra muitas cartas no mesmo turno pode renovar a mão inteira de uma vez." },
  { id: 58, titulo: "Nunca Desistir Cedo", nivel: "Básico", cor: "#4CAF50", emoji: "💪", dica: "O Pokémon TCG tem muitas reviravoltas possíveis. Adversários erram, o deck pode dar a carta certa no momento certo. Só conceda quando matematicamente impossível ganhar." },
  { id: 59, titulo: "Filmar e Revisar Jogadas", nivel: "Avançado", cor: "#FF6B9D", emoji: "🎥", dica: "Jogadores sérios filmam ou anotam partidas importantes para revisar depois. Você vai encontrar erros que não percebeu na hora — e não vai repetir no próximo torneio." },
  { id: 60, titulo: "Diversão Acima de Tudo", nivel: "Básico", cor: "#9C27B0", emoji: "❤️", dica: "A melhor técnica do TCG é jogar o deck que você ama. Você vai treinar mais, estudar mais e jogar melhor com um deck que te emociona do que com a lista mais forte do meta." },
];

const categoriasCores = {
  História: "#4CAF50", Teoria: "#9C27B0", Lore: "#2196F3",
  Tipo: "#FF5722", Curiosidade: "#FF9800", Evolução: "#00BCD4",
};

const emojisDisponiveis = ["⚡","👻","🧬","🔥","😴","🔮","🐟","🥄","💀","🌟","🌊","🍃","❄️","🌙","☀️","💎","🐉","🎯","🦋","🌸"];
const coresPokemon = ["#FFD700","#7B68EE","#FF6B9D","#FF4500","#4A90D9","#DA70D6","#FF8C00","#4CAF50","#8B7355","#C4A35A","#00BCD4","#E91E63"];

export default function PokemonCuriosidades() {
  const [lista, setLista] = useState(curiosidadesIniciais);
  const [atual, setAtual] = useState(0);
  const [revelado, setRevelado] = useState(false);
  const [vistos, setVistos] = useState([]);
  const [telaAdicionar, setTelaAdicionar] = useState(false);
  const [adicionado, setAdicionado] = useState(false);
  const [busca, setBusca] = useState("");
  const [vipAtivo, setVipAtivo] = useState(false);
  const [aba, setAba] = useState("pokemon"); // "pokemon" ou "tcg"
  const [tcgAtual, setTcgAtual] = useState(0);
  const [tcgRevelado, setTcgRevelado] = useState(false);

  const listaFiltrada = busca.trim()
    ? lista.filter(c => c.pokemon.toLowerCase().includes(busca.toLowerCase()))
    : lista;

  const card = listaFiltrada[atual] || lista[0];
  const isVip = card.id >= 401;
  const nomePokemonUrl = card.pokemon.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  const imgUrl = isVip ? `https://img.pokemondb.net/artwork/large/${nomePokemonUrl}.jpg` : null;

  function proximo() {
    setRevelado(false);
    setVistos((v) => [...new Set([...v, atual])]);
    setAtual((a) => (a + 1) % listaFiltrada.length);
  }

  function anterior() {
    setRevelado(false);
    setAtual((a) => (a - 1 + listaFiltrada.length) % listaFiltrada.length);
  }

  function ativarVip() {
    setLista((l) => [...l, ...curiosidadesVip]);
    setVipAtivo(true);
  }

  const [form, setForm] = useState({ pokemon: "", emoji: "⚡", cor: "#FFD700", curiosidade: "", categoria: "Curiosidade" });

  function salvarNovo() {
    if (!form.pokemon.trim() || !form.curiosidade.trim()) return;
    setLista((l) => [...l, { ...form, id: Date.now() }]);
    setForm({ pokemon: "", emoji: "⚡", cor: "#FFD700", curiosidade: "", categoria: "Curiosidade" });
    setTelaAdicionar(false);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 3000);
    setAtual(listaFiltrada.length);
    setRevelado(false);
  }

  const inputStyle = {
    width: "100%", padding: "10px 12px", borderRadius: "10px",
    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
    color: "#e2e8f0", fontSize: "0.9rem", boxSizing: "border-box", outline: "none",
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 16px", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "#FFD700", margin: 0, letterSpacing: "-1px", textShadow: "0 0 30px rgba(255,215,0,0.5)" }}>Pokédex de Curiosidades</h1>
        <p style={{ color: "#94a3b8", margin: "8px 0 0", fontSize: "0.9rem" }}>Fatos e técnicas que você precisa saber! 🎮</p>
      </div>

      {/* Abas */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", background: "rgba(255,255,255,0.05)", padding: "6px", borderRadius: "16px" }}>
        <button onClick={() => setAba("pokemon")} style={{ flex: 1, padding: "10px 16px", borderRadius: "12px", border: "none", background: aba === "pokemon" ? "linear-gradient(135deg, #FFD700, #FFA500)" : "transparent", color: aba === "pokemon" ? "#1a1a2e" : "#94a3b8", fontWeight: 800, fontSize: "0.9rem", cursor: "pointer" }}>
          🎮 Pokémon
        </button>
        <button onClick={() => setAba("tcg")} style={{ flex: 1, padding: "10px 16px", borderRadius: "12px", border: "none", background: aba === "tcg" ? "linear-gradient(135deg, #4A90D9, #7B68EE)" : "transparent", color: aba === "tcg" ? "white" : "#94a3b8", fontWeight: 800, fontSize: "0.9rem", cursor: "pointer" }}>
          🃏 TCG
        </button>
      </div>

      {adicionado && (
        <div style={{ background: "#4CAF50", color: "white", padding: "10px 20px", borderRadius: "12px", marginBottom: "12px", fontWeight: 700, fontSize: "0.9rem" }}>✅ Curiosidade adicionada!</div>
      )}

      {aba === "pokemon" && <>
      <div style={{ width: "100%", maxWidth: "420px", marginBottom: "16px" }}>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "1.1rem", pointerEvents: "none" }}>🔍</span>
          <input value={busca} onChange={e => { setBusca(e.target.value); setAtual(0); setRevelado(false); }}
            placeholder="Pesquisar Pokémon..."
            style={{ ...inputStyle, fontSize: "1rem", padding: "14px 16px 14px 42px", borderRadius: "14px", border: "1.5px solid rgba(255,215,0,0.3)", background: "rgba(255,255,255,0.07)" }} />
          {busca && <button onClick={() => { setBusca(""); setAtual(0); }} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#64748b", fontSize: "1.1rem", cursor: "pointer" }}>✕</button>}
        </div>
        {busca && <p style={{ color: "#64748b", fontSize: "0.8rem", margin: "6px 0 0", textAlign: "center" }}>{listaFiltrada.length} resultado(s) para "{busca}"</p>}
      </div>

      <div style={{ display: "flex", gap: "4px", marginBottom: "16px", flexWrap: "wrap", justifyContent: "center", maxWidth: "420px" }}>
        {listaFiltrada.slice(0, 50).map((_, i) => (
          <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: i === atual ? "#FFD700" : vistos.includes(i) ? "#4CAF50" : "#334155", transition: "all 0.3s" }} />
        ))}
        {listaFiltrada.length > 50 && <span style={{ color: "#64748b", fontSize: "0.7rem" }}>+{listaFiltrada.length - 50}</span>}
      </div>

      {!telaAdicionar ? (
        <>
          <div style={{ width: "100%", maxWidth: "420px", background: "rgba(255,255,255,0.05)", border: `2px solid ${card.cor}44`, borderRadius: "24px", padding: "32px 24px", backdropFilter: "blur(10px)", boxShadow: `0 20px 60px ${card.cor}22`, transition: "all 0.4s" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              {isVip && imgUrl ? (
                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <div style={{ position: "absolute", top: "-8px", right: "-8px", background: "linear-gradient(135deg, #FFD700, #FFA500)", borderRadius: "20px", padding: "3px 10px", fontSize: "0.7rem", fontWeight: 900, color: "#1a1a2e", zIndex: 1 }}>👑 VIP</div>
                  <img
                    src={imgUrl}
                    alt={card.pokemon}
                    onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }}
                    style={{ width: "160px", height: "160px", objectFit: "contain", filter: `drop-shadow(0 4px 20px ${card.cor}88)` }}
                  />
                  <div style={{ display: "none", fontSize: "5rem", lineHeight: 1 }}>{card.emoji}</div>
                </div>
              ) : (
                <div style={{ fontSize: "5rem", lineHeight: 1, marginBottom: "12px" }}>{card.emoji}</div>
              )}
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: card.cor, margin: "0 0 8px", textShadow: `0 0 20px ${card.cor}66` }}>{card.pokemon}</h2>
              <span style={{ background: (categoriasCores[card.categoria] || "#666") + "33", color: categoriasCores[card.categoria] || "#aaa", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase", border: `1px solid ${(categoriasCores[card.categoria] || "#666")}55` }}>{card.categoria}</span>
            </div>
            {!revelado ? (
              <button onClick={() => setRevelado(true)} style={{ width: "100%", padding: "16px", background: `linear-gradient(135deg, ${card.cor}33, ${card.cor}11)`, border: `2px dashed ${card.cor}88`, borderRadius: "16px", color: card.cor, fontSize: "1rem", fontWeight: 700, cursor: "pointer" }}>
                👆 Toque para revelar a curiosidade!
              </button>
            ) : (
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>{card.curiosidade}</p>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "24px", alignItems: "center" }}>
            <button onClick={anterior} style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "1.2rem", cursor: "pointer" }}>←</button>
            <span style={{ color: "#64748b", fontSize: "0.9rem" }}>{atual + 1} / {listaFiltrada.length}</span>
            <button onClick={proximo} style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,215,0,0.2)", border: "1px solid rgba(255,215,0,0.4)", color: "#FFD700", fontSize: "1.2rem", cursor: "pointer" }}>→</button>
          </div>

          {/* BOTÃO VIP */}
          {!vipAtivo ? (
            <div style={{ marginTop: "24px", width: "100%", maxWidth: "420px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f0f23, #1a1a2e)", border: "2px solid #FFD700", borderRadius: "20px", padding: "24px", boxShadow: "0 0 40px rgba(255,215,0,0.25)", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "6px" }}>👑</div>
                <h3 style={{ color: "#FFD700", margin: "0 0 6px", fontSize: "1.3rem", fontWeight: 900, letterSpacing: "1px" }}>CURIOSIDADES VIP</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: "0 0 4px" }}>+100 curiosidades exclusivas desbloqueadas!</p>
                <p style={{ color: "#64748b", fontSize: "0.75rem", margin: "0 0 16px" }}>Pokémon de Paldea, paradoxos, segredos raros e muito mais</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "18px" }}>
                  
                  <span style={{ color: "#FFD700", fontSize: "2rem", fontWeight: 900 }}>R$ 30</span>
                  
                </div>
                <button onClick={ativarVip} style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #FFD700, #FFA500)", border: "none", borderRadius: "14px", color: "#1a1a2e", fontWeight: 900, fontSize: "1.05rem", cursor: "pointer", boxShadow: "0 6px 24px rgba(255,215,0,0.5)", letterSpacing: "0.5px" }}>
                  👑 QUERO SER VIP — R$ 30,00
                </button>
                <p style={{ color: "#334155", fontSize: "0.72rem", margin: "10px 0 0" }}>✓ Acesso imediato &nbsp;·&nbsp; ✓ Sem mensalidade &nbsp;·&nbsp; ✓ Para sempre</p>
              </div>
            </div>
          ) : (
            <div style={{ marginTop: "16px", background: "linear-gradient(135deg, #FFD70022, #FFA50011)", border: "1px solid #FFD70066", borderRadius: "14px", padding: "12px 24px", color: "#FFD700", fontWeight: 800, fontSize: "0.95rem", textAlign: "center" }}>
              👑 VIP ativo! 100 curiosidades extras desbloqueadas!
            </div>
          )}

          <button onClick={() => setTelaAdicionar(true)} style={{ marginTop: "16px", padding: "12px 28px", background: "linear-gradient(135deg, #FFD700, #FFA500)", border: "none", borderRadius: "16px", color: "#1a1a2e", fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", boxShadow: "0 4px 20px rgba(255,215,0,0.3)" }}>
            + Adicionar nova curiosidade
          </button>
        </>
      ) : (
        <div style={{ width: "100%", maxWidth: "420px", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,215,0,0.3)", borderRadius: "24px", padding: "28px 24px" }}>
          <h2 style={{ color: "#FFD700", margin: "0 0 20px", fontSize: "1.3rem", fontWeight: 800 }}>✏️ Nova Curiosidade</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: "6px" }}>Nome do Pokémon</label>
              <input value={form.pokemon} onChange={(e) => setForm({ ...form, pokemon: e.target.value })} placeholder="Ex: Bulbasaur" style={inputStyle} />
            </div>
            <div>
              <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: "6px" }}>Emoji</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {emojisDisponiveis.map((e) => (
                  <button key={e} onClick={() => setForm({ ...form, emoji: e })} style={{ width: "36px", height: "36px", borderRadius: "8px", fontSize: "1.2rem", border: form.emoji === e ? "2px solid #FFD700" : "1px solid rgba(255,255,255,0.1)", background: form.emoji === e ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.05)", cursor: "pointer" }}>{e}</button>
                ))}
              </div>
            </div>
            <div>
              <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: "6px" }}>Cor</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {coresPokemon.map((c) => (
                  <button key={c} onClick={() => setForm({ ...form, cor: c })} style={{ width: "32px", height: "32px", borderRadius: "50%", background: c, border: form.cor === c ? "3px solid white" : "2px solid transparent", cursor: "pointer" }} />
                ))}
              </div>
            </div>
            <div>
              <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: "6px" }}>Categoria</label>
              <select value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                {Object.keys(categoriasCores).map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: "6px" }}>A curiosidade</label>
              <textarea value={form.curiosidade} onChange={(e) => setForm({ ...form, curiosidade: e.target.value })} placeholder="Escreva um fato legal sobre esse Pokémon..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            {form.pokemon && (
              <div style={{ padding: "12px", background: `${form.cor}11`, borderRadius: "12px", border: `1px solid ${form.cor}33`, textAlign: "center" }}>
                <span style={{ fontSize: "2rem" }}>{form.emoji}</span>
                <p style={{ color: form.cor, fontWeight: 700, margin: "4px 0 0" }}>{form.pokemon}</p>
              </div>
            )}
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setTelaAdicionar(false)} style={{ flex: 1, padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#94a3b8", fontWeight: 700, cursor: "pointer" }}>Cancelar</button>
              <button onClick={salvarNovo} disabled={!form.pokemon.trim() || !form.curiosidade.trim()} style={{ flex: 2, padding: "12px", borderRadius: "12px", background: form.pokemon && form.curiosidade ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(255,255,255,0.05)", border: "none", color: form.pokemon && form.curiosidade ? "#1a1a2e" : "#64748b", fontWeight: 800, cursor: form.pokemon && form.curiosidade ? "pointer" : "not-allowed" }}>Salvar ✓</button>
            </div>
          </div>
        </div>
      )}
      </> }

      {/* ABA TCG */}
      {aba === "tcg" && (() => {
        const tcg = tcgTecnicas[tcgAtual];
        const nivelCor = { "Básico": "#4CAF50", "Intermediário": "#FF8C00", "Avançado": "#FF4500" };
        return (
          <>
            <div style={{ width: "100%", maxWidth: "420px", marginBottom: "16px" }}>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", textAlign: "center", margin: 0 }}>60 técnicas para dominar o Pokémon TCG 🃏</p>
            </div>

            <div style={{ display: "flex", gap: "4px", marginBottom: "16px", flexWrap: "wrap", justifyContent: "center", maxWidth: "420px" }}>
              {tcgTecnicas.slice(0, 60).map((_, i) => (
                <div key={i} onClick={() => { setTcgAtual(i); setTcgRevelado(false); }} style={{ width: "8px", height: "8px", borderRadius: "50%", background: i === tcgAtual ? "#4A90D9" : "#334155", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>

            <div style={{ width: "100%", maxWidth: "420px", background: "rgba(255,255,255,0.05)", border: `2px solid ${tcg.cor}44`, borderRadius: "24px", padding: "32px 24px", backdropFilter: "blur(10px)", boxShadow: `0 20px 60px ${tcg.cor}22` }}>
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div style={{ fontSize: "4rem", lineHeight: 1, marginBottom: "12px" }}>{tcg.emoji}</div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: tcg.cor, margin: "0 0 10px", textShadow: `0 0 20px ${tcg.cor}66` }}>{tcg.titulo}</h2>
                <span style={{ background: (nivelCor[tcg.nivel] || "#666") + "33", color: nivelCor[tcg.nivel] || "#aaa", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", border: `1px solid ${(nivelCor[tcg.nivel] || "#666")}55` }}>{tcg.nivel}</span>
              </div>

              {!tcgRevelado ? (
                <button onClick={() => setTcgRevelado(true)} style={{ width: "100%", padding: "16px", background: `linear-gradient(135deg, ${tcg.cor}33, ${tcg.cor}11)`, border: `2px dashed ${tcg.cor}88`, borderRadius: "16px", color: tcg.cor, fontSize: "1rem", fontWeight: 700, cursor: "pointer" }}>
                  👆 Toque para ver a técnica!
                </button>
              ) : (
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>{tcg.dica}</p>
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "24px", alignItems: "center" }}>
              <button onClick={() => { setTcgAtual(a => (a - 1 + tcgTecnicas.length) % tcgTecnicas.length); setTcgRevelado(false); }} style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "1.2rem", cursor: "pointer" }}>←</button>
              <span style={{ color: "#64748b", fontSize: "0.9rem" }}>{tcgAtual + 1} / {tcgTecnicas.length}</span>
              <button onClick={() => { setTcgAtual(a => (a + 1) % tcgTecnicas.length); setTcgRevelado(false); }} style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(74,144,217,0.2)", border: "1px solid rgba(74,144,217,0.4)", color: "#4A90D9", fontSize: "1.2rem", cursor: "pointer" }}>→</button>
            </div>
          </>
        );
      })()}

      <p style={{ color: "#334155", fontSize: "0.75rem", marginTop: "24px" }}>feito por [seu nome aqui] 🚀</p>
    </div>
  );
}
