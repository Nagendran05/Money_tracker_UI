<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>

      <form @submit.prevent="login">

        <div class="input-box">
          <input
            type="email"
            v-model="email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div class="input-box">
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <button class="btn" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>

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
      email: "",
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
          email: this.email,
          password: this.password
        });

        // Save Token
        localStorage.setItem("token", res.data.token);

        // Redirect
        this.$router.push("/dashboard");

      } catch (err) {
        this.error = "Invalid Email or Password";
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.login-box {
  width: 350px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

.input-box {
  margin-bottom: 15px;
}

.input-box input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  background: #667eea;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.btn:disabled {
  background: gray;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
