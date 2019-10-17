export default function changeInsurance(insurance: any) {
  return {
    type: "CHANGE_INSURANCE",
    payload: insurance
  }
}