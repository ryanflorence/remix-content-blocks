import { lazy } from "react";

export let components = {
  tabs: lazy(() => import("./tabs.jsx")),
  youtube: lazy(() => import("./youtube.jsx")),
  "tweet-marquee": lazy(() => import("./tweet-marquee.jsx")),
};
