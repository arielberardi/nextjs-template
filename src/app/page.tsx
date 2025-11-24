import { css } from "@pandas/css";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  return <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>{t("HomePage.title")}</div>;
}
