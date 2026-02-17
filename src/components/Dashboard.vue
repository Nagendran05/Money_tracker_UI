<template>
  <div class="flex justify-center min-h-screen px-4 py-10 bg-gray-100">

    <div class="w-full max-w-md p-6 bg-gray-100">


      <h1 class="mb-6 text-3xl font-bold text-center">
        💰 Expense Tracker
      </h1>

      <div class="p-5 mb-6 text-center text-white bg-indigo-500 shadow-md rounded-xl">
        <h3 class="text-sm tracking-wide uppercase">Current Balance</h3>
        <h2 class="mt-2 text-2xl font-bold">₹ {{ balance }}</h2>
      </div>

      <div class="flex justify-between gap-4 mb-6">
        <div class="w-1/2 p-4 text-center">
          <h4 class="text-sm text-gray-500">Income</h4>
          <p class="mt-1 text-lg font-bold text-green-600">
            ₹ {{ income }}
          </p>
        </div>

        <div class="w-1/2 p-4 text-center ">
          <h4 class="text-sm text-gray-500">Expense</h4>
          <p class="mt-1 text-lg font-bold text-red-600">
            ₹ {{ expense }}
          </p>
        </div>
      </div>

      <div class="p-5 mb-6">
        <h3 class="mb-4 font-semibold">Add Transaction</h3>

        <input type="text" v-model="title"
          placeholder="Title (Salary, Food...)"
          class="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <input type="number" v-model="amount" placeholder="Amount" class="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <select v-model="type" class="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button @click="addTransaction" class="w-full py-2 font-semibold text-white transition bg-indigo-500 rounded-lg hover:bg-indigo-600">
          Add
        </button>
      </div>

      <div>
        <h3 class="mb-3 font-semibold">History</h3>

        <ul class="space-y-3">
          <li v-for="(item, index) in transactions" :key="index" class="flex items-center justify-between p-3 border-r-4 rounded-lg"
            :class="item.type === 'income' ? 'border-green-500' : 'border-red-500'">
            <span class="font-medium">
              {{ item.title }}
            </span>

            <div class="flex items-center gap-3">
              <span
                :class="item.type === 'income' ? 'text-green-600' : 'text-red-600'"
                class="font-bold">
                {{ item.type === 'income' ? '+' : '-' }}₹{{ item.amount }}
              </span>

              <button @click="remove(index)"
                class="text-gray-400 transition hover:text-red-500">
                ❌
              </button>
            </div>
          </li>
        </ul>
      </div>
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
          alert("Fill all fields"); return; 
        } 
        this.transactions.push({ title: this.title, amount: this.amount, type: this.type }); 
         
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
