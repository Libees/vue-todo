<template>
  <main>
    <div class="container">
      <h1>Welcome to use Todo</h1>
      <todoInput @inputTodo="getTodo"></todoInput>
      <todoFilters @getActiveType="getActiveType"></todoFilters>
      <todoList :todo-list="getTodoList"></todoList>
    </div>
  </main>
</template>

<script>
import todoFilters from './Components/todo-filters'
import todoList from "./Components/todo-list"
import todoInput from "./Components/todo-input"
export default {
  data() {
    return {
      activeType:{}
    }
  },
  computed :{
    getTodoList(){
      if(this.activeType.value==='finish'){
        return this.$store.getters.getFinishTodoList
      }
      if (this.activeType.value==='wait'){
        return this.$store.getters.getWaitTodoList
      }
      return this.$store.getters.getAllTodolist
    }
  },
  methods:{
    getTodo(value){
      let temp = JSON.parse(JSON.stringify(value))
      this.$store.commit('addTodoList',temp)
    },
    getActiveType(value){
      this.activeType = value
    }
  },
  components: {
    todoList, todoFilters,todoInput
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

main {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(203, 210, 240);

  .container {
    width: 60%;
    max-width: 400px;
    border-radius: 6px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
    padding: 48px 28px;
    background-color: rgb(245, 246, 252);
  }

  h1 {
    margin: 20px 0;
    font-size: 28px;
    color: #414873
  }

}

</style>
