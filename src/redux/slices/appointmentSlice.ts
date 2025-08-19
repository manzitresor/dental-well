import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '@/lib/api';
import type { AppointmentsState, CreateAppointmentDto } from '@/utils/interface';

const initialState: AppointmentsState = {
  appointments: [],
  loading: false,
  error: null,
};

export const createAppointment = createAsyncThunk(
  'appointments/create',
  async (appointmentData: CreateAppointmentDto, { rejectWithValue }) => {
    try {
      const response = await api.post('/appointments', appointmentData);
      return response.data;
    } catch (error: unknown) {
      let errorMessage = 'Failed to create appointment';
        if (typeof error === 'object' && error !== null && 'response' in error) {
            const err = error as { response?: { data?: { message?: string } } };
            errorMessage = err.response?.data?.message || errorMessage;
        }
        return rejectWithValue(
            typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage),
        );
    }
  }
);

export const fetchAppointments = createAsyncThunk(
  'appointments/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/appointments');
      return response.data;
    } catch (error: unknown) {
      let errorMessage = 'Failed to fetch appointments';
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const err = error as { response?: { data?: { message?: string } } };
        errorMessage = err.response?.data?.message || errorMessage;
      }
      return rejectWithValue(
        typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage),
      );
    }
  }
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload.appointment
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;