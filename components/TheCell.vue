<script setup lang="ts">
// const store = useSheet();
// const { addressBar } = storeToRefs(store);
// const props = defineProps({
//   rowIndex: {
//     type: Number,
//     default: 0,
//   },
//   colIndex: {
//     type: Number,
//     default: 0,
//   },
//   cell: {
//     type: Object,
//     default: {
//       bold: false,
//       italic: false,
//       underline: false,
//       alignment: "left",
//       fontFamily: "monospace",
//       fontSize: "14",
//       fontColor: "#000000",
//       BGColor: "#ffffff",
//     },
//   },
// });
// const handleCellClick = (r: number, c: number) => {
//   let rowID: number | string = r + 1;
//   let colID: number | string = String.fromCharCode(65 + c);

//   addressBar.value = `${colID}${rowID}`;
//   store.activeCell = `${colID}-${rowID}`;
// };
</script>
<template>
  <!-- <div
    class="h-[2rem] w-[5rem] border-b-[1px] border-r-[1px] border-slate-300 pl-[1px]"
    :style="{
      fontWeight: props.cell.bold ? 'bolder' : 'normal',
      fontStyle: props.cell.italic ? 'italic' : 'normal',
      textDecoration: props.cell.underline ? 'underline' : 'none',
      textAlign: props.cell.alignment,
      fontFamily: props.cell.fontFamily,
      fontSize: props.cell.fontSize + 'px',
      color: props.cell.fontColor,
      backgroundColor: props.cell.BGColor,
    }"
    contenteditable="true"
    spellcheck="false"
    :data-cellID="`${props.rowIndex}-${props.colIndex}`"
    @click="handleCellClick(props.rowIndex, props.colIndex)"
  ></div> -->
  <slot />
</template>

<style scoped></style>
