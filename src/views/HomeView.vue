
<script setup>
function getUserRoles(user) {
  var roles = user.roles;
  var rolesToReturn = [];

  for (var i = 0; i < roles.length; i++) {
    rolesToReturn.push(roles[i].name);
  }

  return rolesToReturn;
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

    <dl>
      <dt>Goal #8</dt>
      <dd>Use Copilot to refactor the getUserRoles function.</dd>
    </dl>

    <dl>
      <dt>Goal #9</dt>
      <dd>Use Copilot to create a unit test for the entire component.</dd>
    </dl>

    <dl>
      <dt>Goal #10</dt>
      <dd>Use Copilot to create a commit message.</dd>
    </dl>

    <dl>
      <dt>Goal #11</dt>
      <dd>Use Copilot to create an entire new page for listing proposals.</dd>
    </dl>
  </main>
</template>
