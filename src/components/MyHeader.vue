<template>
    <header class="border-t border-b border-gray-300 py-4 flex flex-col px-6">
        <h1 class="text-5xl font-bold ">{{ myTitle }}</h1>
        <p class="mt-4">{{ myDescription }}</p>


        <input type="text" v-model="myTitle">
        <textarea name="" id="" cols="30" rows="10" v-model="myDescription"></textarea>

    </header>
</template>
<script>
export default {
    // props:{
    //    title: String,
    //    description: String,
    //    dark: Boolean
    // },
    data: function(){
        return {
            myTitle:'Products',
            myDescription: null
        }
    },
}
</script>
<style scoped>

</style>