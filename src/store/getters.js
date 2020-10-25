export default {
    getAllTodolist(state){
        return state.todoList
    },
    getFinishTodoList(state){
        let temp = []
        state.todoList.forEach(item=>{
            if(item.isCheck){
                temp.push(item)
            }
        })
        return temp
    },
    getWaitTodoList(state){
        let temp=[]
        state.todoList.forEach(item=>{
            if(!item.isCheck){
                temp.push(item)
            }
        })
        return temp
    }
}