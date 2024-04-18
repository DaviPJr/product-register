let produtos = []

const form = document.getElementById("form-produto")
const tableBody = document.getElementById("tabela-produto-body")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const nomeProduto = document.getElementById("nome-produto").value
    const descricaoProduto = document.getElementById("descricao-produto").value
    const valorProduto = parseFloat(document.getElementById("valor-produto").value)
    const disponivelProduto = document.getElementById("disponivel-produto").value

    const produto = {
        nome: nomeProduto,
        descricao: descricaoProduto,
        valor: valorProduto,
        disponivel: disponivelProduto === "sim" ? true : false
    }

    produtos.push(produto)

    mostrarProdutos()

    form.reset()

})

function mostrarProdutos() {
    produtos.sort((a, b) => b.valor - a.valor)

    tableBody.innerHTML = " "

    produtos.forEach(produto => {
        const linha = `<tr>
                        <td>${produto.nome}</td>
                        <td>${produto.valor.toFixed(2)}</td>
                      </tr>`;
                    tableBody.innerHTML += linha;

    
})}

mostrarProdutos() 