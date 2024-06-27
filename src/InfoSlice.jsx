import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "infoReducer",
  initialState: {
    group: [],
    showDetailsPage: {}
  },
  reducers: {
    setGroup: (state, action) => {
      state.group = [...state.group, action.payload];
      localStorage.setItem("cards", JSON.stringify(state.group));
    },
    setGroupArr: (state, action) => {
      state.group = action.payload; //grp arr
    },
    setShowDetailsPage: (state, action) => {
      state.showDetailsPage = action.payload;
    },
    hideDetailsPage: (state) => {
      state.showDetailsPage = null; // or {} if your initial state is an empty object
    }
  },
});

export const { setGroup, setGroupArr, setShowDetailsPage, hideDetailsPage } = infoSlice.actions;
export default infoSlice.reducer;
