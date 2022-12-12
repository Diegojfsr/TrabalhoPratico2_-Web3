<template>
  <div id="main">
    <h3>Nome Aluno</h3>
    <InputTarefas @novaTarefa="addTarefa"></InputTarefas>



    <ListaTarefas :listaItem="tarefas"></ListaTarefas>
  </div>
</template>

<script>
import InputTarefas from './components/InputTarefas.vue'
import ListaTarefas from './components/ListaTarefas.vue';

export default {
  name: 'App',
  components: {
    InputTarefas,
    ListaTarefas
  },
  data(){
    return{
      tarefas: []
    }
  },
  methods:{
    addTarefa(tarefa){
      this.tarefas.push(tarefa);
      console.log(this.tarefas);
    }
  }
}
</script>

<style>
#main{
  width: 75%;
  margin: auto;
}
</style>
