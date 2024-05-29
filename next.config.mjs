import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.linke.su',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
