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
import {
  colorAccent,
  colorSecondary,
  colorSurfaceGray,
  typeBase,
  typeRegularH6,
} from "./styles/theme.css";
import { styleBody, styleError, styleErrorArticle } from "./styles/app.css";
import { SiteContextProvider } from "./context/AppContext";
import Xlink from "./components/Xlink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Edwin Martinson | Web Developer" },
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
  let message = "What the fuck.";
  let details = "Some shit just happened.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "Sorry, page not found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <SiteContextProvider>
      <main className={styleError}>
        <article className={styleErrorArticle}>
          <h1>
            <span className={typeRegularH6}>
              <span className={colorSurfaceGray}>{`<`}</span>
              <span className={colorSecondary}>h1</span>
              <span className={colorSurfaceGray}>{`>`}</span>
            </span>
            <span className={colorSecondary} style={{ fontSize: "12.5em" }}>
              {message === "404" ? (
                <span>
                  4<span className={colorAccent}>0</span>4
                </span>
              ) : (
                <span>
                  Err<span className={colorAccent}>o</span>r
                </span>
              )}
            </span>
            <span className={typeRegularH6}>
              <span className={colorSurfaceGray}>{`</`}</span>
              <span className={colorSecondary}>h1</span>
              <span className={colorSurfaceGray}>{`>`}</span>
            </span>
          </h1>
          <p>
            <span>{details}</span>
            {message === "404" && (
              <span>
                &nbsp;Return to <Xlink varient="bracket">homepage</Xlink>
              </span>
            )}
          </p>
          {/* <p className={colorSurfaceGray}>{stack}</p> */}
        </article>
      </main>
    </SiteContextProvider>
  );
}
