import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties: { properties: ["data-testid"] },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
