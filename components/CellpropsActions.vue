<script setup lang="ts">
const fontFamilies = ["Monospace", "Sans-Serif", "Fantasy", "Cursive"];
const fontSizes = [14, 16, 18, 20];

const fontFamily = ref(fontFamilies[0]);
const fontSize = ref(fontSizes[0]);
</script>
<template>
  <div class="h-[2rem] px-3 bg-red-200 flex items-center gap-2">
    <Icon name="ic:sharp-undo" />
    <Icon name="ic:baseline-redo" />
    <Icon name="solar:copy-bold" />
    <Icon name="clarity:paste-line" />
    <USelectMenu v-model="fontFamily" size="2xs" :options="fontFamilies" />
    <USelectMenu v-model="fontSize" size="2xs" :options="fontSizes" />
    <Icon name="bx:bold" />
    <Icon name="ic:baseline-format-italic" />
    <Icon name="ic:baseline-format-underlined" />
    <Icon name="iconoir:align-left" />
    <Icon name="iconoir:align-center" />
    <Icon name="iconoir:align-right" />
    <div class="relative">
      <Icon name="ic:baseline-format-color-text" />
      <input type="color" class="opacity-0 absolute top-0 left-0 h-full" />
    </div>
    <div class="relative">
      <Icon name="ic:baseline-format-color-fill" />
      <input type="color" class="opacity-0 absolute top-0 left-0 h-full" />
    </div>
  </div>
</template>

<style scoped></style>
