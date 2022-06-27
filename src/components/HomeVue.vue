 <template>
    <div>
        <strong> Welcom User, </strong>This is our Home Page
    </div>
</template>

<script>

export default {
    
    name: "HomeVue",
  mounted(){
        const user = localStorage.getItem("user-info")

        if(!user){
            this.$router.push({name: "SignUp"})
        }
    }
}
</script>

<style scoped>
</style>