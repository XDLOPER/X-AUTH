import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => useSelector(state => state.app.auth)
export const useTheme = () => useSelector(state => state.app.settings.theme)
export const useLanguage = () => useSelector(state => state.app.settings.language)