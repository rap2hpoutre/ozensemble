const { version, mobileAppVersion } = require("../package.json");

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || process.env.NODE_ENV || "development";

const PGHOST = process.env.PGHOST;
const PGPORT = process.env.PGPORT;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD || null;
const PGDATABASE = process.env.PGDATABASE;
const DATABASE_URL = process.env.DATABASE_URL;

const SENTRY_KEY = process.env.SENTRY_KEY || "https://b43d73353b7b48b8857deb69bca98da2@o348403.ingest.sentry.io/2213011";

const VERSION = version;
const MOBILE_VERSION = mobileAppVersion;

const TIPIMAIL_API_USER = process.env.TIPIMAIL_API_USER;
const TIPIMAIL_API_KEY = process.env.TIPIMAIL_API_KEY;
const TIPIMAIL_EMAIL_TO = process.env.TIPIMAIL_EMAIL_TO;
const TIPIMAIL_EMAIL_FROM = process.env.TIPIMAIL_EMAIL_FROM;

module.exports = {
  PORT,
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
  DATABASE_URL,
  ENVIRONMENT,
  SENTRY_KEY,
  VERSION,
  MOBILE_VERSION,
  TIPIMAIL_API_USER,
  TIPIMAIL_API_KEY,
  TIPIMAIL_EMAIL_TO,
  TIPIMAIL_EMAIL_FROM,
};
