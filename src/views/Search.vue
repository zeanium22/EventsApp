<template>
  <div class="container containerTab add">
      <Header/>
      <div>
        <el-input class="type-input" v-model="input" placeholder="Search events..." suffix-icon="el-icon-search"></el-input>
        <div class="type-box">
            <h2>Event Type</h2>
            <div class="flex flex-wrap">
                <div @click="checkType(item)" :class="['type-item',typeId==item.value?'active-type':'']" v-for="(item,index) in types" :key="index">{{item.label}}</div>
            </div>
        </div>
        <div class="type-box">
            <h2>Date</h2>
            <div>
                <div class="flex">
                    <p class="flex-1 text-center">Mo</p>
                    <p class="flex-1 text-center">Tu</p>
                    <p class="flex-1 text-center">We</p>
                    <p class="flex-1 text-center">Th </p>
                    <p class="flex-1 text-center">Fr</p>
                    <p class="flex-1 text-center">Sa</p>
                    <p class="flex-1 text-center">Su</p>
                </div>
                <div class="ca flex flex-wrap">
                    <div @click="checkDay(item)" :class="['day-item', 'flex', 'justify-center', 'items-center',item == dayId?'activeDay':'',index>=30?'gray':'',index<7?'borderT':'',(index+1)%7==0?'borderR':'']" v-for="(item,index) in 35" :key="index"><span>{{item>30?item-30:item}}</span></div>
                </div>
            </div>
        </div>
        <div>
            <div class="add-btn flex justify-center items-center" @click="toSearch"><span>Search</span></div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { db } from "@/db";
export default {
    name: 'Search',
    components: {
        Header,
    },
    data(){
        return{
            typeId:1,
            dayId:1,
            types:[{
                label:'Career',
                value:1
            },{
                label:'Clubs',
                value:2
            },{
                label:'Department',
                value:3
            },{
                label:'Speaker Series',
                value:4
            },{
                label:'Others',
                value:5
            }],
            value: new Date(),
            users:[{
                img:require('../assets/Ellipse8.png')
            }],
            products:[]
        }
    },
    mounted(){
        this.isEdit = this.$route.query.isEdit || false;
    },
    methods:{
        toSearch(){
            this.$router.push({
                path:'/add'
            })
        },
        checkType(item){
            this.typeId = item.value;
        },
        checkDay(item){
            this.dayId = item;
        }
    },
    firestore: {
        products: db.collection("events"),
    },
}
</script>

<style>
.add{
    padding: 0 34px;
}
.type-input{
    margin-top: 20px;
}
.type-box{
    margin-top: 30px;
}
.type-box>div{
    margin-top: 10px;
}
.type-item{
    height: 38px;
    border: 1.5px solid #C0C0C0;
    line-height: 38px;
    padding: 0 15px;
    font-size: 16px;
    color: #7B7B7B;
    margin-right: 20px;
    margin-bottom: 15px;
    box-sizing: border-box;
}
.active-type{
    background: #B7F3FF;
}
.day-item{
    width: 14%;
    height: 46px;
    flex-shrink: 0;
    border-left: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
}
.borderT{
    border-top: 1px solid #c0c0c0;
}
.borderR{
    border-right: 1px solid #c0c0c0;
}
.gray{
    color: #c0c0c0;
}
.add-btn{
    margin-top: 30px;
}
.ca{
    margin-top: 10px;
}
.activeDay{
    background: #B7F3FF;
}
</style>