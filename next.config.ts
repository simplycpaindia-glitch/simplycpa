import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // CPA Radar became The CPA Pulse. In-page anchors (#update-…) survive the redirect.
    return [{ source: "/radar", destination: "/pulse", permanent: true }];
  },
};

export default nextConfig;
