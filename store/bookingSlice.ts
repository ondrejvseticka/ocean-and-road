import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getVehicleById } from '@/data/vehicles';
import type { BookingState } from '@/types';

const initialState: BookingState = {
  bookedVehicleIds: [],
  totalPrice: 0,
};

interface BookVehiclePayload {
  id: string;
  pricePerDay: number;
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookVehicle: (state, action: PayloadAction<BookVehiclePayload>) => {
      const { id, pricePerDay } = action.payload;

      if (state.bookedVehicleIds.includes(id)) {
        return;
      }

      state.bookedVehicleIds.push(id);
      state.totalPrice += pricePerDay;
    },
    removeVehicle: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (!state.bookedVehicleIds.includes(id)) {
        return;
      }

      const vehicle = getVehicleById(id);

      if (vehicle) {
        state.totalPrice = Math.max(0, state.totalPrice - vehicle.pricePerDay);
      }

      state.bookedVehicleIds = state.bookedVehicleIds.filter((vehicleId) => vehicleId !== id);
    },
  },
});

export const { bookVehicle, removeVehicle } = bookingSlice.actions;
export default bookingSlice.reducer;

type BookingSliceRootState = {
  booking: BookingState;
};

export const selectBookedVehicleIds = (state: BookingSliceRootState): string[] =>
  state.booking.bookedVehicleIds;

export const selectBookedCount = (state: BookingSliceRootState): number =>
  state.booking.bookedVehicleIds.length;

export const selectTotalPrice = (state: BookingSliceRootState): number => state.booking.totalPrice;

export const selectIsBooked =
  (id: string) =>
  (state: BookingSliceRootState): boolean =>
    state.booking.bookedVehicleIds.includes(id);
