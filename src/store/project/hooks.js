import { useSelector } from "react-redux/es/hooks/useSelector";

export const useLoading = () => useSelector(state => state.project.loading)

