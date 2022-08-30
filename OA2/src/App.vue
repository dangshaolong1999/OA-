<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
body,
html {
	width: 100%;
	// height: 100%;
	min-height: 100vh;
}
#app {
	width: 100%;
	// height: 100%;
	// position: absolute;
	min-height: 100vh;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
a {
	text-decoration: none;
}
li {
	list-style: none;
}
</style>
