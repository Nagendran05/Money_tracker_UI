<template>
  <div class="flex items-center justify-center min-h-screen bg-linear-to-r from-indigo-500 to-purple-600">
    
    <div class="w-87.5  p-8 rounded-xl  text-center">
      <h2 class="mb-6 text-2xl font-bold text-gray-700">Welcome To <br> <span>Money Tracker</span> </h2>

      <form @submit.prevent="login" class="space-y-4">

   
        <div>
          <input
            type="text"
            v-model="phone"
            placeholder="Enter Phone Number"
            required
            class="w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

         
        <div>
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            required
            class="w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

     
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-2 font-semibold text-white transition duration-300 bg-indigo-500"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

   
        <p v-if="error" class="mt-2 text-sm text-red-500">
          {{ error }}
        </p>

      </form>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      phone: "",
      password: "",
      loading: false,
      error: ""
    };
  },

  methods: {
    async login() {
      this.loading = true;
      this.error = "";

      try {
        const res = await axios.post("http://127.0.0.1:8000/api/login", {
          phone: this.phone,
          password: this.password
        });

        localStorage.setItem("token", res.data.token);
        this.$router.push("/dashboard");

      } catch (err) {
        this.error = "Invalid Phone Number or Password";
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
