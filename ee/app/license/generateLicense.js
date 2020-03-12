const crypto = require('crypto');
const fs = require('fs');

const [,, url, expiry, modules, maxActiveUsers] = process.argv;

if (!url) {
	console.error('You must specify an URL');
	process.exit();
}

if (!expiry) {
	console.error('You must specify an expiry date: YYYY-MM-DD');
	process.exit();
}

if (!modules) {
	console.error('You must specify modules for this license as a comma separated list');
	process.exit();
}

const license = {
	url,
	expiry,
	modules: modules.split(','),
};

if (maxActiveUsers) {
	license.maxActiveUsers = parseInt(maxActiveUsers);
}

fs.readFile('privateKey.pem', (err, data) => {
	if (err) {
		throw err;
	}

	const vv = crypto.privateEncrypt(data, Buffer.from(JSON.stringify(license)));

	console.log(vv.toString('base64'));
});
