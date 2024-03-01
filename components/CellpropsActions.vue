<script setup lang="ts">
const store = useSheet();

const fontFamilies = ["Monospace", "Sans-Serif", "Fantasy", "Cursive"];
const fontSizes = [14, 16, 18, 20];

const fontFamily = ref(fontFamilies[0]);
const fontSize = ref(fontSizes[0]);
const getRowColID = computed(() => {
  const address: string = store.addressBar;
  const rowID: number = Number(address.slice(1)) - 1;
  const colID: number = Number(address.charCodeAt(0)) - 65;
  return [rowID, colID];
});
const updateBold = () => {
  // const address: string = store.addressBar;
  // const rowID = Number(address.slice(1)) - 1;
  // const colID = Number(address.charCodeAt(0)) - 65;
  const [rowID, colID]: [number, number] = getRowColID.value;
  let boldVal = store.sheetDB[rowID][colID].bold;
  store.sheetDB[rowID][colID].bold = !boldVal;
};

const updateItalic = () => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  let italicVal = store.sheetDB[rowID][colID].italic;
  store.sheetDB[rowID][colID].italic = !italicVal;
};

const updateTextDeceloration = () => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  let val = store.sheetDB[rowID][colID].underline;
  store.sheetDB[rowID][colID].underline = !val;
};

const getBold = computed(() => {
  // const address: string = store.addressBar;
  // const rowID = Number(address.slice(1)) - 1;
  // const colID = Number(address.charCodeAt(0)) - 65;
  const [rowID, colID]: [number, number] = getRowColID.value;
  return {
    backgroundColor: store.sheetDB[rowID][colID].bold ? "yellow" : "",
  };
});

const getItalic = computed(() => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  return {
    backgroundColor: store.sheetDB[rowID][colID].italic ? "yellow" : "",
  };
});

const getTextDeceloration = computed(() => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  return {
    backgroundColor: store.sheetDB[rowID][colID].underline ? "yellow" : "",
  };
});
</script>
<template>
  <div class="h-[2rem] px-3 bg-red-200 flex items-center gap-2">
    <Icon name="ic:sharp-undo" />
    <Icon name="ic:baseline-redo" />
    <Icon name="solar:copy-bold" />
    <Icon name="clarity:paste-line" />
    <USelectMenu v-model="fontFamily" size="2xs" :options="fontFamilies" />
    <USelectMenu v-model="fontSize" size="2xs" :options="fontSizes" />
    <Icon
      name="bx:bold"
      class="cursor-pointer"
      @click="updateBold()"
      :style="getBold"
    />

    <Icon
      name="ic:baseline-format-italic"
      class="cursor-pointer"
      @click="updateItalic()"
      :style="getItalic"
    />
    <Icon
      name="ic:baseline-format-underlined"
      class="cursor-pointer"
      @click="updateTextDeceloration"
      :style="getTextDeceloration"
    />
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
