import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: { exclude: ["error", "warning"] },
    reactRemoveProperties: { properties: ["data-testid"] },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
