export const Componente = {
    mostra: function(dado){
        return dado + "1 2 3 testando webpack"
    },
    mostra2: dado => {
        return dado + " funcao em arrow"

    },   
    mostra3: dado => {
        `
            ${dado}
        `

        return

    },
}