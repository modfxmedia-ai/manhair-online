"use client";

import { useEffect, useRef } from "react";

type HwFn = { (...args: unknown[]): void; q?: unknown[] };

declare global {
  interface Window {
    _hw?: HwFn;
  }
}

type CherryWidgetProps = {
  /** Cherry account slug (from the live widget `variables.slug`). */
  slug?: string;
  /** Brand name shown by the widget (`variables.name`). */
  name?: string;
  /** Primary brand color used by the widget UI. */
  primaryColor?: string;
  /** Secondary/tint color used by the widget UI. */
  secondaryColor?: string;
  /** Font family the widget renders with. */
  fontFamily?: string;
};

/**
 * Cherry financing widget embed (withcherry.com).
 *
 * Replicates the exact loader + init configuration used on the live
 * ManHair pages — the account slug, brand name, style variables, and
 * the full set of rendered sections are all passed verbatim per page.
 * The widget mounts its hero / how-it-works / testimony / FAQ /
 * calculator UI into the `#all` node returned below. Only the
 * surrounding page styling changes; the financing logic and
 * third-party embed are untouched.
 *
 * Defaults match the live /payment-plans/ embed.
 */
export function CherryWidget({
  slug = "manhaironline",
  name = "MANHAIR",
  primaryColor = "#212121",
  secondaryColor = "#F2F2F2",
  fontFamily = "Raleway",
}: CherryWidgetProps = {}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!window._hw) {
      const hw = function (this: unknown) {
        // eslint-disable-next-line prefer-rest-params
        (hw.q = hw.q || []).push(arguments);
      } as HwFn;
      window._hw = hw;

      const js = document.createElement("script");
      js.id = "_hw";
      js.src = "https://files.withcherry.com/widgets/widget.js";
      js.async = true;
      const fjs = document.getElementsByTagName("script")[0];
      fjs.parentNode?.insertBefore(js, fjs);
    }

    window._hw(
      "init",
      {
        debug: false,
        variables: {
          slug,
          name,
        },
        styles: {
          primaryColor,
          secondaryColor,
          fontFamily,
        },
      },
      ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
    );
  }, [slug, name, primaryColor, secondaryColor, fontFamily]);

  return <div id="all" />;
}
