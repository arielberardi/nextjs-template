"use server";

import { cookies } from "next/headers";
import { defaultLocale, type Locale } from "@/i18n/config";

const COOKIE_NAME = "NEXT_AUTH_LOCALE";

/**
 * Retrieves the user's locale from cookies or returns the default locale.
 *
 * @returns The user's locale stored in cookies, or the default locale if none is set.
 */
export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

/** Sets the user's locale in cookies.
 *
 * @param locale - The locale to be set for the user.
 */
export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
