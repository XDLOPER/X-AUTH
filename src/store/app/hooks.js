import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => useSelector(state => state.app.auth)
export const useTheme = () => useSelector(state => state.app.theme)
export const useLanguage = () => useSelector(state => state.app.language)
export const useLoading = () => useSelector(state => state.app.loading)
export const useMainTitle = () => useSelector(state => state.app.mainTitle)

export const useButtons = () => useSelector(state => state.app.buttons)

export const useButtonBackTitle = () => useSelector(state => state.app.buttons[0].title)
export const useButtonNextTitle = () => useSelector(state => state.app.buttons[2].title)
export const useButtonSubmitTitle = () => useSelector(state => state.app.buttons[1].title)

export const useButtonBackActive = () => useSelector(state => state.app.buttons[0].active)
export const useButtonNextActive = () => useSelector(state => state.app.buttons[2].active)
export const useButtonSubmitActive = () => useSelector(state => state.app.buttons[1].active)

export const useButtonBackDisabled = () => useSelector(state => state.app.buttons[0].disabled)
export const useButtonNextDisabled = () => useSelector(state => state.app.buttons[2].disabled)
export const useButtonSubmitDisabled = () => useSelector(state => state.app.buttons[1].disabled)

export const useButtonBackURL = () => useSelector(state => state.app.buttons[0].URL)
export const useButtonNextURL = () => useSelector(state => state.app.buttons[2].URL)
export const useButtonSubmitURL = () => useSelector(state => state.app.buttons[1].URL)
