import { useSelector } from "react-redux/es/hooks/useSelector";

export const useData = () => useSelector(state => state.controls.data)
export const useDataSignUp = () => useSelector(state => state.controls.data.sign_up)
export const useDataSignIn = () => useSelector(state => state.controls.data.sign_in)
export const useStep = () => useSelector(state => state.controls.step)
