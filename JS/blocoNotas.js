class BlocoDeNotas{
    constructor(){
        
        this.titulo = document.getElementById("txtTitulo");
        this.conteudo = document.getElementById("txtConteudo");
        this.data = document.getElementById("txtData");
        this.hora = document.getElementById("txtHora");
        this.btnAdicionar = document.getElementById("btnAdicionar");
        this.btnContar = document.getElementById("btnContar");
        this.apertaBotao();
    }

    apertaBotao(){
        this.btnAdicionar.onclick = event => this.adicionar();
        this.btnContar.onclick = event => this.contar();
    }

    adicionar(){
        const lista = [];

        const blocoNotas = {
            titulo: this.titulo.value,
            conteudo: this.conteudo.value,
            data: this.data.value,
            hora: this.hora.value
        }
        
        lista.push(blocoNotas);
        console.log(lista);

        for(let i = 0; i < lista.length; i++){
            document.getElementById("divPai").innerHTML += `
            <label class="lbljs">
            Titulo: 
            ${lista[i].titulo}
            <br>
            Conteúdo: 
            ${lista[i].conteudo}
            <br>
            Data: 
            ${lista[i].data}
            <br>
            Hora: 
            ${lista[i].hora}
            </label>
            `
        }
        contar();
    }

    contar(){
        document.getElementById("divFilhoContador").innerHTML = `${lista[i].length}`
    }

}
new BlocoDeNotas();