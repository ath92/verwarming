<template>
	<div>
		<h1 :class="classObject" @click="changeText">Hoi {{ extraText }}</h1>
		<button @click="toggleUpsideDown">ondersteboven</button>
	</div>
</template>

<script>
export default {
	data: () => ({
		extraText: 'Banaan',
		classOn: false,
	}),
	computed: {
		classObject() {
			return { 'upside-down': this.classOn };
		}
	},
	methods: {
		changeText() {
			this.extraText += '!';
		},
		toggleUpsideDown() {
			this.classOn = !this.classOn;
		}
	}
}
</script>

<style scoped>

.upside-down{
	transform: rotateX(180deg);
}

</style>