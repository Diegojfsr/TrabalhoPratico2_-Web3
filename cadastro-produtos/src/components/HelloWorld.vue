<template>
  <div class="hello">
    <h1>{{ titulo }}</h1> <!--Interpola o Titolo dentro do return-->
    <div class="alert alert-warning" role="alert" v-show="produtos.length === 0">
      Não existem Produtos Registrados !
    </div>

    <!--Inicio Formulario cadastro-->
    <div class="form-group">  
      <p>
        <input placeholder="Produto" type="text" 
        v-model="nome" nome="nomeProduto" class="form-control">
      </p>
      <p>
        <input placeholder="Quantide" type="number" 
        v-model="quantidade" nome="qtdProduto" class="form-control">
      </p>
      <p>
        <input placeholder="Valor" type="number" 
        v-model="valor" nome="valProduto" class="form-control">
      </p>
      <button class="btn btn-primary" v-on:click="adicionar(), valorFinal()" >Adicionar</button>

    </div>
    <!--Final Formulario cadastro-->

    <!--Inicio Tabela de Exibition--> 
    <table class="table table-striped" v-show="produtos.length > 0"> 
      <thead>
        <tr>
          <td>Nome</td>
          <td>Quantidade</td>
          <td>Valor</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produto,index) in produtos" v-bind:key="produto.nome">
          <td>{{produto.nome}}</td>
          <td>{{produto.quantidade}}</td>
          <td>{{produto.valor}}</td>
          <td>{{produto.total}}</td>
          <td>
            <button class="btn btn-danger" v-on:click="deletar(index)">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!--<tr v-for="(valor) in valores" v-bind:key="valor.soma"><td>{{ valor.soma }}</td></tr>-->
    <td>
      <div class="input-group mb-3" v-show="produtos.length > 0">
        <button class="btn btn-primary" type="button">Finalizar Compra</button>
        <button class="btn btn-danger" type="button">Cancelar Compra </button>
      </div>
    </td>
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
      titulo:"Cadastro de produtos",  //Titulo q aparece logo abaixo do Logotipo

      //Array q recebe o somatorio dos valores
      valores:[],
      totalSoma:'',

      //Array q recebe os produtos
      produtos:[
        {nome: 'Munitor',qtd:1, val:750, tot: ''},
        {nome: 'Pendrive',qtd:2, val:25, tot: ''},
        {nome: 'Teclado',qtd:3, val:95, tot: ''},
      ],
      nome:'',
      quantidade:'',
      valor:'',
      total:'',
    }
  },
  methods:{
    deletar(parametro){
      //alert(qtd);
      this.produtos.splice(parametro,1)
    },
    adicionar(){
      this.produtos.push({
        nome: this.nome,
        quantidade: this.quantidade,
        valor: this.valor,
        total: this.valor * this.quantidade,
      }); 

    },
    valorFinal(){
      this.valores.push({
        soma: this.valor,
    }); 
     
    


      //Bloco Clodigo Para Limpar os Inputs
      this.nome = '';
      this.quantidade = '';
      this.valor = '';
      this.total = '';
    }
  },
  
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
  color: #b94287;
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
  padding: 20px;
}

.input-group-mb-3-btn-danger{
  color:red;
  background: #b94287;
}

.input-group-mb-3-btn-primary{
  color:rgb(25, 1, 236);
}
.btn:hover{
  color:rgb(255, 230, 230);
}


</style>
