export const pathname = window.location.pathname
export const location = pathname.split('/')[pathname.split('/').length -1] ? pathname.split('/')[pathname.split('/').length -1] : pathname === '/' ? 'signUp' : pathname
