import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => useSelector(state => state.app.auth)
export const useTheme = () => useSelector(state => state.app.theme)
export const useLanguage = () => useSelector(state => state.app.language)
export const useLoading = () => useSelector(state => state.app.loading)
export const useErrors = () => useSelector(state => state.app.errors)
export const useMainTitle = () => useSelector(state => state.app.mainTitle)

export const useButtons = () => useSelector(state => state.app.buttons)

export const useButtonBackTitle = () => useSelector(state => state.app.buttons[0].title)
export const useButtonNextTitle = () => useSelector(state => state.app.buttons[2].title)
export const useButtonSubmitTitle = () => useSelector(state => state.app.buttons[1].title)

