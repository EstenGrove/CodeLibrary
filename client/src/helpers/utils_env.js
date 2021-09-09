const SERVICES_ENV = {
	dev: {
		base: "http://localhost:8080",
		username: "",
		password: "",
	},
	test: {
		base: "http://localhost:8080",
		username: "",
		password: "",
	},
	prod: {
		base: "https://sgore.dev/uptime-monitor",
		username: "",
		password: "",
	},
};

const { dev, test, prod } = SERVICES_ENV;

// current 'ENVIRONMENT' name
const CURRENT_ENV_NAME = "test";
// current 'ENVIRONMENT' settings
const CURRENT_ENV = SERVICES_ENV[CURRENT_ENV_NAME];

const BASE_URL = CURRENT_ENV.base;

export {
	SERVICES_ENV,
	// separate env(s)
	dev,
	test,
	prod,
};

export {
	BASE_URL as baseUrl,
	CURRENT_ENV as currentEnv,
	CURRENT_ENV_NAME as currentEnvName,
};
