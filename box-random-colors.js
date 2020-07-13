// document.querySelector seleciona um elemento / selecionar elemento
const btn = document.querySelector("#botao");

// document.createElement cria um elemento / criar um elemento
const outraDiv = document.createElement("div");

// é possivel acessar o stilo dos elementos.
outraDiv.style.display = "grid";
outraDiv.style.gridTemplateColumns = "0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr";
outraDiv.style.justifyContent = "center";

// documentl.querySelectorAll seleciona todos os elementos e retorna um vetor.
// é necessário utilizar iterações para acessar os atributos dos elementos do vetor.
const box = document.querySelectorAll(".square");

function RandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        // estudar melhor math.floor e math.random.
        color += letters[Math.floor(Math.random() * 16)];
    }
return color;
}
btn.onclick = () => {
    const criarDiv = document.createElement("div");
    // document.setAtribute cria um atributo ao elemento desejado.
    criarDiv.setAttribute("class", "square")

    const tagBody = document.querySelector("body");
    // appendChild torna o elemento filho de outro
    tagBody.appendChild(outraDiv);
    outraDiv.appendChild(criarDiv);

    const box = document.querySelectorAll(".square");
    for(let i = 0; i < box.length; i++){
        if(i % 2 == 0)    {
            box[i].style.width = "100px";
            box[i].style.height = "100px";
            box[i].style.backgroundColor = "red";
        }else{
            box[i].style.width = "100px";
            box[i].style.height = "100px";
            box[i].style.backgroundColor = "blue";
        }
    }
    for(let i = 0; i < box.length; i++){
        box[i].onmouseover = () => {
            box[i].style.backgroundColor = RandomColor();
        }
    }    
}

let nomes = [];
