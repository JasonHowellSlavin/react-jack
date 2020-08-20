export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const decrement = () => ({ type: DECREMENT });
export const increment = () => ({ type: INCREMENT });
export const reset = () => ({ type: RESET });