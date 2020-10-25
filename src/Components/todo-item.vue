<template>
    <div class="todo-item" >
      <label :class="{'done':todo.isCheck}"  >
        <input type="checkbox" :checked="todo.isCheck" @click="todo.isCheck = !todo.isCheck">
        {{ todo.desc }}
        <span class="check-button"></span>
      </label>
    </div>
</template>

<script>
export default {
  name: "todo-item",
  props:{
    todo:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    changeCheck(){
      console.log(this.todo.isCheck)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-item{
  box-sizing: border-box;
  width:100%;
  background-color:white;
  padding: 10px;
  border-radius: 8px;
  label {
    position: relative;
    display: flex;
    align-items: center;
  }
  .check-button {
    position: absolute;
    top:0;
  }
  .check-button::before,.check-button::after {
    display: block;
    content: " ";
    width:16px;
    height: 16px;
    border-radius: 50%;
    border:1px solid  #b382f9;
    position: absolute;
  }

  .check-button::after {
    transform: scale(0.6);
    transition: 0.5s;
    background-color: #b382f9;
    opacity: 0;
  }

  input:checked + .check-button::after {
    opacity: 1;
  }

  input {
    text-decoration:line-through;
    margin-left: 10px;
    opacity: 0;

  }
  .done {
    text-decoration: line-through;
    font-style: italic;
  }
}
</style>