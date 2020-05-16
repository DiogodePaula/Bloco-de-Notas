const lista = [];

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
        document.getElementById("divPai").innerHTML = "";
        
        const blocoNotas = {
            titulo: this.titulo.value,
            conteudo: this.conteudo.value,
            data: this.data.value,
            hora: this.hora.value
        }
        
        if(blocoNotas.titulo && blocoNotas.conteudo && blocoNotas.data && blocoNotas.hora){
            lista.push(blocoNotas); 
        } else {
            alert("Preencha todos os campos!");
        } 
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
       
    }

    contar(){

        document.getElementById("divFilhoContador").innerHTML = `
        <label class="contador">
        Quantidade de Notas ${lista.length}
        </label>
        `
    }

}
new BlocoDeNotas();