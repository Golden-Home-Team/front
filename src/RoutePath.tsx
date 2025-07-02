export const RoutePath = {
    main: "/main",
    signUp: "/auth/signup",

    getDetails: (id: string | null) =>
        id ? `/details/${id}` : "/details/:id"
}