export default function changeInsuranceReducer (state = [], action: any) {
  if (action.type === "CHANGE_INSURANCE") {
    return action.payload;
  } else {
    return state;
  }
}