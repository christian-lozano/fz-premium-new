"use client";

import { Key, useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import { Image } from "sanity";

import { SanityProduct } from "@/config/inventory";
import { precioProduct } from "@/config/precio-product";

import ProductAddToCart from "./product-add-to-cart";
import { FiltroProducts } from "@/utilits/filtro-products";

interface Props {
  product: SanityProduct;
  descuentos: any;
}

export function ProductInfo({ product, descuentos }: Props) {
  const [data, setData] = useState([]);
  // const [hoverImage, setHoverImage] = useState(
  //   urlForImage(product.images[0].asset._ref).url()
  // )
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const productFilter = FiltroProducts(product);

    const filter = `*[${productFilter}][0..5]`;
    client
      .fetch(
        groq`${filter} {
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      priceecommerce,
      description,
      genero,
      categories,
      marca,
      tallas,
      stock,
      descuento,
      preciomanual,
      "slug":slug.current
    }`
      )
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [product?.sku]);
  return (
    <div className=" h-full w-full  px-5     lg:mt-0  lg:px-2 xl:mt-0 xl:px-3 2xl:sticky 2xl:top-44  2xl:mt-0 2xl:max-w-lg 2xl:px-5">
      <div className=" w-full ">
        <div className="">
          <h1 className="hidden text-3xl font-bold uppercase tracking-tight xl:block">
            {product?.name} - {product?.genero}
          </h1>
          <div className="mt-3 hidden 2xl:block">
            <h2 className="sr-only">Product information</h2>
            <div className="mb-5 flex">
              {descuentos.descuentofritzsport > 0 || product.descuento ? (
                <>
                  {descuentos.descuentofritzsport ? (
                    <p className=" mr-2 text-3xl font-semibold tracking-tight text-[#767677] line-through">
                      S/{product?.priceecommerce}
                    </p>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}

              <p className="text-3xl tracking-tight ">
                S/
                {precioProduct(
                  product.descuento,
                  product.priceecommerce,
                  product.preciomanual,
                  descuentos
                )}
              </p>
            </div>
          </div>

          <h6 className="text-md tracking-tight">Marca: {product.marca}</h6>
          <h5 className="text-md tracking-tight">Sku: {product.sku}</h5>

          {/* <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6 text-justify text-base 2xl:hidden">
              {product.description}
            </div>
          </div> */}
          {data.length > 0 && <div className="mt-5 font-bold">Colores:</div>}
          <div className="mt-2 flex gap-1">
            {data?.map(
              (el: {
                id: Key | null | undefined;
                slug: any;
                sku: any;
                images: { asset: { _ref: Image } }[];
              }) => (
                <Link key={el.id} href={`/products/${el.slug}/${el.sku}`}>
                  <img
                    // onMouseEnter={() =>
                    //   setHoverImage(urlForImage(el.images[0].asset._ref).url())
                    // }
                    // onMouseLeave={() =>
                    //   setHoverImage(urlForImage(product.images[0].asset._ref).url())
                    // }
                    width={70}
                    height={70}
                    className="relative"
                    src={urlForImage(el.images[0].asset._ref).url()}
                    alt=""
                  />
                </Link>
              )
            )}
          </div>
        </div>
        <ProductAddToCart product={product} descuentos={descuentos} />
      </div>
    </div>
  );
}
