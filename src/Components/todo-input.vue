<template>
  <div class="input-add">
    <input type="text" name="todo" v-model="todo.desc" @keyup.prevent.enter="getTodo">
    <button @click="getTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "todo-input",
  data(){
    return {
      todo: {
        desc:'',
        isCheck:false
      }
    }
  },
  methods:{
    getTodo(){
      this.$emit('inputTodo',this.todo)
      this.todo.desc=''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-add {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 14px 52px 14px 10px;
    border-radius: 48px;
    border: none;
    outline: none;
    box-shadow: 10px 10px 24px rgba(0, 0, 0, 0.08);
    font-size: 16px;
    color: #626262
  }

  button {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: none;
    outline: none;
    color: white;
    position: absolute;
    right: 0;
    cursor: pointer;
    background: linear-gradient(#c0a5f3, #7f95f7);

    .plus {
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
      background-size: 50% 2px, 2px 50%;
      background-position: center;
      background-repeat: no-repeat;

    }

  }
}

</style>