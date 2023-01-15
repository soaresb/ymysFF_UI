<template>
	<div class="container">
		<navbar />
		<router-view/>
	</div>
  
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
	name: 'App',
	components: {
		Navbar
	},
	created() {

    },
    data() {
        return {
            
        }
    },
    props: {
        player: {}
    },
    mounted() {
        
    },
    methods: {
		
    }
}
</script>

<style>

@import './styles/bootstrap/_variables.scss';

#app {
	text-align: center;
	margin-top: 60px;
}
</style>
