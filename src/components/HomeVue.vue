 <template>
    <Header></Header>
    <div class="container mt-3">
        <strong> Welcom {{ name }}, </strong>List of the Restaurant
        <table class="table table-bordered table-hover mt-3">
            <thead>
                <tr>
                    <th>SL No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in restaurant" :key="index">
                    <td>{{index}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.contract}}</td>
                    <td>{{item.address}}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {

    name: "HomeVue",
    components: {
        Header
    },
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    async mounted() {
        const user = localStorage.getItem("user-info")
        this.name = JSON.parse(user)[0].name;
        //User object k array te convert kore JSON.parse()
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }

        //Fetch all restaurant data
        const restaurant = await axios.get("http://localhost:3000/resturant")
        console.log(restaurant)
        this.restaurant = restaurant.data
    }
}
</script>

<style scoped>
</style>