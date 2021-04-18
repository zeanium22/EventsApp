<template>
<div>

    <h1>Demo</h1>
     {{ myDropDown }}
    <div class="relative">
        <button @click="myDropDown = !myDropDown" class="btn">DropDown</button>
        <div v-if="myDropDown" class="bg-white shadow-lg absolute p-4 w-32 dropdown">
            <ul class="space-y-2">
                <li><a href="">Profile</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Settings</a></li>
                <li><a href="">Logout</a></li>
            </ul>
        </div>
    </div>

    <h1>{{ name }}</h1>
    <p> {{ email }} </p>
    <button class="btn" @click="toggleCatDropDown()">Do it</button>


    
    <h1 class="text-7xl font-bold">{{ count }}</h1>
    <button class="btn" @click="addBy(4)">Add 4</button>

    <button class="btn" @click="addBy(5)">Add 5</button>

    {{ makeCake('blue','small',['frank','Sam','Beth', 1, {'name':'Trevor'}]) }}


    <!-- <h2 class="font-bold"> {{ makeCake('coco','small') }}</h2>

     <h2 class="font-bold"> {{ makeCake('vanilla', 'large') }}</h2>
  -->
</div>
</template>
<script>
export default {
    data:function(){
        return {
            // vue models or vue variables
            myDropDown: false,
            name:'BabaDo',
            email: 'BabaCat@gmail.com',
            count: 10
        }
    },
    methods:{
        toggleCatDropDown(){
            var name = this.name +' '+this.email
            alert(name)
            this.myDropDown = true
        },
        addBy(amount){
            this.count += amount
        },
        makeCake(type, size, users){
            return users
            // return size +' '+type +' cake'
        }
    }
}
</script>
<style scoped>
    .dropdown a:hover {
        color:blue;
    }
</style>