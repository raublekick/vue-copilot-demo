
<script setup>
import { ref, computed } from 'vue';
// create a mock array of users with a name and email
const users = [
  { name: 'User1', email: 'user1@example.com', company: 'Company1' },
  { name: 'User2', email: 'user2@example.com', company: 'Company2' },
  { name: 'User3', email: 'user3@example.com', company: 'Company3' },
  // ...rest of the users
];

// create a filter to search the users by name
const filter = ref('');
let sortKey = ref('');
let sortOrder = ref(1);
// create a computed property to filter the users
const filteredUsers = computed(() => {
  return users
    .filter(user => user.name.toLowerCase().includes(filter.value.toLowerCase()))
    .sort((a, b) => {
      if (a[sortKey.value] < b[sortKey.value]) return -sortOrder.value;
      if (a[sortKey.value] > b[sortKey.value]) return sortOrder.value;
      return 0;
    });
});

/**
 * Sorts the data based on the given key.
 * If the sort key is the same as the current sort key, it toggles the sort order.
 * If the sort key is different from the current sort key, it sets the new sort key and resets the sort order to ascending.
 *
 * @param {string} key - The key to sort the data by.
 */
function sort(key) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value * -1;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
}
</script>


<template>
  <main>
    <h1>Goals</h1>

    <dl>
      <dt>Goal #1</dt>
      <dd>Create an array of mock users with name and email using the Copilot chat plugin</dd>
    </dl>

    <dl>
      <dt>Goal #2</dt>
      <dd>Create a table to display the users using a comment</dd>
    </dl>

    <dl>
      <dt>Goal #3</dt>
      <dd>Add some basic styling (borders and padding) to the table</dd>
    </dl>

    <dl>
      <dt>Goal #4</dt>
      <dd>Add filtering the users using terminal commands</dd>
    </dl>

    <dl>
      <dt>Goal #5</dt>
      <dd>Add a new field to the users table</dd>
    </dl>

    <dl>
      <dt>Goal #6</dt>
      <dd>Use Copilot to explain the computed filter function.</dd>
    </dl>

    <dl>
      <dt>Goal #7</dt>
      <dd>Use Copilot to document the computed filter function.</dd>
    </dl>
  </main>

  <hr />
  <!-- create an input to filter the users -->
  <input v-model="filter" placeholder="Filter users by name" />
  <!-- create a table to display the users -->
  <table>
    <thead>
      <tr>
        <th @click="sort('name')">Name</th>
        <th @click="sort('email')">Email</th>
        <th @click="sort('company')">Company</th> <!-- New column for company -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in filteredUsers" :key="user.name">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.company }}</td> <!-- New field for company -->
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
/* add some basic styles to the table */
table {
  width: 100%;
  border-collapse: collapse;
}

/* add some basic styles to the table cells */
td,
th {
  padding: 0.5rem;
  border: 1px solid #ddd;
}
</style>
