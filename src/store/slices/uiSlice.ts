import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProjectStatus, ProjectType } from "../types/project";

interface UiState {
  search: string;
  selectedType: "todos" | ProjectType;
  selectedStatus: ProjectStatus;
}

const initialState: UiState = {
  search: "",
  selectedType: "todos",
  selectedStatus: "ativo",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSelectedType(state, action: PayloadAction<UiState["selectedType"]>) {
      state.selectedType = action.payload;
    },
    setSelectedStatus(state, action: PayloadAction<ProjectStatus>) {
      state.selectedStatus = action.payload;
    },
    resetFilters(state) {
      state.search = "";
      state.selectedType = "todos";
      state.selectedStatus = "ativo";
    },
  },
});

export const { resetFilters, setSearch, setSelectedStatus, setSelectedType } =
  uiSlice.actions;

export default uiSlice.reducer;
