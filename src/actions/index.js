export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_IF_ODD = "INCREMENT_IF_ODD";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = num => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: num
  };
};

export const decrement = num => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: num
  };
};

export const incrementIfOdd = num => {
  console.log("fired:", num);
  // Fill in this function
  return {
    type: INCREMENT_IF_ODD,
    payload: num
  };
};
