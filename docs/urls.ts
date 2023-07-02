export const shortenUrl = {
    tags: ['Urls Operations'],
    description: 'Create a very short version of a given URL. The short version should be readily convertible back to the orginal UrL.',
    operationId: 'shortenUrl',
    security: [
        {
            cookieAuth: []
        }
    ],  
    requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                longUrl: {
                    type: 'string',
                    example: 'https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=585475370855&hvpos=&hvnetw=g&hvrand=6033694070608085331&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1010294&hvtargid=kwd-10573980&hydadcr=2246_13468515',
                    required: true
                },
                customDomain: {
                    type: 'string',
                    example: 'testuser@gmail.com'
                },
                description: {
                    type: 'string',
                    required: true
                },
              }
            },
          },
        },
        required: true,
      },
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/urlResponse'
              },
            },
          },
        },
        '400': {
            description: 'Invalid input or bad request',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/badRequest'
                },
              },
            },
          },
        '404': {
          description: 'Not Found',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/notFound',
                },
              },
            },
        },
        '500': {
          description: 'Server Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/serverError',
                },
              },
            },
        }
    }
}


//Get URL by Id
export const getUrlById = {
    tags: ['Urls Operations'],
    description: 'Returns the URL record whose id is specified.',
    operationId: 'getUrlById',
    security: [
        {
            cookieAuth: []
        }
    ],  
    parameters: [
        {
            name: 'id',
            type: 'string',
            in: 'path',
            description: 'Url Id',
            required: true
        }
    ],     
    responses: {
        '200': {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/urlResponse'
              },
            },
          },
        },
        '400': {
            description: 'Invalid Input or Bad Request',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/badRequest'
                },
              },
            },
          },
        '404': {
          description: 'Client Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/notFound',
                },
              },
            },
        },
        '500': {
          description: 'Server Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/serverError',
                },
              },
            },
        }
    }
}


//Get URLs histor
export const getUrlsHistory = {
    tags: ['Urls Operations'],
    description: 'Returns a paginated list or array of all URls that have been created by a user.',
    operationId: 'getUrlsHistory',
    security: [
        {
            cookieAuth: []
        }
    ],  
    parameters: [
        {
            name: 'page',
            type: 'string',
            in: 'path',
            description: 'Page Number',
            required: true
        }
    ],     
    responses: {
        '200': {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/paginatedUrls'
              },
            },
          },
        },
        '400': {
            description: 'Invalid Input or Bad Request',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/badRequest'
                },
              },
            },
          },
        '404': {
          description: 'Client Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/notFound',
                },
              },
            },
        },
        '500': {
          description: 'Server Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/serverError',
                },
              },
            },
        }
    }
}


//Get URLs histor
export const getUrlAnalytics = {
    tags: ['Urls Operations'],
    description: 'Returns a paginated list or array of analytics pr usage information about the specified URL. The information returned include the IP address with most requests and geolation information about each IP.',
    operationId: 'getUrlAnalytics',
    security: [
        {
            cookieAuth: []
        }
    ],  
    parameters: [
        {
            name: 'urlCode',
            type: 'string',
            in: 'path',
            description: 'Url Code',
            required: true
        },
        {
            name: 'page',
            type: 'string',
            in: 'path',
            description: 'Page Number',
            required: true
        }
    ],     
    responses: {
        '200': {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/paginatedUrlAnalytics'
              },
            },
          },
        },
        '400': {
            description: 'Invalid Input or Bad Request',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/badRequest'
                },
              },
            },
          },
        '404': {
          description: 'Client Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/notFound',
                },
              },
            },
        },
        '500': {
          description: 'Server Error',
            content: {
              'application/json': {
                schema: {
                    $ref: '#/components/schemas/serverError',
                },
              },
            },
        }
    }
}