import {TEST_UPDATE} from "./types";

const initialState = {
    "SKU": {
      "ARM1": {
        "LNAState": 1,
        "amplifierState": 1,
        "upConvertorState": 1,
        "downConvertorState": 1,

      },
      "ARM2": {
        "LNAState": 1,
        "amplifierState": 0,
        "upConvertorState": 1,
        "downConvertorState": 0,
      },
      "earthStationReady": 1,
      "antSystemReady": 0,
      "matrixPRM": 1,
      "matrixPRD": 0,
      "cortexState": 1,
      "controllerState": 1,
      "testTranslatorState": 1,
      "equipmentState": 1,
      "IFRState": 1
    },
    "RPU": {
      "ARM1": {
        "LNAState": 1,
        "amplifierState": 1,
        "upConvertorState": 1,
        "downConvertorState": 1,
      },
      "ARM2": {
        "LNAState": 1,
        "amplifierState": 0,
        "upConvertorState": 1,
        "downConvertorState": 0,
      },
      "earthStationReady": 1,
      "antSystemReady": 0,
      "matrixPRM": 1,
      "matrixPRD": 0,
      "cortexState": 1,
      "controllerState": 1,
      "testTranslatorState": 1,
      "equipmentState": 1,
      "IFRState": 1
    }
}

export const complexInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_UPDATE:
      const test = {...state}
      test.SKU.antSystemReady = action.payload
      return test
    default: return state
  }
}