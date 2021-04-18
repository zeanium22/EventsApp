<template>
    <div>
        <section class="py-24">
            <h1 class="text-5xl font-bold text-red-500">Account</h1>
        </section>

        <section class="bg-black py-24">
            <h1>Account 2</h1>
        </section>
       
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nulla eaque corporis placeat quas architecto non! Cupiditate commodi expedita repellendus omnis vel laudantium? Porro, non quia a ipsum nesciunt sequi?</p>

        <input type="text" v-model="firstName">

        <input type="text" v-model="lastName">

        hello {{ firstName }} {{ lastName }}


    </div>
</template>
<script>
export default {
    data:function(){
        return {
            // models aka vue variables 
            firstName: 'trevor',
            lastName: 'Cat'
        }
    }

}
</script>
<style scoped>

</style>