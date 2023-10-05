function construirTabela(){
    let tabela=document.querySelector("#tabela tbody");
    let produto=document.querySelector("#produto").value;
    tabela.innerHTML="";
    alert(produto);

    let nomes=["Magazine","Tesla","Facebook","Google","TATA","Atos","EliteSoft","Casas Bahia","Casas china","Meta","Senac"];
    let tipoProduto=["Gamer","Escritório","Trabalho","HomeOffice","Longtech","Amazon","Redragon","MotoSpeed","CoolerMaster","Fortrack","Razer"];
      
    for(let i=1;i<=10;i++){
        let preco=(Math.random()*100)+1;   
        
        let conteudo=`<td>${nomes[i]}</td>
        <td>${produto+" "+tipoProduto[i]}</td>
        <td>${"R$"+preco.toFixed(2)}</td>`;
        let linha=document.createElement("tr");
        linha.innerHTML=conteudo;
        tabela.append(linha);
    }
}
document.querySelector(".btn").addEventListener('click',construirTabela);

