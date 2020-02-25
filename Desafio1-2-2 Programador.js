const programador = {
    Nome: 'Daniel',
    idade: 33,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop' },
        {nome: 'JavaScript', especialidade: 'Webmobile' },
        {nome: 'Python', especialidade: 'Data Science' }
    ]
}
console.log(`O grande programador ${programador.Nome} de idade ${programador.idade} tem grandes conheciomentos na tecnologia ${programador.tecnologias[1].nome} que tem como especialidade ${programador.tecnologias[1].especialidade}`)