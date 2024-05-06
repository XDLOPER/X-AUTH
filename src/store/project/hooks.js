import { useSelector } from "react-redux/es/hooks/useSelector";

export const useTemplate = () => useSelector(state => state.project.template)
export const useLoading = () => useSelector(state => state.project.loading)
export const useCompany = () => useSelector(state => state.project.company)
export const useCompanyName = () => useSelector(state => state.project.company.name)

