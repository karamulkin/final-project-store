import { useContext } from 'react';
import { StoreContext } from '../components/StoreLogic';
import { useNavigate } from 'react-router-dom'

export const useStore = () => {
    const store = useContext(StoreContext);
    const navigate = useNavigate();

    return { ...store, navigate }
};