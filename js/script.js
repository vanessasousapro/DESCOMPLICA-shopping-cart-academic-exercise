//Comentários Para Fins Didáticos;
/* - Esse bloco de código gerencia a quantidade e o valor total de produtos em uma lista de compras.
As variáveis "valorTotal", "valorProduto" e "qtd" são arrays que armazenam, respectivamente, 
o valor total acumulado de cada produto, o preço de cada produto e a quantidade de cada produto.

A função "adicionarItem" é chamada com um parâmetro "item" que representa o índice do produto a ser manipulado.

Ela obtém os elementos HTML responsáveis por exibir a quantidade e o valor total do produto.

Em seguida, incrementa a quantidade do produto e recalcula o valor total multiplicando o preço do produto pela quantidade atualizada. 

Por fim, a função atualiza a exibição dos valores no HTML, 
formatando o valor total para duas casas decimais.*/
//---->Start - adding item
let valorTotal = [0, 0];
let valorProduto = [50.00, 30.00];
let qtd = [0, 0];

function adicionarItem(item) {
    let quantidade = document.getElementById('quantidade' + item);
    let total = document.getElementById('total' + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
}//<----End - adding item

//Comentários Para Fins Didáticos;
/* A função "removerItem" diminui a quantidade de um item na lista de compras, se a quantidade atual for maior que zero.

Primeiro, verifica se a quantidade do item é maior que zero para permitir a remoção.

Caso seja, a quantidade é decrementada em 1 e os elementos HTML responsáveis por exibir a quantidade 
e o valor total do produto são atualizados.

A função então recalcula o valor total do item multiplicando o preço do produto pela nova quantidade.

Por fim, o valor total atualizado é exibido, formatado com duas casas decimais.*/
//---->Start - removing item
function removerItem(item) {
    if (qtd[item] > 0) {
        qtd[item] -= 1;
        let quantidade = document.getElementById('quantidade' + item);
        let total = document.getElementById('total' + item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto) * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
    }//<---- End - removing item
}