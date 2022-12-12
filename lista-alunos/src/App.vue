<template>

<div id="app">
  <div class="container grid-xs py-2">
    <img class="img-responsive" src="@/assets/logo.png">
    <!--Inicio Form-->
    <form @submit.prevent="addTarefa(tarefa)">
      <!--Inicio Input-->
      <div class="input-group">
       <input type="text" v-model="tarefa.description" class="form-input" placeholder="Nome Aluno">
       <button class="btn btn-success input-group-btn"><i class="icon icon-arrow-right"></i>Adicionar</button>
      


      </div>
      <!--Inicio Step-->
     <!-- <ul class="step">
        <li class="step-item active">
          <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
        </li>
        <li class="step-item">
          <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
        </li>
        <li class="step-item">
          <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
        </li>
        <li class="step-item">
          <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
        </li>
      </ul>-->
    </form>
    <div class="tarefa-list">
      <tarefa v-for="t in tarefas" :key="t.id" @toggle="toggleTarefa" :tarefa="t"></tarefa>


    </div>
  </div>
</div>

</template>



<script>
  import Tarefa from './components/TarefaComp'


  export default{
    name: 'App',
    components:{
      Tarefa
    },

    data(){
      return{ tarefas: [], tarefa: {checked:false}};
    },
    methods:{
      addTarefa(tarefa){
        tarefa.id=Date.now();
        this.tarefas.push(tarefa);
        this.tarefa={checked:false};

      },
      toggleTarefa(tarefa){
        const index = this.tarefas.findIndex(item=>item.id === tarefa.id)
        if(index>-1){
          const checked = ! this.tarefas[index].checked;
          this.tarefas[index].checked = checked;
        }
      },
    }
  }

</script>



<style scoped>
  img{
    max-width: 150px;
    margin: 0 auto;
  }
  .tarefa-list{
    padding-top: 2rem;
  }
</style>>
