/*
 * Module dependencies
 */
var express = require('express');
var helmet = require('helmet');
var i18n = require('i18n-abide');
var logger = require('morgan');
var uuid = require('uuid');
var config = require('./config');
var routes = require('./routes');

var app = express();

// Initialize i18n first
// i18n overrides res.locals, it doesn't merge it with current res.locals object
app.use(
  i18n.abide({
    supported_languages: ['ar', 'en'],
    translation_directory: 'public/i18n',
    template_engine: 'pug',
    template_file_ext: 'pug'
  })
);

// Generate NONCE for CSP
app.use((req, res, next) => {
  res.locals.nonce = uuid.v4();
  next();
});

// Initialize Helmet
app.use(
  helmet(
    {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
          frameSrc: ["'self'", 'www.google.com', 'www.youtube.com'],
          imgSrc: ["'self'", 'blob:', config.apiBaseUrl, ...(config.additionalImageSources || [])],
          styleSrc: [
            "'self'",
            // TODO: fix AngularJS inline style
            "'unsafe-inline'",
          ],
          connectSrc: ["'self'", config.apiBaseUrl, ...(config.additionalXHRImageSources || [])],
        }
      },
      ...config.helmet
    },
  )
);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', routes.dashboardDefault);
app.get('/:intake_locale/:ui_lang', routes.dashboard);
// app.get('/image-gallery', routes.imageGallery);
app.get('/password-reset', routes.passwordReset);

app.listen(3002);
