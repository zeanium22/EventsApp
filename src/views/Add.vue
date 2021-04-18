<template>
  <div class="container containerTab add">
      <Header/>
      <el-form ref="form" label-position="top" :model="form" label-width="80px">
        <el-form-item label="Event Name">
            <el-input v-model="form.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item label="Date and Time">
            <div style="width:100%">
                <el-date-picker
                    style="width:100%"
                    v-model="form.day"
                    type="date"
                    placeholder="Date">
                </el-date-picker>
            </div>
            <div class="time-box flex items-center">
                <el-time-picker
                    prefix-icon="none"
                    value-format="h"
                    format="h A"
                    v-model="form.start"
                    placeholder="Start time">
                </el-time-picker>
                <div class="line"></div>
                <el-time-picker
                    prefix-icon="none"
                    value-format="h"
                    format="h A"
                    v-model="form.end"
                    placeholder="End time"
                    :picker-options="{
                        minTime: form.start
                    }">
                </el-time-picker>
            </div>
        </el-form-item>
        <el-form-item label="Event Type">
            <el-select style="width:100%" v-model="form.type" clearable placeholder="Please">
                <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <div class="title-box flex justify-between items-center">
                <h2>Participants</h2>
                <div v-if="isEdit">Invite</div>
            </div>
            <div class="flex justify-between">
                <div class="user-box flex flex-col items-center" v-for="(item,index) in users" :key="index">
                    <img :src="item.img"/>
                    <div v-if="isEdit">
                        <img src="../assets/Vector5.png"/>
                    </div>
                </div>
            </div>
        </el-form-item>
        <div v-if="!isEdit">
            <div class="add-btn flex justify-center items-center" @click="toAdd"><span>Add</span></div>
        </div>
        <div class="edit-box flex justify-between" v-if="isEdit">
            <div class="add-btn del-btn flex justify-center items-center"><span>Delete</span></div>
            <div class="add-btn flex justify-center items-center" @click="toBack"><span>Done</span></div>
        </div>
      </el-form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { db } from "@/db";
export default {
    name: 'Add',
    components: {
        Header,
    },
    data(){
        return{
            weeks:['MON','TUE','WED','TUE','FRI','SAT','SUN'],
            isEdit: false,
            form:{},
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
            users:[{
                img:require('../assets/Ellipse11.png'),
            },{
                img:require('../assets/Ellipse7.png'),
            },{
                img:require('../assets/Ellipse8.png'),
            },{
                img:require('../assets/Ellipse10.png'),
            }],
            products:[]
        }
    },
    mounted(){
        this.isEdit = this.$route.query.isEdit || false;
        this.form = JSON.parse(this.$route.query.item) || {}
        // console.log(this.form)
    },
    methods:{
        toAdd(){
            console.log(this.form.day)
            if(!this.form.name){
                this.$message({
                    message:'Please input Event Name',
                    offset:100
                });
                return false;
            }
            if(!this.form.day || !this.form.start || !this.form.end){
                this.$message({
                    message:'Please select Date and Time',
                    offset:100
                });
                return false;
            }
            if(!this.form.type){
                this.$message({
                    message:'Please select Event Type',
                    offset:100
                });
                return false;
            }
            let week=this.form.day.getDay();
            let day = this.form.day && this.form.day.getDate()
            let date = this.form.day.getFullYear()+'-'+this.form.day.getMonth()+1+'-'+day;
            let dayString = this.weeks[week-1]+' '+day;
            let startTime = this.form.start>12?this.form.start+'pm':this.form.start+'am';
            let endTime = this.form.end>12?this.form.end+'pm':this.form.end+'am';
            // let startTime = (startH<10?'0'+startH:startH)+':'+(startM<10?'0'+startM:startM);
            // let endTime = (endH<10?'0'+endH:endH)+':'+(endM<10?'0'+endM:endM);
            // console.log(startH,startM,endH,endM)
            // console.log(dayString,startTime,endTime)
            db.collection("events").add({
                name: this.form.name,
                date: date,
                dayString:dayString,
                start:this.form.start,
                end:this.form.end,
                startTime:startTime,
                endTime:endTime,
                type:this.form.type
            });
            this.$alert('Success', 'Tips', {
                confirmButtonText: 'Sure',
                callback: () => {
                    this.form={}
                }
            });
        },
        toBack(){
            this.$router.go(-1)
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
.time-box{
    margin-top: 10px;
}
.time-box .line{
    width: 25px;
    height: 2px;
    background: #C0C0C0;
    margin: 0 10px;
}
.title-box div{
    color: #54E2FF;
}
.user-box>img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.user-box>div img{
    width: 19px;
    height: 17px;
    margin-top: 10px;
}
.el-input,.el-date-editor--time{
    height: 53px!important;
}
.el-input input,.el-date-editor--time .el-input__inner{
    height: 100%!important;
}
.el-icon-date{
    /* width: 24px!important; */
    /* height: 24px!important; */
}
.add-btn{
    width: 100%;
    height: 42px;
    background: #54E2FF;
    font-size: 16px;
    color: #fff;
    margin-bottom: 50px;
}
.edit-box>div{
    width: 107px!important;
}
.edit-box .del-btn{
    border: 2px solid #FF9696;
    color: #FF9696;
    background: none;
}
</style>