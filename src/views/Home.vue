<template>
  <div class="container containerTab home">
    <div class="header">
      <router-link to="/home">
        <div class="img-box">
          <img src="../assets/rili.png" alt="">
        </div>
      </router-link>
      <router-link to="/search">
        <div class="img-box">
          <img src="../assets/search.png" alt="">
        </div>
      </router-link>
    </div>
    <div class="week-box flex">
      <div @click="checkWeek(index)" v-for="(item,index) in weeks" :key="index" :class="['week-item',index==weekId?'activeId':'']">
        <p>{{item.week}}</p>
        <p>{{item.day}}</p>
      </div>
    </div>
    <div class="eventsBox">
      <h2 class="title">Upcoming Events</h2>
      <div class="events-box flex flex-row">
        <div class="events-left flex-col">
          <div class="left-item flex flex-col items-center" v-for="(item,index) in events" :key="index">
            <div class="dot" :style="{background:backColor[index%3]}"></div>
            <div v-if="index!=events.length-1" class="line"></div>
          </div>
        </div>
        <div class="events-right">
          <div class="right-item flex flex-col" v-for="(item,index) in events" :key="index">
            <img :src="imgs[index%3]" alt="">
            <div class="right-con">
              <p>{{item.name}}</p>
              <div class="flex-row">
                <span>{{item.dayString}}</span>
                <span class="gang">|</span>
                <span>{{item.startTime}}-{{item.endTime}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/db";
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      backColor:['#FCB500','#FFEEC4','#FFEEC4'],
      searchKey:'',
      weekId:0,
      weeks:[{
        week:'MON',
        day:12
      },{
        week:'TUE',
        day:13
      },{
        week:'WED',
        day:14
      },{
        week:'TUE',
        day:15
      },{
        week:'FRI',
        day:16
      },{
        week:'SAT',
        day:17
      },{
        week:'SUN',
        day:18
      }],
      types:[{
        name:'Career',
      },{
        name:'Clubs',
      },{
        name:'Department',
      },{
        name:'Speaker Series',
      }],
      events:[],
      imgs:[
        require('../assets/img2.png'),
        require('../assets/img.png'),
        require('../assets/img1.png')
      ]
    }
  },
  mounted(){
    
  },
  methods:{
    checkWeek(index){
      this.weekId = index;
    }
  },
  firestore: {
      events: db.collection("events"),
  },
}
</script>
<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
.header .img-box img{
  width: 24px;
  height: 24px;
}
.home{
  padding-left: 30px;
  padding-right: 30px;
}
.week-box{
  margin-top: 25px;
  overflow-x: auto;
}
.week-item{
  width: 62px;
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: 16px;
  border: 1.5px solid #C0C0C0;
  box-sizing: border-box;
  margin-right: 18px;
  color: #7B7B7B;
  flex-shrink: 0;
}
.title{
  font-size: 16px;
  line-height: 19px;
  color: #2E2E2E;
  font-weight: 500;
}

.eventsBox{
  margin-top: 35px;
}
.eventsBox .title{
  margin-bottom: 23px;
}
.left-item .dot{
  width: 21px;
  height: 21px;
  border-radius: 50%;
}
.left-item .line{
  width: 4px;
  height: 190px;
  background: #686868;
}
.events-right{
  flex: 1;
  margin-left: 11px;
}
.right-item{
  height: 188px;
  background: #fff;
  padding: 13px;
  margin-bottom: 24px;
}
.right-item img{
  width: 100%;
  height: 116px;
}
.right-con{
  margin-top: 12px;
  font-size: 16px;
  line-height: 19px;
  color: #2E2E2E;
}
.right-con .gang{
  margin: 0 5px;
}
.right-con>div{
  font-size: 12.8px;
  line-height: 15px;
  color: #9B9B9B;
}
.activeId{
  background: #B7F3FF;
}
</style>
