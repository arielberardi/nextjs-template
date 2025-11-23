import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/lib/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  // Fetch locals from either public folder or some other URL
  const res = await fetch(`${process.env.LOCALES_URL || ""}/locales/${locale}.json`);
  if (!res.ok) {
    throw new Error(`Could not load messages for locale: ${locale}`);
  }

  const messages = await res.json();
  return {
    locale,
    messages,
  };
});
