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
    <Icon name="uil:italic" />
    <Icon name="iconoir:underline" />
    <Icon name="iconoir:align-left" />
    <Icon name="iconoir:align-center" />
    <Icon name="iconoir:align-right" />
  </div>
</template>

<style scoped></style>
