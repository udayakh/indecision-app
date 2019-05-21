# indecision-app
yarn init;
yarn add babel-preset@6.24.1 babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
live-server public
