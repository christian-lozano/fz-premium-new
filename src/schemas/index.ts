import account from "./account";
import booking from "./booking";
import hotelRoom from "./hotelRoom";
import { pedidos } from "./pedidos";
import review from "./review";
import user from "./user";
import verificationToken from "./verificationToken";

export const schemaTypes = [
  user,
  pedidos,
  account,
  booking,
  hotelRoom,
  review,
  verificationToken,
];
