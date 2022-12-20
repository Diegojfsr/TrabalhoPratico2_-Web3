<template>
  <div class="hello">
    <h1>{{ titulo }}</h1>
    <!--<div class="alert alert-warning" role="alert" v-show="valores.length === 0">
      Não existem registros de valores !
    </div>-->

    <!--Inicio Formulario cadastro-->
    <div class="form-group">  
      <td>{{exibirTabuada}}</td>
      <p>
        <input placeholder="Digite a tabuada" type="text" 
        v-model="tabuada" inicio="tabuada" class="form-control">
      </p>
      <p>
        <input placeholder="Digite o inicio" type="number" 
        v-model="inicio" inicio="inicio" class="form-control">
      </p>
      <p>
        <input placeholder="Digite o final" type="number" 
        v-model="final" inicio="final" class="form-control">
      </p>

      <button class="btn btn-primary" v-on:click="calcular()" v-show="valores.length === 0">Calcular</button>
    </div>
    <!--Final Formulario cadastro-->

    <!--Inicio Tabela de Exibition--> 
    <table class="table table-striped" v-show="valores.length > 0"> <!--Verifica se o array valores ta vazio-->
      <thead>
        <tr>
          <td>tabuada</td>
          <td>inicio</td>
          <td>final</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(valor,index) in valores" v-bind:key="valor.tabuada">
          <td>{{valor.tabuada}}</td>
          <td>{{valor.inicio}}</td>
          <td>{{valor.final}}</td>
          <td>
            <button class="btn btn-danger" v-on:click="resetar(index)">Resetar</button>
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
    //msg: String,  
  },
  data(){
    return{
      titulo:"Gerador de Tabuada",  //Titulo q aparece logo abaixo do Logotipo
      valores:[]
    }

  },
  methods:{
    resetar(parametro){
      //alert(tabuada);
      this.valores.splice(parametro,1)
    },
    calcular(){
      this.valores.push({
        tabuada: this.tabuada,
        inicio: this.inicio,
        final: this.final,
        saida:this.saida()
      })
      //Bloco Clodigo Para Limpar os Inputs
      this.tabuada = '';
      this.inicio = '';
      this.final = '';
      this.saida = '';
    },


    saida(){
      this.tab = this.tabuada;
      this.inc = this.inicio;
      this.fin = this.final;

      for(var i = this.inc; i<= this.fin; i++){
      document.write (this.tab + "x" + i + "=" + (this.tab*i) + "<br>");
      //alert (this.tab + "x" + i + "=" + (this.tab*i) + "<br>");
      } 
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
