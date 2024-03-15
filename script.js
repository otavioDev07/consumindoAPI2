async function mostrarProdutos(){
    const apiURL ="https://7c50d5bb-c1cf-4c6e-9074-712d61828b26-00-3ulv4zods9g96.kirk.replit.dev/getall";
    let dados = [];
    try{
        const consulta = await fetch(apiURL);
        console.log(consulta);
        dados = await consulta.json();
        console.log(dados);
        atualizaLista(dados);
        if (!consulta.ok){
            console.log("A API não está respondendo!");
        }
        }
    catch (error){
        console.error("Erro ao buscar informações", error);
    }
    }

function atualizaLista(dados){
    let produtos = document.getElementById("produto");
    produtos.innerHTML= "";
    for (let i in dados){
        console.log(i)
        produtos.innerHTML += `Produto: ${i.nome}`;
    }
}