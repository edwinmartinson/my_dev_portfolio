import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { applyReset } from "./styles/reset.css";
import { typeBase } from "./styles/theme.css";
import { styleBody } from "./styles/app.css";
import { SiteContextProvider } from "./context/AppContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev Portfolio" },
    {
      name: "author",
      content: "Edwin Martinson",
    },
    {
      name: "description",
      content:
        "A Full-stack web developer, with experience in crafting production ready applications with technologies like react.js, next.js and node.js. Along with robust relational databases like MySQL and PostgreSQL. With a strong focus on product design and application-data security.",
    },
    {
      name: "keywords",
      content:
        "Edwin Martinson, Web Developer, Full-stack, Software Engineer, UI/UX Designer, Product Designer, TypeScript, React.js, Node.js, Deno, MySQL, PostgreSQL",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon.jpg",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`${applyReset} ${styleBody} ${typeBase}`}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SiteContextProvider>
      <Outlet />
    </SiteContextProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
