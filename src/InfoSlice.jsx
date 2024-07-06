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
    hideDetailsPage: (state) => {
      state.showDetailsPage = null;
    },
    deleteCard: (state, action) => {
      const groupIndex = action.payload; //1
      state.group.splice(groupIndex, 1);
      console.log("Updated Group State:", state.group);
      localStorage.setItem("cards", JSON.stringify(state.group));
    },
    setShowDetailsPage: (state, action) => {
      state.showDetailsPage = action.payload;
    }
  },
});

export const { setGroup, setGroupArr, setShowDetailsPage, hideDetailsPage, deleteCard } = infoSlice.actions;
export default infoSlice.reducer;
