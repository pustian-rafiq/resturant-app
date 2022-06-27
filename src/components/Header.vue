<template>
    <div class="headerContainer">
        <li><a href="">Home</a></li>
        <li><a href="">Add Resturant</a></li>
        <li><a href="">Update Resturant</a></li>
        <li><a v-on:click="Logout" href="#">Logout</a></li>
    </div>
</template>

<script>

export default{
    name: "Header",

    methods:{
        Logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style scoped>

.headerContainer{
    display: flex;
    background-color: rgb(31, 31, 31);
    height: 50px;
}
.headerContainer li{
    list-style: none;
    padding: 10px 20px;
}
.headerContainer li a{
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
}
.headerContainer li:hover{
    background-color: #bbb8b8;
}
</style>