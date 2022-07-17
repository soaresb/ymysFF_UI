<template>
    <div class="container mt-5">
        <div class="text-center">
            
            <form class="form-login">

                <div class="mb-3">
                    <label for="usernameInput">User name</label>
                    <input v-model="username" type="text" class="form-control form-control-sm" id="usernameInput">
                </div>
                <div class="mb-3">
                    <label for="passwordInput">Password</label>
                    <input v-model="password" type="password" class="form-control form-control-sm" id="passwordInput">
                </div>
                <div class="mb-3" style="text-align: right">
                    <a href="/forgot-password" style="font-size: 12px">Forgot Password?</a>
                </div>
                <div class="mb-3">
                    <button @click="handleLogin">Login</button>
                </div>
            </form>
                

        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginForm',
    props: {
        msg: String
    },
    data(){
        return {
            username : "",
            password : "",
            authorized : false
        }
    },
    mounted() {
        
    },
    methods: {
        clearPassword() {
            this.password = "";
        },
        handleLogin(e) {
            e.preventDefault();
            this.$router.push({ name: "home"});
        }
    }
    
        
}
</script>

<style lang="scss">
    .form-login {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;

        label {
            float: left;
            font-weight: bold;
        }
    }

    .form-login input[type="text"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-login input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .form-login input[type="checkbox"] {
        label {
            color: red;
        }
    }

    .form-login button {
        background-color: rgb(32, 193, 203);
        border-color: rgb(32, 193, 203);
        padding: 5px 50px;
        text-transform: uppercase;
        color: #ffffff;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .form-check-label {
        text-align: left;
    }

    .Vue-Toastification__toast {
        min-width: 300px;
        max-width: 350px;
    }

    .Vue-Toastification__toast--error {
        background-color: rgba(211, 73, 78, .85)
    }

</style>
