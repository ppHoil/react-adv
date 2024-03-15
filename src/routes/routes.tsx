import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXcomponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXcomponent> | JSXcomponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
