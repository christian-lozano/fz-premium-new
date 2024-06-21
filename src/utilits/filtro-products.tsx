import { SanityProduct } from "@/config/inventory";

export function FiltroProducts(products: SanityProduct) {
  const productFilter = `_type == "product" && priceecommerce != undefined && categories != "originals" && images != undefined && razonsocial == "fritzsport" && name match "${products.name}*" && sku != "${products.sku}" && genero == "${products.genero}"`;

  return productFilter;
}

export function FiltroGlobal() {
  const productFilter = `_type == "product" && priceecommerce != undefined && categories != "originals" && images != undefined && razonsocial == "fritzsport"  && images != null && tallas != undefined`;

  return productFilter;
}
interface Props {
  slug?: string;
  id?: string;
}
export function FiltroViewProduct(params: Props) {
  const productFilter = `*[_type == "product" && priceecommerce != undefined && categories != "originals" && razonsocial == "fritzsport" && slug.current == "${params.slug}" && sku == "${params.id}"][0]`;

  return productFilter;
}
