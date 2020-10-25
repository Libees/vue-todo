<template>
  <div class="filters">
    <span class="filter" :class="{'active':flag === index}" v-for="(item,index) in type" :key="item.value" @click="onActive(index)">{{item.label}}</span>
  </div>
</template>

<script>
export default {
  name: "todo-filters",
  data() {
    return {
      flag:0,
      type: [{
        label: '全部',
        value: 'all'
        },{
        label:'已完成',
        value:'finish'
      },{
        label:'未完成',
        value:'wait'
      }]
    }
  },
  methods:{
    onActive(index){
      this.flag = index
      this.$emit('getActiveType',this.type[this.flag])
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
}

.filter {
  margin-right: 14px;
  transition: 0.4s;
  cursor: pointer;
}

.active {
  color: #6b729c;
  font-weight: bold;
  transform: scale(1.2);
}
</style>