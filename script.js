async function mostrarProdutos(){
    const apiURL ="http://10.142.227.110/getall";
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
    produtos.style.display = "flex"
    produtos.innerHTML= "";
    for (let i of dados){
        produtos.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card" style="width: 18rem;">
                <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-galeria-icone_53876-27002.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${i.nome}</h5>
                        <p class="card-text">${i.descricao}</p>
                        <a href="#" class="btn btn-primary">${i.valor}</a>
                    </div>
            </div>
        </div>`
    }
}

function esconderProdutos(){
    product = document.getElementById('produto')
    product.style.display = "none"
}