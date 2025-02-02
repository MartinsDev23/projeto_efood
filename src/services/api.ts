import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio } from '../components/PerfilComponents/Apresentacao'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurant: builder.query<Cardapio, string>({
            query: (id) => `restaurantes/${id}`
        })
    })
})

export const { useGetRestaurantQuery } = api

export default api