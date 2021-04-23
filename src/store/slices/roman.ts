import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RomanNumerals } from '../../helpers';

type ViewModeType = 'roman' | 'numeric';
type ErrorType = 'maxNumberReached' | 'invalidRomanValue'

export interface State {
  romanValue: string
  numericValue: string
  showResult: boolean
  viewMode: ViewModeType
  error: ErrorType | undefined
}

export const initialState: State = {
  romanValue: '',
  numericValue: '',
  showResult: false,
  viewMode: 'roman',
  error: undefined,
};

const romanSlice = createSlice({
  name: 'roman',
  initialState: initialState,
  reducers: {
    setRomanValue: (state, { payload }: PayloadAction<string>) => {
      state.romanValue += payload;
      try {
        state.numericValue = RomanNumerals.fromRoman(state.romanValue).toString();
      } catch (error: any) {
        state.error = 'invalidRomanValue';
      }

    },
    setNumericValue: (state, { payload }: PayloadAction<string>) => {
      state.numericValue += payload;
      if (parseInt(state.numericValue) <= 3999) {
        state.romanValue = RomanNumerals.toRoman(parseInt(state.numericValue));
      } else {
        state.error = 'maxNumberReached';
      }
    },
    setViewMode: (state, { payload }: PayloadAction<ViewModeType>) => {
      state.viewMode = payload;
    },
    toggleResult: (state) => {
      if (state.numericValue !== '') {
        state.showResult = !state.showResult;
      }
    },
    reset: (state) => {
      state.numericValue = initialState.numericValue;
      state.romanValue = initialState.romanValue;
      state.error = initialState.error;
      state.showResult = initialState.showResult;
    },
  },
});

export const romanReducer = romanSlice.reducer;
export const { setRomanValue, setNumericValue, setViewMode, toggleResult, reset } = romanSlice.actions;
