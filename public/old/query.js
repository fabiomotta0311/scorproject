db.products.insert( { item: "card", qty: 15 } )

db.kpilist.insert({ name: "Indicador TESTE",owner: "Responsavel TESTE",code: "KPITESTE",g1_titulo: "titulo_TESTE 1", g1_subtitulo:"subtitulo_TESTE 1", g1_rotulo_x:"RotuloX_TESTE 1",g1_rotulo_y:"RotuloY_TESTE 1",g2_titulo: "titulo_TESTE 2",g2_subtitulo:"subtitulo_TESTE 2", g2_rotulo_x:"RotuloX_TESTE 2",g2_rotulo_y:"RotuloY_TESTE 2",g3_titulo: "titulo_TESTE 3", g3_subtitulo:"subtitulo_TESTE 3", g3_rotulo_x:"RotuloX_TESTE 3",g3_rotulo_y:"RotuloY_TESTE 3",g1_itens:[{"periodo": "Jan","categoria": "A1","valor": 18,"meta": 15},{"periodo": "Fev","categoria": "B1","valor": 22,"meta": 15},{"periodo": "Jan","categoria": "A1","valor": 19,"meta": 15},{"periodo": "Fev","categoria": "B1","valor": 23,"meta": 15}],g2_itens:[{"periodo": "Jan","categoria": "A2","valor": 18,"meta": 15},{"periodo": "Fev","categoria": "B2","valor": 22,"meta": 15},{"periodo": "Jan","categoria": "A2","valor": 19,"meta": 15},{"periodo": "Fev","categoria": "B2","valor": 23,"meta": 15}],g3_itens:[{"periodo": "Jan","categoria": "A3","valor": 18,"meta": 15},{"periodo": "Fev","categoria": "B3","valor": 22,"meta": 15},{"periodo": "Jan","categoria": "A3","valor": 19,"meta": 15},{"periodo": "Fev","categoria": "B3","valor": 23,"meta": 15}]};





db.kpilist.insert({name: "Indicador TESTE",owner: "Responsavel TESTE",code: "KPITESTE",g1_titulo: "titulo_TESTE", g1_subtitulo:"subtitulo_TESTE", "g1_rotulo_x":"RotuloX_TESTE",g1_rotulo_y:"RotuloY_TESTE",itens:[{periodo: "Jan",categoria: "A",valor: 18,meta: 15},{periodo: "Fev",categoria: "B",valor: 22,meta: 15}]})


Background perfect é assim:

(sua tag a aplicar) {
	background: url(images/sua imagem) no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

Armando Magalhaes botei alguns projetos em produção usando angular.js 1.5.0 e express com os milhares de middlewares 
durante um tempo. hoje em dia o ultimo que botei pra funcionar foi um servidor com hapi.js (completamente testado, provavelmente 
o melhor serviço que eu fiz na minha vida, a experiencia de desenvolver usando os modulos da equipe do hapi é ótima, boom, 
joi e shot são alguns exemplos muito uteis) + um cliente em angular 2 com ionic 2, e sinto em dizer que minha experiencia 
com o angular 2 foi horrível

Armando Magalhaes
Armando Magalhaes o cliente escrito em angular 2 com o ionic 2 citado acima já é considerado por mim como perdido hoje, 
uma aplicação falha, e será completamente reescrito utilizando react + redux, com webpack como module bundler usando hmr e
outras funcionalidades muito boas pra produtividade. Se quiser focar em um lado client-side mais interessante, eu recomendo
que você não tente angular 2 e tente explorar as librarys que te guiam a um desenvolvimento de um cliente que siga um padrão 
de fluxo de dados unidirecional baseado em eventos, em vez do tradicional (two-way) databinding oferecido pelo angular.