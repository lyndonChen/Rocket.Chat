Package.describe({
	name: 'rocketchat:enterprise-i18n',
	version: '0.0.1',
	summary: 'RocketChat Enterprise i18n',
	git: '',
});

const fs = Npm.require('fs');

Package.onUse(function(api) {
	api.use('templating', 'client');

	const workingDir = process.env.PWD || '.';
	const i18nDir = `${ workingDir }/packages/rocketchat-enterprise-i18n/i18n`;

	fs.readdirSync(i18nDir).forEach(function(filename) {
		if (filename.indexOf('.json') > -1 && fs.statSync(`${ i18nDir }/${ filename }`).size > 16) {
			api.addFiles(`i18n/${ filename }`);
		}
	});

	api.use('rocketchat:tap-i18n@1.9.1');
});
