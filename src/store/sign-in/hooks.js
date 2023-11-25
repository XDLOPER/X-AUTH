import { useSelector } from "react-redux/es/hooks/useSelector";

export const useStep = () => useSelector(state => state.signIn.step)
