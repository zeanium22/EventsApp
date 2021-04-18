<template>
  <div id="app" class="mx-auto">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link>
    </div> -->

    <router-view />
  </div>
</template>
<script>
import { db } from "@/db";
export default {
  mounted(){
    let list = [{
        name:'Online Career Fair',
        day: '2021-4-2',
        dayString:'Wed 02',
        start:'14',
        end:'16',
        startTime:'2pm',
        endTime:'4pm',
        type: 1
      },{
        name:'IxD Student Meeting',
        day: '2021-4-3',
        dayString:'Wed 02',
        start:'16',
        end:'18',
        startTime:'4pm',
        endTime:'6pm',
        type: 2
      }]
    db.collection("events").add(list[0])
    db.collection("events").add(list[0])
  },
}
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
