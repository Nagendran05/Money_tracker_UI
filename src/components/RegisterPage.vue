<template>
  <div class="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-900 via-blue-700 to-cyan-400">

    <div class="w-full max-w-md p-8">

      <!-- Title -->
      <h2 class="mb-6 text-3xl font-bold text-center text-white">
         Create Account
      </h2>

      <!-- Form -->
      <form @submit.prevent="register">

        <!-- Name -->
        <div class="mb-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Confirm Password (Optional) -->
        <div class="mb-6">
          <input
            v-model="form.password_confirmation"
            type="password"
            placeholder="Confirm password"
            class="w-full px-4 py-2 text-white border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full py-2 font-semibold text-white transition duration-300 bg-blue-700 rounded-xl"
        >
          Register
        </button>

      </form>

      <!-- Login Link -->
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
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    register() {
      console.log("Register Data:", this.form);

      // optional validation
      if (!this.form.email || !this.form.password) {
        alert("Email & Password required!");
        return;
      }


    }
  }
};
</script>