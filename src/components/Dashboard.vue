<template>
  <div class="min-h-screen bg-gray-100 flex justify-center py-10 px-4">

    <div class="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

      <!-- Header -->
      <h1 class="text-3xl font-bold text-center mb-6">
        💰 Expense Tracker
      </h1>

      <!-- Balance -->
      <div class="bg-indigo-500 text-white rounded-xl p-5 text-center mb-6 shadow-md">
        <h3 class="text-sm uppercase tracking-wide">Current Balance</h3>
        <h2 class="text-2xl font-bold mt-2">₹ {{ balance }}</h2>
      </div>

      <!-- Income & Expense -->
      <div class="flex justify-between gap-4 mb-6">
        <div class="w-1/2 bg-gray-50 p-4 rounded-xl text-center shadow">
          <h4 class="text-sm text-gray-500">Income</h4>
          <p class="text-green-600 font-bold text-lg mt-1">
            ₹ {{ income }}
          </p>
        </div>

        <div class="w-1/2 bg-gray-50 p-4 rounded-xl text-center shadow">
          <h4 class="text-sm text-gray-500">Expense</h4>
          <p class="text-red-600 font-bold text-lg mt-1">
            ₹ {{ expense }}
          </p>
        </div>
      </div>

      <!-- Add Transaction -->
      <div class="bg-gray-50 p-5 rounded-xl shadow mb-6">
        <h3 class="font-semibold mb-4">Add Transaction</h3>

        <input
          type="text"
          v-model="title"
          placeholder="Title (Salary, Food...)"
          class="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="number"
          v-model="amount"
          placeholder="Amount"
          class="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <select
          v-model="type"
          class="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          @click="addTransaction"
          class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Add
        </button>
      </div>

      <!-- History -->
      <div>
        <h3 class="font-semibold mb-3">History</h3>

        <ul class="space-y-3">
          <li
            v-for="(item, index) in transactions"
            :key="index"
            class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border-r-4"
            :class="item.type === 'income' ? 'border-green-500' : 'border-red-500'"
          >
            <span class="font-medium">
              {{ item.title }}
            </span>

            <div class="flex items-center gap-3">
              <span
                :class="item.type === 'income' ? 'text-green-600' : 'text-red-600'"
                class="font-bold"
              >
                {{ item.type === 'income' ? '+' : '-' }}₹{{ item.amount }}
              </span>

              <button
                @click="remove(index)"
                class="text-gray-400 hover:text-red-500 transition"
              >
                ❌
              </button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
