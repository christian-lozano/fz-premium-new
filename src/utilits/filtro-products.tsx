import { SanityProduct } from "@/config/inventory";

export function FiltroProducts(
  products: SanityProduct,
  razonsocial = "alexanderskate"
) {
  const productFilter = `_type == "product" && priceecommerce != undefined && priceecommerce != null  && images != undefined && razonsocial == "${razonsocial}" && name match "${products.name}*" && sku != "${products.sku}" && genero == "${products.genero}"`;

  return productFilter;
}

export function FiltroGlobal(razonsocial = "alexanderskate") {
  const productFilter = `_type == "product" && priceecommerce != undefined && priceecommerce != null  && images != undefined && razonsocial == "${razonsocial}"  && images != null && tallas != undefined`;

  return productFilter;
}
interface Props {
  slug?: string;
  id?: string;
}
export function FiltroViewProduct(
  params: Props,
  razonsocial = "alexanderskate"
) {
  const productFilter = `*[_type == "product" && priceecommerce != undefined && priceecommerce != null  && razonsocial == "${razonsocial}" && slug.current == "${params.slug}" && sku == "${params.id}"][0]`;

  return productFilter;
}
