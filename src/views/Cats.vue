<template>
    <div>
        <!-- <MyHeader title="Cats"/> -->
        <div class="px-4 py-4">
        <button @click="addCat()" class="btn">Add</button>
            <div class="space-y-2 mt-4">
                <div class="" v-for="cat in cats" :key="cat.id">
                    <!-- {{ cat.id }} -->
                    <input class="bg-gray-100 py-2 pl-2 mr-2" type="text" v-model="cat.name">
                    <button class="btn rounded-r-none" @click="updateCat(cat)">Update</button>
                    <button class="btn rounded-l-none bg-black" @click="removeCat(cat)">Delete</button>
                </div>
             </div>
        </div>
    </div>
</template>
<script>

// import MyHeader from '@/components/MyHeader.vue'
import { db } from '@/db'

export default {
    components:{
        // MyHeader
    },
    data: function(){
        return {
             cats: [],
        }
    },
    methods:{
        addCat(){
            db.collection('cats').add({
                name: null,
            })
        },
        updateCat(cat){
            // console.log(this.$firestoreRefs.cats.doc(cat.id))
            this.$firestoreRefs.cats.doc(cat.id).update({ 
                name: cat.name
            }).then(() => {
                console.log('user updated!')
            })
        },
        removeCat(cat){
            this.$firestoreRefs.cats.doc(cat.id).delete()
        }
    },
    mounted(){
       
    },
    firestore: {
        cats: db.collection('cats'),
    },
}
</script>
<style scoped>


</style>