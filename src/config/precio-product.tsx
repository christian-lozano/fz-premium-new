export function precioProduct(
  descuento: number | string | undefined,
  precioEcommerce: number | string | undefined | null,
  precioManual: number | string | undefined,
  descuentos: any
) {
  let resultado: Number;
  if (precioManual) {
    if (Number(precioManual) < 20) {
      resultado = 999;
    } else {
      resultado = Number(precioManual);
    }
  } else {
    const precio = precioEcommerce;

    if (
      Number(precio) < 20 ||
      precioEcommerce === null ||
      precioEcommerce === undefined
    ) {
      return (resultado = 999);
    } else {
      if (
        descuentos?.descuentofritzsport ||
        descuentos.descuentofritzsport === 0
      ) {
        if (descuentos.descuentofritzsport === 0) {
          return precioEcommerce;
        } else {
          const operation =
            (Number(descuentos.descuentofritzsport) / 100) * Number(precio);
          resultado = Number(precio) - operation;
          if (Number(resultado) <= 20) {
            return 999;
          } else {
            return Number(resultado.toFixed(0));
          }
        }
      } else {
        const operation = (Number(descuento) / 100) * Number(precio);
        resultado = Number(precio) - operation;

        if (Number(resultado) <= 20) {
          return 999;
        } else {
          return Number(resultado.toFixed(0));
        }
      }
    }
  }
}
