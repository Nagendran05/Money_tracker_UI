<template>
  <div class="container">

    <!-- Header -->
    <h1>💰 Expense Tracker</h1>

    <!-- Balance -->
    <div class="balance-box">
      <h3>Current Balance</h3>
      <h2>₹ {{ balance }}</h2>
    </div>

    <!-- Income & Expense -->
    <div class="summary">
      <div class="income">
        <h4>Income</h4>
        <p>₹ {{ income }}</p>
      </div>

      <div class="expense">
        <h4>Expense</h4>
        <p>₹ {{ expense }}</p>
      </div>
    </div>

    <!-- Add Transaction -->
    <div class="add-box">
      <h3>Add Transaction</h3>

      <input
        type="text"
        v-model="title"
        placeholder="Title (Salary, Food...)"
      />

      <input
        type="number"
        v-model="amount"
        placeholder="Amount"
      />

      <select v-model="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button @click="addTransaction">Add</button>
    </div>

    <!-- History -->
    <div class="history">
      <h3>History</h3>

      <ul>
        <li
          v-for="(item, index) in transactions"
          :key="index"
          :class="item.type"
        >
          {{ item.title }}
          <span>
            {{ item.type === 'income' ? '+' : '-' }}₹{{ item.amount }}
          </span>

          <button @click="remove(index)">❌</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Dashboard",

  data() {
    return {
      title: "",
      amount: "",
      type: "income",

      transactions: []
    };
  },

  computed: {
    income() {
      return this.transactions
        .filter(t => t.type === "income")
        .reduce((a, b) => a + Number(b.amount), 0);
    },

    expense() {
      return this.transactions
        .filter(t => t.type === "expense")
        .reduce((a, b) => a + Number(b.amount), 0);
    },

    balance() {
      return this.income - this.expense;
    }
  },

  methods: {
    addTransaction() {
      if (!this.title || !this.amount) {
        alert("Fill all fields");
        return;
      }

      this.transactions.push({
        title: this.title,
        amount: this.amount,
        type: this.type
      });

      // Clear
      this.title = "";
      this.amount = "";
      this.type = "income";
    },

    remove(index) {
      this.transactions.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  font-family: Arial;
}

/* Header */
h1 {
  text-align: center;
}

/* Balance */
.balance-box {
  background: #667eea;
  color: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

/* Summary */
.summary {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.income, .expense {
  width: 48%;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.income p {
  color: green;
}

.expense p {
  color: red;
}

/* Add box */
.add-box {
  background: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 0 5px #ccc;
}

.add-box input,
.add-box select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.add-box button {
  width: 100%;
  padding: 8px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
}

/* History */
.history {
  margin-top: 20px;
}

.history ul {
  list-style: none;
  padding: 0;
}

.history li {
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 5px solid;
}

.history li.income {
  border-color: green;
}

.history li.expense {
  border-color: red;
}

.history button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
