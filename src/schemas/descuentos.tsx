import { defineField, defineType } from "sanity";

export const descuentos = defineType({
  name: "descuentos",
  title: "Descuentos",
  type: "document",
  validation: (rule) => rule.required(),

  fields: [
    {
      name: "titulo",
      title: "Descuentos Globales",
      type: "string",
      initialValue: "Descuentos Globales",
    },
    {
      name: "descuentofritzsport",
      title: "Descuento Fz Premium",
      type: "number",
    },
    {
      name: "descuentooutlet",
      title: "Descuento Outlet Fz Premium",
      type: "number",
    },
    {
      name: "descuentofz",
      title: "Descuento Fz Premium",
      type: "number",
    },
  ],
});
