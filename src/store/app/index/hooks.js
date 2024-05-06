import { useSelector } from "react-redux/es/hooks/useSelector";

export const useMainTitle = () => useSelector(state => state.app.mainTitle)
export const useLoading = () => useSelector(state => state.app.loading)
export const useErrors = () => useSelector(state => state.app.errors)
export const useTheme = () => useSelector(state => state.app.settings.theme)
export const useLanguage = () => useSelector(state => state.app.settings.language)