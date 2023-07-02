"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnLongUrl = void 0;
//Return Long Url
exports.returnLongUrl = {
    tags: ['Other Operations'],
    description: 'Given a short url it returns the corresponding long url. The result can be used to redirect the user to the original url on the client side',
    operationId: 'returnLongUrl',
    parameters: [
        {
            name: 'uCode',
            type: 'string',
            in: 'path',
            description: 'Url Code',
            required: true
        }
    ],
    responses: {
        '200': {
            description: 'Success',
            content: {
                'application/json': {
                    schema: {
                        properties: {
                            longUrl: {
                                type: 'string',
                                example: 'https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=585475370855&hvpos=&hvnetw=g&hvrand=6033694070608085331&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1010294&hvtargid=kwd-10573980&hydadcr=2246_13468515'
                            }
                        }
                    },
                },
            },
        },
        '400': {
            description: 'Invalied input or bad request',
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
            description: 'Server Error.',
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
