import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  SwaggerAPI,
  IFilteredData,
  IItemParam,
  ICommunication,
  IFilteredResults
} from 'src/interfaces/swagger.interface';
import data from 'src/store/slices/swaggerSlice/data/fe_data.json';


interface ISearchData {
  searchRelated: keyof IFilteredResults;
  searchValue: string;
  isPII: boolean;
}

const initialState: SwaggerAPI = {
  ...data,
  filteredResults: {}
};

export const swaggerSlice = createSlice({
  name: 'swaggerSlice',
  initialState,
  reducers: {
    filterData(state, action: PayloadAction<ISearchData>) {
      const { searchRelated, searchValue, isPII } = action.payload;
      const filteredData: IFilteredData = {};
      if (!state[searchRelated]) return;

      Object.keys(state[searchRelated] as ICommunication).forEach((key) => {
        filteredData[key] = (state[searchRelated] as ICommunication)[key].filter(
          (item: IItemParam) => {
            if (item.name === undefined) return false;
            if (isPII) {
              return (
                item.pii === true && item.name.toLowerCase().includes(searchValue.toLowerCase())
              );
            }
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
          }
        );
      });
      state.filteredResults![searchRelated] = filteredData as IFilteredData;
    },
    resetFilter(state) {
      state.filteredResults = {};
    }
  }
});

export const { filterData, resetFilter } = swaggerSlice.actions;

export default swaggerSlice.reducer;
