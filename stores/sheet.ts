import { defineStore } from 'pinia'

interface CellProp {
  id: number | string
  bold: boolean
  italic: boolean
  underline: boolean
  alignment: string
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
  const addressBar = ref<string>('A1')
  const sheetDB = reactive<CellProp[][]>([])
  const activeCell = ref<string>('')

  for (let i = 0; i < ROWS; i++) {
    let sheetRow: CellProp[] = []
    for (let j = 0; j < COLS; j++) {
      let cellProp: CellProp = {
        id: `${i}-${j}`,
        bold: false,
        italic: false,
        underline: false,
        alignment: 'left',
        fontfamily: 'monospace',
        fontSize: '14',
        fontColor: '#000000',
        BGColor: 'rgb(243 244 246)',
      }
      sheetRow.push(cellProp)
    }
    sheetDB.push(sheetRow)
  }
  return {
    sheetDB,
    activeCell,
    addressBar,
  }
})