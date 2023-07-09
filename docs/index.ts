import { signUp, signIn } from './auth';

import {
  shortenUrl,
  returnLongUrl,
  getUrlById,
  getUrlsHistory,
  getUrlAnalytics
} from './urls';

import { comps } from './components';



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
        post: signUp,
      },
      '/auth/signin': {
        post: signIn
      },
      //urls
      '/api/urls/shorten': {
        post: shortenUrl
      },
      '/{urlCode}': {
        get: returnLongUrl
      },
      '/api/urls/view/{id}': {
        get: getUrlById
      },
      '/api/urls/history/{page}/{pageStatus}': {
        get: getUrlsHistory
      },
      '/api/urls/analytics/{urlCode}/{page}/{pageStatus}': {
        get: getUrlAnalytics
      }
    },
    components: {
      schemas: {
        userResponse: comps.userResponse,
        urlResponse: comps.urlResponse,
        paginatedUrls: comps.paginatedUrls,
        paginatedUrlAnalytics: comps.paginatedUrlAnalytics,
        unAuthorized: comps.unAuthorized,
        badRequest: comps.badRequest,
        notFound: comps.notFound,
        serverError: comps.serverError
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
  
  export { apiDocumentation };