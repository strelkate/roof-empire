<template>
	<div class="main">
		<MainFirstPage/>
		<MainSecondPage/>
		<MainThirdPage/>
	</div>
</template>

<script>
import MainFirstPage from "./MainFirstPage";
import {mapActions} from 'vuex';
import MainThirdPage from "./MainThirdPage";
import MainSecondPage from "./MainSecondPage";

export default {
	name: "Main",
	components: {MainSecondPage, MainThirdPage, MainFirstPage},
	methods: {
		...mapActions(['routerPush']),
	},
}
</script>

<style lang="scss">


</style>
