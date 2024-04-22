<script setup lang="ts">
const store = useSheet();

const fontFamilies = ["Monospace", "Sans-Serif", "Fantasy", "Cursive"];
const fontSizes = ["14", "16", "18", "20"];
const { fontSize, fontFamily, fontColor, backgroundColor } = storeToRefs(store);
// const fontSize = ref(fontSizes.value[0]);

// const fontFamily = ref(fontFamilies[0]);

watch(fontColor, (color) => updateFontColor(color));
watch(backgroundColor, (color) => updateBackgroundColor(color));
watch(fontSize, (s) => updateFontSize(s));
watch(fontFamily, (s) => updateFontFamily(s));
// watch(
//   () => [fontSize, fontFamily],
//   ([newFontSize, newFontFamily]) => {
//     console.log(newFontFamily, newFontSize);
//     updateFontFamily(newFontFamily);
//     updateFontSize(newFontSize);
//   }
// );

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

const updateFontSize = (newSize: number) => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  // let fontSize = store.sheetDB[rowID][colID].fontSize;
  store.sheetDB[rowID][colID].fontSize = String(newSize);
  // console.log(store.sheetDB[rowID][colID].fontSize);
};

const updateFontFamily = (newFont: string) => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  // let fontSize = store.sheetDB[rowID][colID].fontSize;
  store.sheetDB[rowID][colID].fontFamily = newFont;
  // console.log(store.sheetDB[rowID][colID].fontSize);
};

const updateTextAlignment = (alignment: string) => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  store.sheetDB[rowID][colID].alignment = alignment;
};

const updateFontColor = (newFontColor: string) => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  store.sheetDB[rowID][colID].fontColor = newFontColor;
};

const updateBackgroundColor = (newBGColor: string) => {
  console.log("sfdf");
  const [rowID, colID]: [number, number] = getRowColID.value;
  store.sheetDB[rowID][colID].BGColor = newBGColor;
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

const getTextAlignment = computed(() => {
  const [rowID, colID]: [number, number] = getRowColID.value;
  return store.sheetDB[rowID][colID].alignment;
});
</script>
<template>
  <div class="h-[2rem] px-3 bg-gray-50 flex items-center gap-2">
    <Icon name="ic:sharp-undo" />
    <Icon name="ic:baseline-redo" />
    <Icon name="solar:copy-bold" />
    <Icon name="clarity:paste-line" />
    <USelectMenu
      v-model="fontFamily"
      size="2xs"
      :options="fontFamilies"
      :uiMenu="{
        width: 'w-[120px]',
        option: { size: 'text-xs' },
      }"
      class="w-[100px]"
    />
    <USelectMenu
      v-model="fontSize"
      size="2xs"
      :options="fontSizes"
      :uiMenu="{
        width: 'w-[60px]',
        option: { size: 'text-xs' },
      }"
    />
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
    <Icon
      name="iconoir:align-left"
      :style="{
        backgroundColor: getTextAlignment === 'left' ? '#BBDEFB' : '',
      }"
      @click="updateTextAlignment('left')"
    />
    <Icon
      name="iconoir:align-center"
      :style="{
        backgroundColor: getTextAlignment === 'center' ? '#E3F2FD' : '',
      }"
      @click="updateTextAlignment('center')"
    />
    <Icon
      name="iconoir:align-right"
      :style="{
        backgroundColor: getTextAlignment === 'right' ? '#E3F2FD' : '',
      }"
      @click="updateTextAlignment('right')"
    />
    <div class="relative">
      <Icon name="ic:baseline-format-color-text" />
      <input
        v-model="fontColor"
        type="color"
        class="opacity-0 absolute top-0 left-0 h-full"
      />
    </div>
    <div class="relative">
      <Icon name="ic:baseline-format-color-fill" />
      <input
        v-model="backgroundColor"
        type="color"
        class="opacity-0 absolute top-0 left-0 h-full"
      />
    </div>
  </div>
</template>

<style scoped></style>
