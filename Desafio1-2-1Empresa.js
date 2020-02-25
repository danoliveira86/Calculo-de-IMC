// Desafio para impressão de objetos

const usuario = {
    nome: 'daniel',
    empresa: {
        nome: 'Rocketseat',
        cor: 'roxo',
        foco: 'programação',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}
console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua} no numero ${usuario.empresa.endereco.numero}`)