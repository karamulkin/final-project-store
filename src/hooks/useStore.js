import { useContext } from 'react';
import { StoreContext } from '../components/StoreLogic';

export const useStore = () => {
    return useContext(StoreContext);
};