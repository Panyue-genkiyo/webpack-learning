<template>
      <div>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="student in students" :key="student.id">
                {{student.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      title: 'wust university',
      students:[
        {id: 1, name:'张三'},
        {id: 2, name:'李四'},
        {id: 3, name:'王五'},
        {id: 4, name:'hello'},
        {id: 5, name: 'py'}
      ]
    }
  }
};
</script>

<style scoped>

</style>