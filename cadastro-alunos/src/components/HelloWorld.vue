<template>
  <div class="hello">
    <h1>{{ titulo }}</h1>
    <div class="alert alert-warning" role="alert" v-show="alunos.length === 0">
      Não existem registros de Alunos !
    </div>

    <!--Inicio Formulario cadastro-->
    <div class="form-group">  
      <p>
        <input placeholder="Digite a Matricula" type="text" 
        v-model="matricula" nome="matriculaluno" class="form-control">
      </p>
      <p>
        <input placeholder="Digite o Nome" type="text" 
        v-model="nome" nome="nomeAluno" class="form-control">
      </p>
      <p>
        <input placeholder="Digite Nota 1" type="number" 
        v-model="nota1" nome="nota1Aluno" class="form-control">
      </p>
      <p>
        <input placeholder="Digite Nota 2" type="number" 
        v-model="nota2" nome="nota2Aluno" class="form-control">
      </p>
      <p>
        <input placeholder="Digite Nota 3" type="number" 
        v-model="nota3" nome="nota3Aluno" class="form-control">
      </p>

      <button class="btn btn-primary" v-on:click="adicionar(), calcular()">Adicionar</button>
    </div>
    <!--Final Formulario cadastro-->

    <!--Inicio Tabela de Exibition--> 
    <table class="table table-striped" v-show="alunos.length > 0"> <!--Verifica se o array alunos ta vazio-->
      <thead>
        <tr>
          <td>Matricula</td>
          <td>Nome</td>
          <td>Nota1</td>
          <td>Nota2</td>
          <td>Nota3</td>
          <td>Media</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(aluno,index) in alunos" v-bind:key="aluno.matricula">
          <td>{{aluno.matricula}}</td>
          <td>{{aluno.nome}}</td>
          <td>{{aluno.nota1}}</td>
          <td>{{aluno.nota2}}</td>
          <td>{{aluno.nota3}}</td>
          <td>{{aluno.media}}</td>
          <td>
            <button class="btn btn-danger" v-on:click="deletar(index)">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!--Final Tabela de Exibition-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,  
  },
  data(){
    return{
      titulo:"Cadastro de Alunos",  //Titulo q aparece logo abaixo do Logotipo
      alunos:[
        /*{matricula:1, nome: 'Diego', nota1: 7, nota2: 8, nota3: 9, media:''},
        {matricula:2, nome: 'Marcelle', nota1: 8, nota2: 8, nota3: 9, media:''},
        {matricula:3, nome: 'Camille', nota1: 7, nota2: 7, nota3: 9, media:''},*/
      ],
      matricula: '',
      nome: '',
      nota1: '',
      nota2: '',
      nota3: '',
      media: ''
    }
  },
  methods:{
    deletar(parametro){
      //alert(matricula);
      this.alunos.splice(parametro,1)
    },
    adicionar(){
      this.alunos.push({
        matricula: this.matricula,
        nome: this.nome,
        nota1: this.nota1,
        nota2: this.nota2,
        nota3: this.nota3,
        media: (this.nota1 + this.nota2 + this.nota3)/3 
      });
      this.matricula = '';
      this.nome = '';
      this.nota1 = '';
      this.nota2 = '';
      this.nota3 = '';
      this.media = '';
    }, 
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



.form-group {
  grid-column: 1 / 5;
  background-color: #a9f8d4;
  color:rgb(1, 47, 65);
  text-align: center;
  padding: 20px;
}

.table {
  
  background-color: #d8fdec;
  color: rgb(1, 47, 65);
  text-align: center;
  padding: 20%;
}

</style>
