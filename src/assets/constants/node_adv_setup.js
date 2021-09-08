export const packageJson = `
// -----root level package.json----- //

{
	"main": "index.js",
	"engines": {
		"node": "12.18.2"
	},
	"dependencies": {
		"express": "^4.17.1",
		"express-async-errors": "^3.1.1",
		"loglevel": "^1.6.8",
		"mongoose": "^6.0.5"
	},
	"devDependencies": {
		"@babel/cli": "^7.10.4",
		"@babel/core": "^7.10.4",
		"@babel/preset-env": "^7.10.4",
		"@babel/register": "^7.10.4",
		"nodemon": "^2.0.4"
	},
	"scripts": {
		"start": "node .",
		"build": "babel --delete-dir-on-start --out-dir dist --copy-files --ignore \"**/__tests__/**,**/__mocks__/**\" --no-copy-ignored src"
	}
}
`;

export const indexjs = `
// -----root level index.js----- //

if (process.env.NODE_ENV === 'production') {
	require('./dist')
} else {
	require('nodemon')({script: 'dev.js'})
}`

export const devjs = `
// -----root level dev.js----- //

require('@babel/register')
require('./src')`

export const babelSetup = `
// -----root level .babelrc.js----- //

const pkg = require('./package.json')
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: pkg.engines.node,
        },
      },
    ],
  ],
}`;

export const startjs = `
// -----/src/start.js----- //

import express from 'express'
import 'express-async-errors'
import logger from 'loglevel'
import {getRoutes} from './routes'
import mongoose from 'mongoose';

function startServer({port = 8000} = {}) {
	const app = express()
	app.use(express.json());
	app.use('/api', getRoutes())
	return new Promise(resolve => {
		const server = app.listen(port, () => {
			const mongodb = 'mongodb://localhost:27017/myprofile';
			mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
			const db = mongoose.connection;
			db.on('error',() => console.error('db error'));
			logger.info(\`Listening on port \${server.address().port}\`)
			const originalClose = server.close.bind(server)
			server.close = () => {
			return new Promise(resolveClose => {
				originalClose(resolveClose)
			})
			}
			resolve(server)
		})
	})
}

export {startServer};`;

export const src_index = `
// -----/src/index.js----- //
import logger from 'loglevel'
import {startServer} from './start'
logger.setLevel('info')
startServer()`;

export const routes = `
// -----/src/routes/index.js----- //

import express from 'express';
import { mainController } from '../controllers';

function getRoutes() {
	const router = express.Router()
	router.use('/data', mainController())
	return router
}
export { getRoutes }`;

export const contactCreation = `
async function createContacts (req, res) {
	const body = req.body;
	const newContact = new ContactsModel({
		name: body?.name,
		message: body?.message,
		email: body?.email
	});
	try {
		await newContact.save();
		res.send(ResponseFormatter(
			200,
			'ok'
		));
	} catch (err) {
		console.error(err);
		res.send(ResponseFormatter(
			400,
			err
		));
	}
};`;