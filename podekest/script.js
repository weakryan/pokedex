let mostrarPoke = document.querySelector(".mostrarPoke")
let select = document.querySelector("#select");
let selectPoke = document.querySelector(".selectPoke");
let urlLista = "https://pokemon.danielpimentel.com.br/v1/pokemon/lista"

fetch("https://pokemon.danielpimentel.com.br/v1/pokemon/lista")
    .then(resposta => resposta.json())
    .then(pokemon => {
        let listinha = "";
        
        for (let i = 0; i < pokemon.pokemon.length; i++) {
            listinha += `<option value="${pokemon.pokemon[i].nome}">${pokemon.pokemon[i].nome}</option>`;
        }
        
        select.innerHTML = '<option value="">Escolha um Pokémon</option>' + listinha;
        select.addEventListener("change", function() {
            const nomePk = select.value;
            fetch(`https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${nomePk}`)
            .then(resposta2 => resposta2.json())
            .then(mPK => {
                mostrarPoke.innerHTML = 
                `<H1> |${nomePk}|</H1>
                <img src="${mPK.pokemon.img}" alt="">
                <img src="${mPK.pokemon.img_3d}" alt=""> 
                <img src="${mPK.pokemon.img_shiny}" alt=""><br>
                <p><b>Tipo:${mPK.pokemon.tipo}</b></p>
                <br>
                
                <div id="caract">
                    <div class="colum1">
                        <p> Altura: ${mPK.pokemon.altura}cm</p>
                        <p> Peso: ${mPK.pokemon.peso}kg</p>
                        <p> Geração: ${mPK.pokemon.geracao}</p>
                        <p> Vida: ${mPK.pokemon.hp} </p>
                        <p> Pontos de Ataque: ${mPK.pokemon.atk} </p>
                    </div>
                    <div class="colum2">
                        <p> Pontos de Defesa:  ${mPK.pokemon.def} </p>
                        <p> Pontos de Velocidade: ${mPK.pokemon.speed}</p>
                        <p> Pontos de Defesa (Especial):  ${mPK.pokemon.spdef}</p>
                        <p> Pontos de Ataque (Especial): ${mPK.pokemon.spatk} </p>
                        <p> Evoluções: ${mPK.pokemon.evolucoes} </p>
                    </div>`;
            })
    .catch(erro => console.error(erro))
        })
    })











      

