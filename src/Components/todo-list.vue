<template>
  <div class="main">
    <todoItem  v-for="(item,index) in todoList" :todo="item" :key="index"></todoItem>
  </div>
</template>

<script>
import todoItem from "./todo-item"
export default {
  name: "todo-list",
  props:{
    todoList:{
      type:Array,
      default:()=>{}
    }
  },
  components:{
    todoItem
  }
}
</script>

<style lang="scss" scoped>
 .main  {
      display: grid;
      row-gap: 14px;
  }
</style>