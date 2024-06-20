import { useEffect, useState } from "react";
import Link from "next/link";

import NavMenuDesktop from "./nav-menu-desktop";
import NavMenuHoverDesktop from "./nav-menu-hover-desktop";
import NavSearch from "./nav-search";
import NavTop from "./nav-top";

const dataHeader = {
  menuSubmenu: [
    {
      id: "mujer",
      titulo: "Mujer",
      url: "tienda?genero=mujer",

      infoNav: [
        {
          categoria: [
            {
              id: "1",
              title: "Ver Todas las Zapatillas",
              url: "/tienda?genero=mujer&tipo=calzado",
            },
            // {
            //   id: "3",
            //   title: "Terrex",
            //   url: "/tienda?genero=mujer&category=terrex",
            // },
            // {
            //   id: "5",
            //   title: "Originals",
            //   url: "/tienda?genero=mujer&category=originals",
            // },
            {
              id: "6",
              title: "Sandalias",
              url: "/tienda?genero=mujer&category=sandalias",
            },
            {
              id: "7",
              title: "Calzado de Plataforma",
              url: "/tienda?genero=mujer&category=plataforma",
            },
          ],
        },
        {
          categoria: [
            {
              id: "9",
              title: " Ropa",
              url: "/tienda?genero=mujer&category=ropa",
            },
            {
              id: "10",
              title: "Polos",
              url: "/tienda?genero=mujer&category=polo",
            },
            {
              id: "12",
              title: "Casacas",
              url: "/tienda?genero=mujer&category=casaca",
            },
            {
              id: "12",
              title: "Poleras",
              url: "/tienda?genero=mujer&category=polera",
            },
            {
              id: "12",
              title: "Pantalones",
              url: "/tienda?genero=mujer&category=pantalon",
            },
            {
              id: "12",
              title: "Buzos",
              url: "/tienda?genero=mujer&category=buzo",
            },
          ],
        },
        {
          categoria: [
            {
              id: "13",
              title: "Accesorios",
              url: "/tienda?tipo=accesorios&genero=mujer",
            },
            {
              id: "14",
              title: "Bolsos",
              url: "/tienda?tipo=accesorios&genero=mujer&category=bolso",
            },
            {
              id: "15",
              title: "Mochilas",
              url: "/tienda?tipo=accesorios&genero=mujer&category=mochila",
            },
            {
              id: "16",
              title: "Gorras",
              url: "/tienda?tipo=accesorios&genero=mujer&category=gorra",
            },
          ],
        },
      ],
    },
    {
      id: "Hombre",
      titulo: "Hombre",
      url: "tienda?genero=hombre",
      infoNav: [
        {
          categoria: [
            {
              id: "1",
              title: "Ver Todas las Zapatillas",
              url: "/tienda?genero=hombre&tipo=calzado",
            },
            // {
            //   id: "3",
            //   title: "Originals",
            //   url: "/tienda?genero=hombre&category=originals",
            // },
            // {
            //   id: "5",
            //   title: "Urbano",
            //   url: "/tienda?tipo=calzado&genero=hombre&category=urbano",
            // },
            {
              id: "6",
              title: "Sandalias",
              url: "/tienda?tipo=calzado&genero=hombre&category=sandalia",
            },
          ],
        },
        {
          categoria: [
            {
              id: "9",
              title: " Ropa",
              url: "/tienda?tipo=ropa&genero=hombre",
            },
            {
              id: "10",
              title: "Polos",
              url: "/tienda?tipo=ropa&genero=hombre&category=polo",
            },
            {
              id: "12",
              title: "Casacas",
              url: "/tienda?tipo=ropa&genero=hombre&category=casaca",
            },
            {
              id: "12",
              title: "Poleras",
              url: "/tienda?tipo=ropa&genero=hombre&category=polera",
            },
            {
              id: "12",
              title: "Pantalones",
              url: "/tienda?tipo=ropa&genero=hombre&category=pantalon",
            },
            {
              id: "12",
              title: "Buzos",
              url: "/tienda?tipo=ropa&genero=hombre&category=buzo",
            },
          ],
        },
        {
          categoria: [
            {
              id: "13",
              title: "Accesorios",
              url: "/tienda?tipo=accesorios&genero=hombre",
            },

            {
              id: "15",
              title: "Mochilas",
              url: "/tienda?tipo=accesorios&genero=hombre&category=mochila",
            },
            {
              id: "16",
              title: "Gorras",
              url: "/tienda?tipo=accesorios&genero=hombre&category=gorra",
            },
          ],
        },
      ],
    },

    {
      id: "ninos",
      titulo: "Niños",
      url: "tienda?genero=niños",
      infoNav: [
        {
          categoria: [
            {
              id: "35",
              title: "Calzado Niño",
              url: "/tienda?tipo=calzado&genero=niños",
            },
            {
              id: "36",
              title: "Zapatillas",
              url: "/tienda?tipo=calzado&genero=niño&category=zapatilla",
            },

            {
              id: "369",
              title: "Sandalias",

              url: "/tienda?tipo=calzado&genero=niño&category=sandalia",
            },
          ],
        },

        {
          categoria: [
            {
              id: "35",
              title: "Calzado Niña",
              url: "/tienda?tipo=calzado&genero=niña",
            },
            {
              id: "36",
              title: "Zapatillas",
              url: "/tienda?tipo=calzado&genero=niña&category=zapatilla",
            },
            {
              id: "39",
              title: "Sandalias",
              url: "/tienda?tipo=calzado&genero=niña&category=sandalia",
            },
          ],
        },
      ],
    },
    {
      id: "tienda",
      titulo: "Tienda",
      url: "tienda",
    },
    // {
    //   id: "colections",
    //   titulo: "Colecciones",
    //   url: "tienda?category=originals",
    //   infoNav: [
    //     // { label: "Adidas Superstar", value: "superstar" },
    //     // { label: "Adidas Forum", value: "forum" },
    //     // { label: "Adidas Stan Smith", value: "stansmith" },
    //     // { label: "Adidas Samba", value: "samba" },
    //     // { label: "Adidas Gazelle", value: "gazelle" },
    //     // { label: "Adidas Campus", value: "campus" },

    //     {
    //       categoria: [
    //         {
    //           id: "1",
    //           title: "Adidas",
    //           url: "/tienda?marca=adidas&category=originals",
    //         },
    //         {
    //           id: "3",
    //           title: " Superstar",
    //           url: "/tienda?coleccion=superstar",
    //         },
    //         {
    //           id: "5",
    //           title: "Forum",
    //           url: "/tienda?coleccion=forum",
    //         },
    //         {
    //           id: "6",
    //           title: " Stan Smith",
    //           url: "/tienda?coleccion=stansmith",
    //         },
    //         {
    //           id: "6",
    //           title: " Samba",
    //           url: "/tienda?coleccion=samba",
    //         },
    //         {
    //           id: "6",
    //           title: " Gazelle",
    //           url: "/tienda?coleccion=gazelle",
    //         },
    //         {
    //           id: "6",
    //           title: " Campus",
    //           url: "/tienda?coleccion=campus",
    //         },
    //       ],
    //     },
    //     {
    //       categoria: [
    //         {
    //           id: "1",
    //           title: "Nike",
    //           url: "/tienda?marca=nike&category=originals",
    //         },
    //         {
    //           id: "3",
    //           title: "Air Force 1",
    //           url: "/tienda?coleccion=airforce1",
    //         },
    //         {
    //           id: "4",
    //           title: "Air Max Excee",
    //           url: "/tienda?coleccion=airmaxexcee",
    //         },
    //         {
    //           id: "6",
    //           title: "Air Max 90",
    //           url: "/tienda?coleccion=airforcemax90",
    //         },
    //         {
    //           id: "5",
    //           title: "Jordan",
    //           url: "/tienda?coleccion=jordan",
    //         },
    //         {
    //           id: "5",
    //           title: "Dunk",
    //           url: "/tienda?coleccion=dunk",
    //         },
    //       ],
    //     },
    //     // {
    //     //   categoria: [
    //     //     {
    //     //       id: "9",
    //     //       title: "Nike",
    //     //       url: "/tienda?tipo=ropa&genero=hombre",
    //     //     },
    //     //     {
    //     //       id: "10",
    //     //       title: "Polos",
    //     //       url: "/tienda?tipo=ropa&genero=hombre&category=polo",
    //     //     },
    //     //     {
    //     //       id: "12",
    //     //       title: "Casacas",
    //     //       url: "/tienda?tipo=ropa&genero=hombre&category=casaca",
    //     //     },
    //     //     {
    //     //       id: "12",
    //     //       title: "Poleras",
    //     //       url: "/tienda?tipo=ropa&genero=hombre&category=polera",
    //     //     },
    //     //     {
    //     //       id: "12",
    //     //       title: "Pantalones",
    //     //       url: "/tienda?tipo=ropa&genero=hombre&category=pantalon",
    //     //     },
    //     //     {
    //     //       id: "12",
    //     //       title: "Buzos",
    //     //       url: "/tienda?tipo=ropa&genero=hombre&category=buzo",
    //     //     },
    //     //   ],
    //     // },
    //   ],
    // },

    // {
    //   id: "Ntiendas",
    //   titulo: "Ubicanos",
    //   url: "#",
    // },

    {
      id: "outlet",
      titulo: "SALE",
      url: "outlet",
    },
    {
      id: "nuestras-tiendas",
      titulo: "Nuestras Tiendas",
      url: "nuestras-tiendas",
    },
  ],
};

export function NavNavigation({
  children,
  setActiveSearchDesk,
  activeSearchDesk,
}) {
  const [activeHoverNavDesktop, setActiveHoverNavDesktop] = useState();

  // desktop nav
  const [hoverMenu, setHoverMenu] = useState(dataHeader.menuSubmenu[0].infoNav);
  const [andler, setAndler] = useState(false);
  useEffect(() => {
    if (!andler) {
      setActiveHoverNavDesktop(undefined);
    }
  }, [andler]);

  const handleHover = (index) => {
    setActiveHoverNavDesktop(index);

    setAndler(true);
    setHoverMenu(dataHeader.menuSubmenu[index].infoNav);
  };

  return (
    <ul className="flex w-full items-center justify-around">
      <div>{children}</div>
      <div className=" grid grid-flow-col items-center gap-x-10 2xl:gap-x-16">
        <NavMenuDesktop
          handleHover={handleHover}
          setAndler={setAndler}
          dataHeader={dataHeader}
          activeHoverNavDesktop={activeHoverNavDesktop}
        />
      </div>
      <div className="xl:hidden">
        <NavTop>
          <NavSearch />
        </NavTop>
      </div>
      <div className="hidden xl:flex">
        <NavTop
          setActiveSearchDesk={setActiveSearchDesk}
          activeSearchDesk={activeSearchDesk}
        >
          <NavSearch />
        </NavTop>
      </div>
      <NavMenuHoverDesktop
        andler={andler}
        setAndler={setAndler}
        hoverMenu={hoverMenu}
      />
    </ul>
  );
}
