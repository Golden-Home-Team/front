export const RoutePath = {
    main: "/main",
    getDetails: (id: string | null) =>
        id ? `/details/${id}` : "/details/:id"
}