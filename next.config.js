const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
	webpack(config, options) {
		config.resolve.modules.push(path.resolve("./"));
		return config;
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		backendUrl: process.env.BACKEND_URL,
	},
	distDir: "build",
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:9000*",
			},
		];
	},
});
