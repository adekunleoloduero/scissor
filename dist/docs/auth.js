"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
exports.signUp = {
    tags: ['Authentication'],
    description: 'Signup a new user to the application.',
    operationId: 'singUp',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'testuser',
                            required: true
                        },
                        email: {
                            type: 'string',
                            example: 'testuser@gmail.com',
                            required: true
                        },
                        password: {
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
            description: 'Signup completed successfully.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '60564fcb544047cdc3844818',
                            },
                            username: {
                                type: 'string',
                                example: 'testuser',
                            },
                            email: {
                                type: 'string',
                                example: 'tesuser@gmail.com',
                            }
                        },
                    },
                },
            },
        },
        '400': {
            description: 'Invalid data supplied by the user.',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/badRequest'
                    },
                },
            },
        },
        '404': {
            description: 'Undefined URL path.',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/notFound',
                    },
                },
            },
        },
        '500': {
            description: 'Error in the server.',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/serverError',
                    },
                },
            },
        }
    }
};
//Sign in with email and password
exports.signIn = {
    tags: ['Authentication'],
    description: 'Signin with email and password.',
    operationId: 'singIn',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'testuser@gmail.com',
                            required: true
                        },
                        password: {
                            type: 'string',
                            example: 'test123',
                            required: true
                        },
                    }
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Signed in successfully. The session ID is returned in a cookie named `access_token`. You need to include this cookie in subsequent requests',
            headers: {
                SetCookie: {
                    schema: {
                        type: 'string',
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWY0ZGNiOWM2YTZiOTY2ZTMwN2JlNSIsImVtYWlsIjoidGVzdHVzZXJ0d29AZ21haWwuW29tIiuiaWF0IvoxNjg4MTYxOTI1fQ.bl6WkCA81jweQQopUo9jBJgCK7vLPsoOwgssnNikK0m'
                    }
                }
            },
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            user: {
                                $ref: '#/components/schemas/userResponse'
                            },
                            token: {
                                type: 'string',
                                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWY0ZGNiOWM2YTZiOTY2ZTMwN2JlNSIsImVtYWlsIjoidGVzdHVzZXJ0d29AZ21haWwuY29tIiwiaWF0IjoxNjg4MTYxOTI1fQ.bl6WkCA81jweQQopUo9jBJgCK7vLPsoOwgssnNikK0k'
                            }
                        },
                    },
                },
            },
        },
        '400': {
            description: 'Invalid Input or Bad Request',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/badRequest',
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
};
