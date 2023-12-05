import { useSelector } from "react-redux/es/hooks/useSelector";

export const useModals = () => useSelector(state => state.modals.modals)
