<template>
	<div class="app">
		<Nav :is-header="true"/>
			<router-view/>
		<Footer :is-footer="true"/>
	</div>
</template>

<script>
import Nav from "./ui/Nav"
import Footer from "./ui/Footer";
export default {
	name: 'App',
	components: {Footer, Nav},
}
</script>

<style>
.app {
	height: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
