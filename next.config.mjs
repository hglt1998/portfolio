import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "prod-files-secure.s3.us-west-2.amazonaws.com"
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com"
			}
		]
	}
};

export default withNextIntl(nextConfig);
