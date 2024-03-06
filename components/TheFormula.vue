<script setup lang="ts">
import { create, all } from "mathjs";
const math = create(all);
const store = useSheet();
let { addressBar, formulaBar } = storeToRefs(store);
const isFormula = (): Boolean => {
  return formulaBar.value.startsWith("=");
};

const evaluateFormula = (formula) => {
  decodeFormula(formula);
  try {
    return math.evaluate(formula);
  } catch (error) {
    console.error("Error evaluating formula:", error);
    return null;
  }
  // return eval(newStr);
};

function decodeFormula(formula) {
  const parts = formula.split(/[+\-%*\/]/);

  let value = 0;
  console.log(parts, formula);

  for (const part of parts) {
    if (/^[A-Za-z]+\d+$/.test(part)) {
    } else {
    }
  }
}

const handleFormula = (evt: KeyboardEvent) => {
  console.log(formulaBar.value, evt.key);
  if (!isFormula()) return;
  if (evt.key === "Enter" && formulaBar.value.length) {
    const newStr = formulaBar.value.replace(/=/, "");
    // const result = eval(str.slice(1));
    // console.log(newStr)
    const [rowID, colID]: [number, number] = store.getRowColID;
    console.log(evaluateFormula(newStr), newStr);
    store.sheetDB[rowID][colID].value = evaluateFormula(newStr);
    store.sheetDB[rowID][colID].formula = formulaBar.value;
  }
  //   const str = "=(4 + 4)";
};
</script>
<template>
  <div class="h-[2rem] px-2 bg-blue-200 flex gap-2 items-center">
    <input class="w-20 text-center outline-none" v-model="addressBar" />
    <Icon name="fluent:math-formula-24-filled" />
    <input
      class="flex-grow pl-1 outline-none"
      v-model="formulaBar"
      @keydown="handleFormula($event)"
    />
  </div>
</template>

<style scoped></style>
