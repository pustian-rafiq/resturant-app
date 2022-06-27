 <template>
 <Header></Header>
    <div>
        <strong> Welcom User, </strong>This is our add Resturant Page
    </div>
</template>

<script>
import Header from '../Header.vue'
export default {
    
    name: "HomeVue",
    components:{
        Header
    },
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