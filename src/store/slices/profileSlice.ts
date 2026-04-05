import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Address } from "../types/address";
import type { ProfileState } from "../types/profile";

type ProfileTextField = Exclude<keyof ProfileState, "isFetchingAddress">;

const initialState: ProfileState = {
  fullName: "Joao Pedro",
  email: "joao@exemplo.com",
  profession: "Desenvolvedor",
  bio: "",
  phone: "",
  birthDate: "",
  postalCode: "",
  street: "",
  neighborhood: "",
  number: "",
  city: "",
  state: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  isFetchingAddress: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileField(
      state,
      action: PayloadAction<{ field: ProfileTextField; value: string }>,
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setAddressLoading(state, action: PayloadAction<boolean>) {
      state.isFetchingAddress = action.payload;
    },
    clearAddress(state) {
      state.street = "";
      state.neighborhood = "";
      state.city = "";
      state.state = "";
    },
    setAddressFromPostalCode(state, action: PayloadAction<Address>) {
      state.postalCode = action.payload.postalCode;
      state.street = action.payload.street;
      state.neighborhood = action.payload.neighborhood;
      state.city = action.payload.city;
      state.state = action.payload.state;
    },
  },
});

export const {
  clearAddress,
  setAddressFromPostalCode,
  setAddressLoading,
  setProfileField,
} = profileSlice.actions;

export default profileSlice.reducer;
