import { defineStore } from 'pinia'

interface CellProp {
  bold: boolean
  italic: boolean
  underline: boolean
  alignment: boolean
  fontfamily: string
  fontSize: string
  fontColor: string
  BGColor: string
}

// interface SheetDB {
//   [row: number]: CellProp[]
// }
// const sheetDB: CellProp[][] = []

export const useSheet = defineStore('sheet', () => {
  const ROWS: number = 100
  const COLS: number = 26
  const addressBar = ref<string>('')
  const sheetDB = reactive<CellProp[][]>([])

  for (let i = 0; i < ROWS; i++) {
    let sheetRow: CellProp[] = []
    for (let j = 0; j < COLS; j++) {
      let cellProp: CellProp = {
        bold: false,
        italic: false,
        underline: false,
        alignment: false,
        fontfamily: 'monospace',
        fontSize: '14',
        fontColor: '#000000',
        BGColor: '#000000',
      }
      sheetRow.push(cellProp)
    }
    sheetDB.push(sheetRow)
  }
  return {
    addressBar,
    sheetDB,
  }
})