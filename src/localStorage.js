export const loadState = () => {
  console.log("Loading state");
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState) return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("store", serializedState);
  } catch (err) {}
};
