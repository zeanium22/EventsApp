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
    <div class="ava-box flex flex-col items-center">
      <img src="../assets/Ellipse9.png" alt="">
      <h2>Chris Smith</h2>
    </div>
    <div class="eventsBox">
      <h2 class="title">Hosted by me</h2>
      <div class="events-box flex flex-row">
        <div class="events-right">
          <div class="right-item flex flex-col" v-for="(item,index) in hosted" :key="index">
            <img :src="imgs[index%3]" alt="">
            <div class="right-con">
              <p>{{item.name}}</p>
              <div class="flex items-center justify-between">
                <div>
                  <span>{{item.dayString}}</span>
                  <span class="gang">|</span>
                  <span>{{item.startTime}}-{{item.endTime}}</span>
                </div>
                <div class="edit" @click="toEdit(item)">Edit</div>
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
  name: 'User',
  components: {
  },
  data(){
    return{
      imgs:[
        require('../assets/img2.png'),
        require('../assets/img.png'),
        require('../assets/img1.png')
      ],
      hosted:[]
    }
  },
  mounted(){
    // let list =[{
    //     name:'Online Career Fair',
    //     day: '2021-4-2',
    //     dayString:'Wed 02',
    //     start:'14',
    //     end:'16',
    //     startTime:'2pm',
    //     endTime:'4pm',
    //     type: 1
    //   },{
    //     name:'IxD Student Meeting',
    //     day: '2021-4-3',
    //     dayString:'Wed 02',
    //     start:'16',
    //     end:'18',
    //     startTime:'4pm',
    //     endTime:'6pm',
    //     type: 2
    //   }]
    // db.collection("hosted").add(list[0])
    // db.collection("hosted").add(list[1])
  },
  methods:{
    toEdit(item){
      this.$router.push({
        path:`/add?isEdit=true&item=${JSON.stringify(item)}`
      })
    }
  },
  firestore: {
      hosted: db.collection("events"),
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
.events-right{
  flex: 1;
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
.right-con>div{
  font-size: 12.8px;
  line-height: 15px;
  color: #9B9B9B;
}
.right-con .edit{
  color: #54E2FF;
}

.ava-box img{
  width: 106px;
  height: 106px;
  margin-top: 32px;
}
.ava-box h2{
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #2E2E2E;
  margin-top: 13px;
}
.right-con .gang{
  margin: 0 5px;
}
</style>
