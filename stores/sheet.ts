import { defineStore } from 'pinia'

interface CellProp {
  id: number | string
  bold: boolean
  italic: boolean
  underline: boolean
  alignment: string
  fontFamily: string
  fontSize: string
  fontColor: string
  BGColor: string
  value: string | number
}

// interface SheetDB {
//   [row: number]: CellProp[]
// }
// const sheetDB: CellProp[][] = []

export const useSheet = defineStore('sheet', () => {
  const ROWS: number = 100
  const COLS: number = 26
  const addressBar = ref<string>('A1')
  const sheetDB = reactive<CellProp[][]>([])
  const activeCell = ref<string>('')

  const fontSize = ref<number | string>(14);
  const fontFamily = ref<string>('monospace');
  const fontColor = ref<string>("#000000");
  const backgroundColor = ref<string>("#ffffff")

  watch(addressBar, (newv, oldv) => {
    const rowID: number = Number(newv.slice(1)) - 1;
    const colID: number = Number(newv.charCodeAt(0)) - 65;
    fontSize.value = sheetDB[rowID][colID].fontSize
    fontFamily.value = sheetDB[rowID][colID].fontFamily
    fontColor.value = sheetDB[rowID][colID].fontColor
    backgroundColor.value = sheetDB[rowID][colID].BGColor
    // if (newv !== oldv) {
    //   const oldRowID: number = Number(oldv.slice(1)) - 1;
    //   const oldColID: number = Number(oldv.charCodeAt(0)) - 65;
    //   fontColor.value = sheetDB[oldRowID][oldColID].fontColor
    //   backgroundColor.value = sheetDB[oldRowID][oldColID].BGColor
    //   console.log(fontColor.value, backgroundColor.value)

    // }
  })

  for (let i = 0; i < ROWS; i++) {
    let sheetRow: CellProp[] = []
    for (let j = 0; j < COLS; j++) {
      let cellProp: CellProp = {
        id: `${i}-${j}`,
        bold: false,
        italic: false,
        underline: false,
        alignment: 'left',
        fontFamily: 'monospace',
        fontSize: '14',
        fontColor: '#000000',
        BGColor: '#ffffff',
        value: ''
      }
      sheetRow.push(cellProp)
    }
    sheetDB.push(sheetRow)
  }
  return {
    sheetDB,
    activeCell,
    addressBar,
    // fontSizes,
    fontSize,
    fontFamily,
    fontColor,
    backgroundColor
  }
})