import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => useSelector(state => state.app.buttons.auth)
export const useTheme = () => useSelector(state => state.app.buttons.theme)
export const useLanguage = () => useSelector(state => state.app.buttons.language)
export const useButtonBackActive = () => useSelector(state => state.app.buttons.buttonBack.active)
export const useButtonNextActive = () => useSelector(state => state.app.buttons.buttonNext.active)
export const useButtonSubmitActive = () => useSelector(state => state.app.buttons.buttonSubmit.active)
export const useButtonBackURL = () => useSelector(state => state.app.buttons.buttonBack.URL)
export const useButtonNextURL = () => useSelector(state => state.app.buttons.buttonNext.URL)
export const useButtonSubmitURL = () => useSelector(state => state.app.buttons.buttonSubmit.URL)
