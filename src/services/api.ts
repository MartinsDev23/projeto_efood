import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cardapio } from "../components/PerfilComponents/Apresentacao";

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    adress: {
      description: string;
      city: string;
      zipCode: string;
      numberHouse: string;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: string;
      expires: {
        month: string;
        year: string;
      };
    };
  };
};

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Cardapio, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => {
        console.log("Corpo da requisição:", body);
        return {
          url: "checkout",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetRestaurantQuery, usePurchaseMutation } = api;

export default api;
