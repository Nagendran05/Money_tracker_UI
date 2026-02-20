<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">

    <div class="w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl">

      <!-- Title -->
      <h2 class="mb-6 text-3xl font-bold text-center text-gray-800">
        📝 Create Account
      </h2>

      <!-- Form -->
      <form @submit.prevent="register">

        <!-- Name -->
        <div class="mb-4">
          <label class="block mb-1 text-gray-600">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block mb-1 text-gray-600">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block mb-1 text-gray-600">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <!-- Confirm Password (Optional) -->
        <div class="mb-6">
          <label class="block mb-1 text-gray-600">Confirm Password (Optional)</label>
          <input
            v-model="form.password_confirmation"
            type="password"
            placeholder="Confirm password"
            class="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full py-2 text-white transition duration-300 bg-indigo-500 hover:bg-indigo-600 rounded-xl"
        >
          Register
        </button>

      </form>

      <!-- Login Link -->
      <p class="mt-6 text-center text-gray-500">
        Already have an account?
        <router-link to="/login" class="font-semibold text-indigo-500 hover:underline">
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