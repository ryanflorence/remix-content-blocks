import { Links, Meta, Scripts, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { getBlocks } from "./api";
import { components } from "./blocks/lazy.jsx";

export async function loader() {
  let blocks = await getBlocks();
  return blocks;
}

export default function Root() {
  let blocks = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Content Blocks!</h1>
        {blocks.map((block, index) => {
          let Block = components[block.type];
          let { type, ...props } = block;
          return (
            <div
              key={index}
              style={{ padding: "2rem", borderTop: "1px solid" }}
            >
              <h2>{block.type}</h2>
              <Block {...props} />
            </div>
          );
        })}
        <Scripts />
      </body>
    </html>
  );
}
