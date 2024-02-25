export interface SwaggerAPI {
  api?: string;
  method?: string;
  path?: string;
  request: ICommunication;
  response: ICommunication;
  filteredResults?: IFilteredResults;
}

export interface ICommunication {
  [key: string]: IItemParam[];
}
export interface IFilteredResults {
  request?: {
    [key: string]: IItemParam[];
  };
  response?: {
    [key: string]: IItemParam[];
  };
}

export interface IFilteredData {
  [key: string]: IItemParam[];
}

export interface IItemParam {
  name?: string;
  pii?: boolean;
  masked?: boolean;
  type?: string;
}
