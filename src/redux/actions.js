import {TEST_UPDATE} from "./types";

export function testAction(num) {
  return {
    type: TEST_UPDATE,
    payload: num
  }
}