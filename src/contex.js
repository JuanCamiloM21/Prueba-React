import { createContext, useContext, useReducer } from 'react';
import useGetData from './hooks/useGetData';
import reducers from './reducer';
import { selectId } from './action';

const DataContext = createContext();

export const DataProvider = ({ reducer, children }) => {
  const URL = 'initialState/initialState.json';
  const getData = useGetData(URL);
  const data = getData.data;

  const initialData = {
    itemId: 1,
  };

  const [{ itemId }, dispatch] = useReducer(reducers, initialData);

  const handleClick = (id) => {
    dispatch(selectId(id));
  };

  return (
    <DataContext.Provider value={{ data, itemId, handleClick }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataValue = () => useContext(DataContext);
