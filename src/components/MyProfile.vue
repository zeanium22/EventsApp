<template>
	<div class="cat">
		cats  {{ name }}
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				name: 'trevor'
			}
		}
	}
</script>
<style>
	.cat {
		background-color: black;
		color:white;
	}
</style>