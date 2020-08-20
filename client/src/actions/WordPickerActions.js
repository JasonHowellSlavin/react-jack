export const UPDATE = "UPDATE";
export const BACK = "BACK";
export const FORWARD = "FORWARD";

export const update = (word) => ({ type: UPDATE, word });
export const back = () => ({ type: BACK });
export const forward = () => ({ type: FORWARD });