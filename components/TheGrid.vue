<script setup lang="ts">
const ROWS: number = 40;
const COLS: number = 12;
// const addressBar = ref<string>("");
const store = useSheet();
const { addressBar } = storeToRefs(store);

// let ind: number = 1;
// const computeCells = (i: number) => {
//   let ans: string = "";
//   let n: number = i;
//   while (n > 0) {
//     let remainder: number = n % 26;
//     if (remainder === 0) {
//       ans = "Z" + ans;
//       n = Math.floor(n / 26) - 1;
//     } else {
//       ans = String.fromCharCode(remainder - 1 + 65) + ans;
//       n = Math.floor(n / 26);
//     }
//   }
//   return ans;
// };

onMounted(() => {
  init();
});

const init = () => {
  const [r, c] = store.getRowColID;
  const rowElement = document.querySelector(`[data-row='${r}']`);
  const colElement = document.querySelector(`[data-col='${c}']`);
  rowElement.style.border = "1.8px solid blue";
  rowElement.style.backgroundColor = "#E3F2FD";

  colElement.style.border = "1.8px solid blue";
  colElement.style.backgroundColor = "#E3F2FD";

  const firstCell = document.querySelector(`[data-cellID='${r}-${c}]'`);
  // firstCell?.style.border = "1.8px solid blue";
  console.log(firstCell, r, c);
};

const handleCellClick = (evt, r: number, c: number) => {
  let rowID: number | string = r + 1;
  let colID: number | string = String.fromCharCode(65 + c);
  evt.target.style.border = "1.6px solid blue";
  const rowElement = document.querySelector(`[data-row='${r}']`);
  const colElement = document.querySelector(`[data-col='${c}']`);
  rowElement.style.border = "1.8px solid blue";
  rowElement.style.backgroundColor = "#E3F2FD";

  colElement.style.border = "1.8px solid blue";
  colElement.style.backgroundColor = "#E3F2FD";

  // console.log(a, b);
  addressBar.value = `${colID}${rowID}`;
  store.activeCell = `${colID}-${rowID}`;
  console.log(store.sheetDB[r][c].formula);
};

const handlePreviousCell = (evt, r: number, c: number) => {
  const cell = document.querySelector(`[data-cellID="${r}-${c}"]`);
  // console.log(cell?.innerText);
  evt.target.style.border = "";
  const rowElement = document.querySelector(`[data-row='${r}']`);
  const colElement = document.querySelector(`[data-col='${c}']`);
  rowElement.style.border = "";
  rowElement.style.backgroundColor = "";

  colElement.style.border = "";
  colElement.style.backgroundColor = "";

  // addressBar.value = `${colID}${rowID}`;
  // store.activeCell = `${colID}-${rowID}`;
  store.sheetDB[r][c].value = cell?.textContent;
};
</script>
<template>
  <div class="h-[calc(100vh-2rem-2rem-3rem)] relative overflow-scroll">
    <div
      class="h-[1.7rem] w-[3rem] border-r-[1px] border-b-[1px] border-gray-400 bg-gray-200 fixed z-40"
    ></div>
    <div class="sticky top-[1.7rem] w-[2rem] left-0 bg-gray-50 z-10">
      <div
        v-for="(row, r_ind) in store.sheetDB"
        :key="r_ind"
        class="h-[1.5rem] w-[3rem] flex justify-center items-center border-b-[1px] border-r-[1px] border-gray-400 text-sm"
        :data-row="r_ind"
      >
        {{ r_ind + 1 }}
      </div>
    </div>
    <div class="absolute top-0 left-[3rem]">
      <div class="flex sticky top-0 left-[2rem] bg-gray-50">
        <div
          v-for="(col, c_ind) in COLS"
          :key="col"
          class="h-[1.7rem] w-[7rem] flex justify-center items-center border-b-[1px] border-r-[1px] border-gray-400 text-sm relative right_panel"
          :data-col="c_ind"
        >
          {{ String.fromCharCode(65 + c_ind) }}
        </div>
      </div>
      <!-- sheet grid -->
      <div v-for="(row, r_i) in store.sheetDB" :key="r_i" class="flex">
        <!-- <div
          v-for="(cell, c_i) in row"
          :key="cell.id"
          class="h-[2rem] w-[5rem] border-b-[1px] border-r-[1px] border-slate-300 pl-[1px]"
          :style="{
            fontWeight: cell.bold ? 'bolder' : 'normal',
            fontStyle: cell.italic ? 'italic' : 'normal',
            textDecoration: cell.underline ? 'underline' : 'none',
            textAlign: cell.alignment,
            fontFamily: cell.fontFamily,
            fontSize: cell.fontSize + 'px',
            color: cell.fontColor,
            backgroundColor: cell.BGColor,
          }"
          contenteditable="true"
          spellcheck="false"
          :data-cellID="`${r_i}-${c_i}`"
          @click="handleCellClick(r_i, c_i)"
        ></div> -->
        <TheCell>
          <div
            v-for="(cell, c_i) in row"
            :key="cell.id"
            class="h-[1.5rem] w-[7rem] border-b-[1px] border-r-[1px] border-gray-300 pl-[1px]"
            :style="{
              fontWeight: cell.bold ? 'bolder' : 'normal',
              fontStyle: cell.italic ? 'italic' : 'normal',
              textDecoration: cell.underline ? 'underline' : 'none',
              textAlign: cell.alignment,
              fontFamily: cell.fontFamily,
              fontSize: cell.fontSize + 'px',
              color: cell.fontColor,
              backgroundColor: cell.BGColor,
            }"
            style="outline: 0px solid transparent"
            contenteditable="true"
            spellcheck="false"
            :data-cellID="`${r_i}-${c_i}`"
            @click="handleCellClick($event, r_i, c_i)"
            @blur="handlePreviousCell($event, r_i, c_i)"
          >
            {{ cell.value }}
          </div>
        </TheCell>
        <!-- <TheCell
          v-for="(cell, c_i) in row"
          :key="cell.id"
          :cell="cell"
          :rowIndex="r_i"
          :colIndex="c_i"
        /> -->
      </div>
    </div>
  </div>
  <!-- ----------- -->
  <!-- <div class="h-[75vh] flex flex-wrap">
    <div class="w-[30px] h-[30px] border-[1px] border-gray-200"></div>
    <div class="h-[30px] border-[1px] border-gray-200 flex overflow-hidden">
      <div
        class="min-w-[100px] flex justify-center items-center border-r-[1px] border-gray-200"
      >
        A
      </div>
      <div
        class="min-w-[100px] flex justify-center items-center border-r-[1px] border-gray-200"
      >
        B
      </div>
      <div
        v-for="ind in 25"
        :key="ind"
        class="min-w-[100px] flex justify-center items-center border-r-[1px] border-gray-200"
      >
        {{ computeCells(ind) }}
      </div>
    </div>
    <div
      class="w-[30px] h-[calc(100vh-3rem-2rem-2rem-3rem-30px)] border-[1px] border-gray-200"
    >
      <div
        class="min-h-[25px] flex justify-center items-center border-b-[1px] border-gray-200"
      >
        fff
      </div>
    </div>
    <div
      class="w-[calc(100vw-30px)] h-[calc(100vh-3rem-2rem-2rem-3rem-30px)] border-[1px] border-gray-200"
    >
      <div class="flex">
        <div
          class="w-[100px] h-[25px] border-r-[1px] border-b-[1px] border-gray-200"
        ></div>
        <div
          class="w-[100px] h-[25px] border-r-[1px] border-b-[1px] border-gray-200"
        ></div>
      </div>
      <div class="flex">
        <div
          class="w-[100px] h-[25px] border-r-[1px] border-b-[1px] border-gray-200"
        ></div>
        <div
          class="w-[100px] h-[25px] border-r-[1px] border-b-[1px] border-gray-200"
        ></div>
      </div>
    </div>
  </div> -->
</template>

<style scoped></style>
