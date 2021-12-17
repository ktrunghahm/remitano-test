const PROTECTED_PATH = '/protected'

export const ROUTES = {
    login: '/login',
    protected: PROTECTED_PATH,
    user: `${PROTECTED_PATH}/user`,
    share: `${PROTECTED_PATH}/share`,
}