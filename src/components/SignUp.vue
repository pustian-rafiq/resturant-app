<template>

    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12 col-md-6 offset-md-3">
                <div class="card" style=" margin: auto;">
                    <div class="card-header bg-dark text-light text-center">
                        Signup Form
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="signUp">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" v-model="name" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter your name">
                                </div>
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" v-model="email" class="form-control"
                                        id="exampleFormControlInput1" placeholder="Enter your email">
                                </div>
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" v-model="password" class="form-control"
                                        id="exampleFormControlInput1" placeholder="Enter your password">
                                </div>
                                <!-- <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter your confirm password">
                                </div> -->

                                <div class="col-md-12 mb-3">
                                    <button type="submit" class="btn btn-success">Signup</button>
                                    <!-- <button v-on="signUp" class="btn btn-success">Signup</button> -->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </div>



</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",

    data: function () {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            })
            // We can also then and catch follwing the axios instead of async await
            console.log(result)
            if (result.status == 201) {
               // alert("Signup successfully done.")
                //save user info into his localstorage
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: "HomeVue"})
            }
        }
    },
    mounted(){
        const user = localStorage.getItem("user-info")

        if(user){
            this.$router.push({name: "HomeVue"})
        }
    }
}

</script>

<style scoped>
</style>