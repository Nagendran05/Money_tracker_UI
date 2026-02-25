<template>
  <div class="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-900 via-blue-700 to-cyan-400">

    <div class="w-full max-w-md p-8">

      <h2 class="mb-6 text-3xl font-bold text-center text-white">
         Create Account
      </h2>

      <form @submit.prevent="register">
        <div class="mb-4">
          <input v-model="form.name" type="text" placeholder="Enter your Name" class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <div class="mb-4">
          <input v-model="form.email" type="email" placeholder="Enter your Email" class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <div class="mb-4">
          <input v-model="form.password" type="password" placeholder="Enter your Password" class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <button type="submit" class="w-full py-2 font-semibold text-white transition duration-300 bg-blue-700 rounded-xl">
          Register
        </button>
      </form>

      <p class="mt-6 text-center text-white">
        Already have an account?
        <router-link to="/" class="font-semibold text-indigo-800 hover:underline">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      }
    };
  },
  methods: {
      register() {
      axios.post('http://127.0.0.1:8000/api/register', {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      })
      .then(response => {
        alert(response.data.message)
        this.$router.push('/dashboard')
      })
      .catch(error => {
        console.log(error.response.data)
      })
    }
  }
};
</script>