import { useSelector } from "react-redux/es/hooks/useSelector";


export const useButtons = () => useSelector(state => state.buttons.buttons)

export const useButtonBackTitle = () => useSelector(state => state.buttons.buttons[0].title)
export const useButtonNextTitle = () => useSelector(state => state.buttons.buttons[2].title)
export const useButtonSubmitTitle = () => useSelector(state => state.buttons.buttons[1].title)

export const useButtonBackActive = () => useSelector(state => state.buttons.buttons[0].active)
export const useButtonNextActive = () => useSelector(state => state.buttons.buttons[2].active)
export const useButtonSubmitActive = () => useSelector(state => state.buttons.buttons[1].active)

export const useButtonBackDisabled = () => useSelector(state => state.buttons.buttons[0].disabled)
export const useButtonNextDisabled = () => useSelector(state => state.buttons.buttons[2].disabled)
export const useButtonSubmitDisabled = () => useSelector(state => state.buttons.buttons[1].disabled)

export const useButtonBackURL = () => useSelector(state => state.buttons.buttons[0].URL)
export const useButtonNextURL = () => useSelector(state => state.buttons.buttons[2].URL)
export const useButtonSubmitURL = () => useSelector(state => state.buttons.buttons[1].URL)
