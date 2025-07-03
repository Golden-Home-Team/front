export const RoutePath = {
    main: "/main",
    signUp: "/auth/signup",
    login: "/auth/login",


    getDetails: (id: string | null) =>
        id ? `/details/${id}` : "/details/:id"
}