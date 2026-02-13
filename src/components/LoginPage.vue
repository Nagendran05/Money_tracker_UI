<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
    
    <div class="w-[350px] bg-white p-8 rounded-xl shadow-2xl text-center">
      <h2 class="text-2xl font-bold mb-6 text-gray-700">Login</h2>

      <form @submit.prevent="login" class="space-y-4">

        <!-- Phone -->
        <div>
          <input
            type="text"
            v-model="phone"
            placeholder="Enter Phone Number"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Password -->
        <div>
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition duration-300 disabled:bg-gray-400"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm mt-2">
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
