    lista_nome.push(nome) 
    mostrar_nome()        
}

function removerUltimo() {
    lista_nome.pop()           
    mostrar_nome()
}

function adicionarInicio() {
    let nome = document.getElementById('nome_input').value
    lista_nome.unshift(nome)
    mostrar_nome()
}

function removerPrimeiro() {
    lista_nome.shift()         
    mostrar_nome()
}

document.addEventListener("DOMContentLoaded", () => {
    mostrar_nome() 
})

function contarNomes() {
    let contador = 0
    for (let item of lista_nome) {
        if (item.length > 5) {
            contador++
        }
    }
    alert("Existem " + contador + " nomes com mais de 5 letras.")
}

function mostrarMaiusculo() {
    const lista_pagina = document.getElementById('lista')
    lista_pagina.innerHTML = ""

   
    lista_nome.forEach((item) => {
        let elemento = document.createElement('li')
        elemento.innerText = item.toUpperCase() 
        lista_pagina.appendChild(elemento)
    })
}

function filtrarNomes() {
    lista_nome = lista_nome.filter(nome => nome.length > 5)
    mostrar_nome()
}

document.addEventListener("DOMContentLoaded", () => {
    mostrar_nome()
})