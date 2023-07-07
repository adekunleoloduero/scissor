"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDocumentation = void 0;
const auth_1 = require("./auth");
const urls_1 = require("./urls");
const components_1 = require("./components");
const apiDocumentation = {
    openapi: '3.1.0',
    info: {
        version: '1.0.0',
        title: 'MinLink REST API Documentation',
        description: 'MinLink is a URLs shortening service.',
        contact: {
            name: 'Sheriff Adekunle Tajudeen',
            email: 'dnexteinstein2@gmail.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    servers: [
        {
            url: 'https://minlink-26mo.onrender.com',
            description: 'Production Server',
        },
        {
            url: 'http://localhost:5000',
            description: 'Local Server',
        }
    ],
    tags: [
        {
            name: 'Authentication',
        },
        {
            name: 'URLs Operations',
        }
    ],
    paths: {
        //auth
        '/auth/signup': {
            post: auth_1.signUp,
        },
        '/auth/signin': {
            post: auth_1.signIn
        },
        //urls
        '/api/urls/shorten': {
            post: urls_1.shortenUrl
        },
        '/{urlCode}': {
            get: urls_1.returnLongUrl
        },
        '/api/urls/{id}': {
            get: urls_1.getUrlById
        },
        '/api/urls/history/{page}/{pageStatus}': {
            get: urls_1.getUrlsHistory
        },
        '/api/urls/analytics/{urlCode}/{page}/{pageStatus}': {
            get: urls_1.getUrlAnalytics
        }
    },
    components: {
        schemas: {
            userResponse: components_1.comps.userResponse,
            urlResponse: components_1.comps.urlResponse,
            paginatedUrls: components_1.comps.paginatedUrls,
            paginatedUrlAnalytics: components_1.comps.paginatedUrlAnalytics,
            unAuthorized: components_1.comps.unAuthorized,
            badRequest: components_1.comps.badRequest,
            notFound: components_1.comps.notFound,
            serverError: components_1.comps.serverError
        },
        securitySchemes: {
            cookieAuth: {
                type: 'api_key',
                in: 'cookie',
                name: 'access_token'
            }
        }
    }
};
exports.apiDocumentation = apiDocumentation;
