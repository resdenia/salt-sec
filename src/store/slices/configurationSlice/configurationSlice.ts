import { createSlice } from '@reduxjs/toolkit';

import { PROJECT_TABS, TabVariable } from 'src/utils/constants';

interface ConfigurationState {
  projectTabs: TabVariable[];
}

const initialState: ConfigurationState = {
  projectTabs: PROJECT_TABS,

};

export const configurationSlice = createSlice({
  name: 'configurationSlice',
  initialState,
  reducers: {}
});

export default configurationSlice.reducer;
