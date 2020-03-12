const crypto = require('crypto');

const publicKey = 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF4ZDVhdnRNT2duclB1SGZZUVFZeAoxTHJvRWM4RVFFZ0tsMlJaQ2JRNWI1SVFDejhZcHpackRKcExHK1A1bGpOcEdxTEQxVnlFZ0lxY3hsN3h5Z2ZXCitnUndScUFXVjI2ZXloRjRRTFNtSWhpSlpwVVgwRWJrVDREMUpLbUNsTTFkNjFDQm4xTWs5Y2wrc3BVNjJpQm4KT3Z5dysxWW1ScnBLaWhMSFBoSUQ5WHRXcENpdEM5VWNHWHcvc0JLVzUra3kzYmd6c0p1ei95VlAwVzVsZzJaMQo0TGxjSmZSTHBydWRwRWg5T2RJTlEwSEFTMUNrNGdBbW5ranE3Y015bjN0QjBLMk1pUGtWaitFckN6TXhGd1NlCi9DM1Z0STl3TlVCeWhXRmpDUllqSEMzOUlBQ2Q2blczalBkc1lrTXFnTXJxY01XL2h6VG9YNDR1TEpybXhiTFYKSHdJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==';

function decrypt(encrypted) {
	const decrypted = crypto.publicDecrypt(Buffer.from(publicKey, 'base64'), Buffer.from(encrypted, 'base64'));

	return decrypted.toString('utf-8');
}

const [,, license] = process.argv;

if (!license) {
	console.log('You must pass a license');
	process.exit(1);
}

const contents = decrypt(license);

console.log(contents);
