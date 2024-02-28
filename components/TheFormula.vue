<script setup lang="ts">
const store = useSheet();
let { addressBar } = storeToRefs(store);
</script>
<template>
  <div class="h-[2rem] px-2 bg-blue-200 flex gap-2 items-center">
    <input
      class="w-20 text-center text-yellow-50 outline-none"
      v-model="addressBar"
    />
    <Icon name="fluent:math-formula-24-filled" />
    <input class="flex-grow text-yellow-50 pl-1 outline-none" />
  </div>
</template>

<style scoped></style>
