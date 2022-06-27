<template>

    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12 col-md-6 offset-md-3">
                <div class="card" style=" margin: auto;">
                    <div class="card-header bg-dark text-light text-center">
                        Signup Form
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter your name">
                                </div>
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter your email">
                                </div>
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter your password">
                                </div>
                                <div class="col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter your confirm password">
                                </div>

                                <div class="col-md-12 mb-3">
                                    <button class="btn btn-success">Signup</button>
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

export default {
    name: "SignUp"
}

</script>

<style scoped>
</style>