import account from "./account";
import booking from "./booking";
import { catalogo } from "./catalogo-schema";
import { emprende } from "./emprende-schema";
import { home } from "./home-schema";
import hotelRoom from "./hotelRoom";
import { nuestras_tiendas } from "./nuestras-tiendas-schema";
import { pedidos } from "./pedidos";
import { product } from "./product-schema";
import review from "./review";
import user from "./user";
import verificationToken from "./verificationToken";

export const schemaTypes = [
  user,
  home,
  product,
  nuestras_tiendas,
  emprende,
  pedidos,
  catalogo,
  account,
  booking,
  hotelRoom,
  review,
  verificationToken,
];
