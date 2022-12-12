<!-- eslint-disable vue/multi-word-component-names -->
<template>


    <div class="tile flex-centured" :class="{checked: tarefa.checked}">
        <dir class="tile-content">
            <div class="tile-subtitle">{{tarefa.description}}</div>
           <!-- <div>{{tarefa.checked}}</div>   -->
        </dir>
        <div class="tile-action">
            <button @click="$emit('toggle',tarefa)" class="btn btn-primary">
                <span v-if="tarefa.checked">Desmarcar</span>
                <span v-else>Concluido</span>
            </button>

            <button class="btn btn-error">Remover</button>
        </div>
    </div>

</template>



<script>
    export default {
        name:"TarefaComp",
        props:{
            tarefa:{type:Object, required:true}
        }
    };
</script>



<style scoped>
    .checked{
        text-decoration: line-through;
        color: lightgrey;
    }
</style>