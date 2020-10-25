export default  {
    addTodoList(state,item){
        state.todoList.push(item)
    },
    deleteTodoList(state,index){
        state.todoList.splice(index,0);
    }
}