<template>
    <div class="headerContainer">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add-resturant">Add Resturant</router-link></li>
        <li><router-link to="/update-resturant">Update Resturant</router-link></li>
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
    transition: 0.3s;
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