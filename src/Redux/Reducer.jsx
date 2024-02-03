const iniState = {
  User: [],
  Error: "",
};

export default function Reducer(state = iniState, action) {
  switch (action.type) {
    case "SUCESS":
      return {
        User: action.payLoad,
        Error: "",
      };
    case "ERROR":
      return {
        User: [],
        Error: action.payLoad,
      };
    default:
      return state;
  }
}
