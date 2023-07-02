"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comps = void 0;
exports.comps = {
    userResponse: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '605636683f6e29c81c8b2db0',
            },
            username: {
                type: 'string',
                example: 'testuser',
            }
        }
    },
    urlResponse: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '605636683f6e29c81c8b2db0',
            },
            userId: {
                type: 'string',
                example: '605636683f6e29c81d8b2db2'
            },
            longUrl: {
                type: 'string',
                example: 'https://www.amazon.com/Updated-Organizer-Cabinet-Adjustable-ORDORA/dp/B08DY9HRWD/ref=sr_1_4?_encoding=UTF8&crid=3T9EH9JRSQV3Q&keywords=kitchen&pd_rd_r=0a857a40-0442-4bc2-b4ca-34c5b59c1780&pd_rd_w=cP9yl&pd_rd_wg=7Gi4M&pf_rd_p=6495adb3-7346-40dc-9baa-c15e82da1fd7&pf_rd_r=KYD75EKW8E7ED3Y386TX&qid=1688186610&refinements=p_36%3A-5000&rnid=386465011&sprefix=kitchen%2Caps%2C162&sr=8-4"'
            },
            description: {
                type: 'string',
            },
            urlCode: {
                type: 'string',
                example: 'YIXOQcEL'
            },
            shortUrl: {
                type: 'string',
                example: 'https://domain/YIXOQcEL'
            },
            customDomain: {
                type: 'string',
                example: 'https://domain/'
            },
            qrCode: {
                type: 'string',
                example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAAS7SURBVO3BQW4DRxAEwcoB///ltI59GmCxTdkWKgJ/pGrJSdWik6pFJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteiTl4D8JjVPAHlCzQ2QJ9TcAJnUTEB+k5o3TqoWnVQtOqla9MkyNZuAvKFmAvKGmieATGreULMJyKaTqkUnVYtOqhZ98mVAnlDzBJBJzRNqboBMaiYgk5obIJuAPKHmm06qFp1ULTqpWvTJHwNkk5ongDyh5i85qVp0UrXopGrRJ3+MmgnIE0CeUPMEkL/spGrRSdWik6pFn3yZmt8EZFIzAdkEZFIzAZnUbFLzX3JSteikatFJ1aJPlgH5N6mZgExqJiCTmgnIpGYC8gaQSc0NkP+yk6pFJ1WLTqoWffKSmr8EyKRmAjKpuVFzo+ZGzf/JSdWik6pFJ1WLPnkJyKRmArJJzaTmDTU3QL4JyKRmArJJzTedVC06qVp0UrXoky9T8wSQSc0E5Ak1N0AmNZOaCcgE5A01E5A31DwBZFLzxknVopOqRSdViz75MiA3aiY1E5BJzQTkDTVPqLkBcqPmDTUTkDfUbDqpWnRSteikatEny4DcqHlCzY2aGyBPqJmATGomIJOaCcgbaiYgk5ongExqNp1ULTqpWnRStQh/ZBGQGzUTkDfUvAFkUvMEkBs1N0AmNW8AuVHzTSdVi06qFp1ULfrkJSCTmk1qJiATkEnNBOQJIE+omYBMQG7UTEDeUDMBuQEyqXnjpGrRSdWik6pFn7ykZpOaCcgTQCY1E5BNQJ5Qc6NmAvJNajadVC06qVp0UrXok5eATGomIJOaSc2Nmhsgk5oJyBtqJiCTmt+kZgJyo2YCMqnZdFK16KRq0UnVok9eUvMGkN+k5gkgTwC5UTMBmdRMam7U3ACZ1HzTSdWik6pFJ1WL8EdeAHKjZhOQb1JzA+QJNROQSc0NkE1qJiCTmjdOqhadVC06qVr0yTI1TwCZ1ExAJjUTkEnNBGRS84aaJ4BMaiYgN2omIJOaCcgTajadVC06qVp0UrXoky8D8gSQSc2NmgnIDZAbNROQSc0EZFLzhpoJyKRmAjKpuQEyqdl0UrXopGrRSdUi/JEXgExqboBMaiYgT6h5AsikZhOQSc0NkE1qJiBPqHnjpGrRSdWik6pF+CP/Y0Bu1ExANqmZgLyh5gkgm9S8cVK16KRq0UnVok9eAvKb1ExqboBMaiYgbwCZ1NwAeQLIpOYNNd90UrXopGrRSdWiT5ap2QTkBsgTQCY1E5BJzSY1E5AbNW+ouQEyqXnjpGrRSdWik6pFn3wZkCfUvKHmBsgEZFIzAXlDzRNA3lAzAZnUfNNJ1aKTqkUnVYs+qSs1E5BvUvMGkCfUbDqpWnRSteikatEnfwyQGzUTkAnIJiCTmieAPKHmBsikZtNJ1aKTqkUnVYs++TI136TmBsgE5Ak1E5AbNROQCcgTaiYgk5oJyKTmN51ULTqpWnRSteiTZUB+E5BNaiYgN2omIJOaJ4BMap5QMwGZ1HzTSdWik6pFJ1WL8EeqlpxULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFJ1WL/gHuJC8uixmeUwAAAABJRU5ErkJggg=="'
            },
            createAt: {
                type: 'date',
                example: '2023-06-04T06:03:33.484+00:00'
            }
        }
    },
    paginatedUrls: {
        properties: {
            urls: {
                type: 'arrray',
                example: [
                    {
                        _id: {
                            type: 'string',
                            example: '605636683f6e29c81c8b2de2',
                        },
                        userId: {
                            type: 'string',
                            example: '605636683f6e29c81d8b2db2'
                        },
                        longUrl: {
                            type: 'string',
                            example: 'https://www.amazon.com/Updated-Organizer-Cabinet-Adjustable-ORDORA/dp/B08DY9HRWD/ref=sr_1_4?_encoding=UTF8&crid=3T9EH9JRSQV3Q&keywords=kitchen&pd_rd_r=0a857a40-0442-4bc2-b4ca-34c5b59c1780&pd_rd_w=cP9yl&pd_rd_wg=7Gi4M&pf_rd_p=6495adb3-7346-40dc-9baa-c15e82da1fd7&pf_rd_r=KYD75EKW8E7ED3Y386TX&qid=1688186610&refinements=p_36%3A-5000&rnid=386465011&sprefix=kitchen%2Caps%2C162&sr=8-4"'
                        },
                        description: {
                            type: 'string',
                        },
                        urlCode: {
                            type: 'string',
                            example: 'YIXOQcEL'
                        },
                        shortUrl: {
                            type: 'string',
                            example: 'https://domain/YIXOQcEL'
                        },
                        customDomain: {
                            type: 'string',
                            example: 'https://domain/'
                        },
                        qrCode: {
                            type: 'string',
                            example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAAS7SURBVO3BQW4DRxAEwcoB///ltI59GmCxTdkWKgJ/pGrJSdWik6pFJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteiTl4D8JjVPAHlCzQ2QJ9TcAJnUTEB+k5o3TqoWnVQtOqla9MkyNZuAvKFmAvKGmieATGreULMJyKaTqkUnVYtOqhZ98mVAnlDzBJBJzRNqboBMaiYgk5obIJuAPKHmm06qFp1ULTqpWvTJHwNkk5ongDyh5i85qVp0UrXopGrRJ3+MmgnIE0CeUPMEkL/spGrRSdWik6pFn3yZmt8EZFIzAdkEZFIzAZnUbFLzX3JSteikatFJ1aJPlgH5N6mZgExqJiCTmgnIpGYC8gaQSc0NkP+yk6pFJ1WLTqoWffKSmr8EyKRmAjKpuVFzo+ZGzf/JSdWik6pFJ1WLPnkJyKRmArJJzaTmDTU3QL4JyKRmArJJzTedVC06qVp0UrXoky9T8wSQSc0E5Ak1N0AmNZOaCcgE5A01E5A31DwBZFLzxknVopOqRSdViz75MiA3aiY1E5BJzQTkDTVPqLkBcqPmDTUTkDfUbDqpWnRSteikatEny4DcqHlCzY2aGyBPqJmATGomIJOaCcgbaiYgk5ongExqNp1ULTqpWnRStQh/ZBGQGzUTkDfUvAFkUvMEkBs1N0AmNW8AuVHzTSdVi06qFp1ULfrkJSCTmk1qJiATkEnNBOQJIE+omYBMQG7UTEDeUDMBuQEyqXnjpGrRSdWik6pFn7ykZpOaCcgTQCY1E5BNQJ5Qc6NmAvJNajadVC06qVp0UrXok5eATGomIJOaSc2Nmhsgk5oJyBtqJiCTmt+kZgJyo2YCMqnZdFK16KRq0UnVok9eUvMGkN+k5gkgTwC5UTMBmdRMam7U3ACZ1HzTSdWik6pFJ1WL8EdeAHKjZhOQb1JzA+QJNROQSc0NkE1qJiCTmjdOqhadVC06qVr0yTI1TwCZ1ExAJjUTkEnNBGRS84aaJ4BMaiYgN2omIJOaCcgTajadVC06qVp0UrXoky8D8gSQSc2NmgnIDZAbNROQSc0EZFLzhpoJyKRmAjKpuQEyqdl0UrXopGrRSdUi/JEXgExqboBMaiYgT6h5AsikZhOQSc0NkE1qJiBPqHnjpGrRSdWik6pF+CP/Y0Bu1ExANqmZgLyh5gkgm9S8cVK16KRq0UnVok9eAvKb1ExqboBMaiYgbwCZ1NwAeQLIpOYNNd90UrXopGrRSdWiT5ap2QTkBsgTQCY1E5BJzSY1E5AbNW+ouQEyqXnjpGrRSdWik6pFn3wZkCfUvKHmBsgEZFIzAXlDzRNA3lAzAZnUfNNJ1aKTqkUnVYs+qSs1E5BvUvMGkCfUbDqpWnRSteikatEnfwyQGzUTkAnIJiCTmieAPKHmBsikZtNJ1aKTqkUnVYs++TI136TmBsgE5Ak1E5AbNROQCcgTaiYgk5oJyKTmN51ULTqpWnRSteiTZUB+E5BNaiYgN2omIJOaJ4BMap5QMwGZ1HzTSdWik6pFJ1WL8EeqlpxULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFJ1WL/gHuJC8uixmeUwAAAABJRU5ErkJggg=="'
                        },
                        createAt: {
                            type: 'date',
                            example: '2023-06-06T06:03:33.484+00:00'
                        }
                    },
                    {
                        _id: {
                            type: 'string',
                            example: '605636683f6e29c81c8b2db0',
                        },
                        userId: {
                            type: 'string',
                            example: '605636683f6e29c81d8b2db2'
                        },
                        longUrl: {
                            type: 'string',
                            example: 'https://www.amazon.com/Updated-Organizer-Cabinet-Adjustable-ORDORA/dp/B08DY9HRWD/ref=sr_1_4?_encoding=UTF8&crid=3T9EH9JRSQV3Q&keywords=kitchen&pd_rd_r=0a857a40-0442-4bc2-b4ca-34c5b59c1780&pd_rd_w=cP9yl&pd_rd_wg=7Gi4M&pf_rd_p=6495adb3-7346-40dc-9baa-c15e82da1fd7&pf_rd_r=KYD75EKW8E7ED3Y386TX&qid=1688186610&refinements=p_36%3A-5000&rnid=386465011&sprefix=kitchen%2Caps%2C162&sr=8-4"'
                        },
                        description: {
                            type: 'string',
                        },
                        urlCode: {
                            type: 'string',
                            example: 'YIXOQcEL'
                        },
                        shortUrl: {
                            type: 'string',
                            example: 'https://domain/YIXOQcEL'
                        },
                        customDomain: {
                            type: 'string',
                            example: 'https://domain/'
                        },
                        qrCode: {
                            type: 'string',
                            example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAAS7SURBVO3BQW4DRxAEwcoB///ltI59GmCxTdkWKgJ/pGrJSdWik6pFJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteiTl4D8JjVPAHlCzQ2QJ9TcAJnUTEB+k5o3TqoWnVQtOqla9MkyNZuAvKFmAvKGmieATGreULMJyKaTqkUnVYtOqhZ98mVAnlDzBJBJzRNqboBMaiYgk5obIJuAPKHmm06qFp1ULTqpWvTJHwNkk5ongDyh5i85qVp0UrXopGrRJ3+MmgnIE0CeUPMEkL/spGrRSdWik6pFn3yZmt8EZFIzAdkEZFIzAZnUbFLzX3JSteikatFJ1aJPlgH5N6mZgExqJiCTmgnIpGYC8gaQSc0NkP+yk6pFJ1WLTqoWffKSmr8EyKRmAjKpuVFzo+ZGzf/JSdWik6pFJ1WLPnkJyKRmArJJzaTmDTU3QL4JyKRmArJJzTedVC06qVp0UrXoky9T8wSQSc0E5Ak1N0AmNZOaCcgE5A01E5A31DwBZFLzxknVopOqRSdViz75MiA3aiY1E5BJzQTkDTVPqLkBcqPmDTUTkDfUbDqpWnRSteikatEny4DcqHlCzY2aGyBPqJmATGomIJOaCcgbaiYgk5ongExqNp1ULTqpWnRStQh/ZBGQGzUTkDfUvAFkUvMEkBs1N0AmNW8AuVHzTSdVi06qFp1ULfrkJSCTmk1qJiATkEnNBOQJIE+omYBMQG7UTEDeUDMBuQEyqXnjpGrRSdWik6pFn7ykZpOaCcgTQCY1E5BNQJ5Qc6NmAvJNajadVC06qVp0UrXok5eATGomIJOaSc2Nmhsgk5oJyBtqJiCTmt+kZgJyo2YCMqnZdFK16KRq0UnVok9eUvMGkN+k5gkgTwC5UTMBmdRMam7U3ACZ1HzTSdWik6pFJ1WL8EdeAHKjZhOQb1JzA+QJNROQSc0NkE1qJiCTmjdOqhadVC06qVr0yTI1TwCZ1ExAJjUTkEnNBGRS84aaJ4BMaiYgN2omIJOaCcgTajadVC06qVp0UrXoky8D8gSQSc2NmgnIDZAbNROQSc0EZFLzhpoJyKRmAjKpuQEyqdl0UrXopGrRSdUi/JEXgExqboBMaiYgT6h5AsikZhOQSc0NkE1qJiBPqHnjpGrRSdWik6pF+CP/Y0Bu1ExANqmZgLyh5gkgm9S8cVK16KRq0UnVok9eAvKb1ExqboBMaiYgbwCZ1NwAeQLIpOYNNd90UrXopGrRSdWiT5ap2QTkBsgTQCY1E5BJzSY1E5AbNW+ouQEyqXnjpGrRSdWik6pFn3wZkCfUvKHmBsgEZFIzAXlDzRNA3lAzAZnUfNNJ1aKTqkUnVYs+qSs1E5BvUvMGkCfUbDqpWnRSteikatEnfwyQGzUTkAnIJiCTmieAPKHmBsikZtNJ1aKTqkUnVYs++TI136TmBsgE5Ak1E5AbNROQCcgTaiYgk5oJyKTmN51ULTqpWnRSteiTZUB+E5BNaiYgN2omIJOaJ4BMap5QMwGZ1HzTSdWik6pFJ1WL8EeqlpxULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFJ1WL/gHuJC8uixmeUwAAAABJRU5ErkJggg=="'
                        },
                        createAt: {
                            type: 'date',
                            example: '2023-06-04T06:03:33.484+00:00'
                        }
                    },
                    {
                        _id: {
                            type: 'string',
                            example: '605636683f6e29c81c8b2db0',
                        },
                        userId: {
                            type: 'string',
                            example: '605636683f6e29c81d8b2db2'
                        },
                        longUrl: {
                            type: 'string',
                            example: 'https://www.amazon.com/Updated-Organizer-Cabinet-Adjustable-ORDORA/dp/B08DY9HRWD/ref=sr_1_4?_encoding=UTF8&crid=3T9EH9JRSQV3Q&keywords=kitchen&pd_rd_r=0a857a40-0442-4bc2-b4ca-34c5b59c1780&pd_rd_w=cP9yl&pd_rd_wg=7Gi4M&pf_rd_p=6495adb3-7346-40dc-9baa-c15e82da1fd7&pf_rd_r=KYD75EKW8E7ED3Y386TX&qid=1688186610&refinements=p_36%3A-5000&rnid=386465011&sprefix=kitchen%2Caps%2C162&sr=8-4"'
                        },
                        description: {
                            type: 'string',
                        },
                        urlCode: {
                            type: 'string',
                            example: 'YvXuQcEL'
                        },
                        shortUrl: {
                            type: 'string',
                            example: 'https://domain/YvXuQcEL'
                        },
                        customDomain: {
                            type: 'string',
                            example: 'https://domain/'
                        },
                        qrCode: {
                            type: 'string',
                            example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAAS7SURBVO3BQW4DRxAEwcoB///ltI59GmCxTdkWKgJ/pGrJSdWik6pFJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteiTl4D8JjVPAHlCzQ2QJ9TcAJnUTEB+k5o3TqoWnVQtOqla9MkyNZuAvKFmAvKGmieATGreULMJyKaTqkUnVYtOqhZ98mVAnlDzBJBJzRNqboBMaiYgk5obIJuAPKHmm06qFp1ULTqpWvTJHwNkk5ongDyh5i85qVp0UrXopGrRJ3+MmgnIE0CeUPMEkL/spGrRSdWik6pFn3yZmt8EZFIzAdkEZFIzAZnUbFLzX3JSteikatFJ1aJPlgH5N6mZgExqJiCTmgnIpGYC8gaQSc0NkP+yk6pFJ1WLTqoWffKSmr8EyKRmAjKpuVFzo+ZGzf/JSdWik6pFJ1WLPnkJyKRmArJJzaTmDTU3QL4JyKRmArJJzTedVC06qVp0UrXoky9T8wSQSc0E5Ak1N0AmNZOaCcgE5A01E5A31DwBZFLzxknVopOqRSdViz75MiA3aiY1E5BJzQTkDTVPqLkBcqPmDTUTkDfUbDqpWnRSteikatEny4DcqHlCzY2aGyBPqJmATGomIJOaCcgbaiYgk5ongExqNp1ULTqpWnRStQh/ZBGQGzUTkDfUvAFkUvMEkBs1N0AmNW8AuVHzTSdVi06qFp1ULfrkJSCTmk1qJiATkEnNBOQJIE+omYBMQG7UTEDeUDMBuQEyqXnjpGrRSdWik6pFn7ykZpOaCcgTQCY1E5BNQJ5Qc6NmAvJNajadVC06qVp0UrXok5eATGomIJOaSc2Nmhsgk5oJyBtqJiCTmt+kZgJyo2YCMqnZdFK16KRq0UnVok9eUvMGkN+k5gkgTwC5UTMBmdRMam7U3ACZ1HzTSdWik6pFJ1WL8EdeAHKjZhOQb1JzA+QJNROQSc0NkE1qJiCTmjdOqhadVC06qVr0yTI1TwCZ1ExAJjUTkEnNBGRS84aaJ4BMaiYgN2omIJOaCcgTajadVC06qVp0UrXoky8D8gSQSc2NmgnIDZAbNROQSc0EZFLzhpoJyKRmAjKpuQEyqdl0UrXopGrRSdUi/JEXgExqboBMaiYgT6h5AsikZhOQSc0NkE1qJiBPqHnjpGrRSdWik6pF+CP/Y0Bu1ExANqmZgLyh5gkgm9S8cVK16KRq0UnVok9eAvKb1ExqboBMaiYgbwCZ1NwAeQLIpOYNNd90UrXopGrRSdWiT5ap2QTkBsgTQCY1E5BJzSY1E5AbNW+ouQEyqXnjpGrRSdWik6pFn3wZkCfUvKHmBsgEZFIzAXlDzRNA3lAzAZnUfNNJ1aKTqkUnVYs+qSs1E5BvUvMGkCfUbDqpWnRSteikatEnfwyQGzUTkAnIJiCTmieAPKHmBsikZtNJ1aKTqkUnVYs++TI136TmBsgE5Ak1E5AbNROQCcgTaiYgk5oJyKTmN51ULTqpWnRSteiTZUB+E5BNaiYgN2omIJOaJ4BMap5QMwGZ1HzTSdWik6pFJ1WL8EeqlpxULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFJ1WL/gHuJC8uixmeUwAAAABJRU5ErkJggg=="'
                        },
                        createAt: {
                            type: 'date',
                            example: '2023-06-12T06:03:33.484+00:00'
                        }
                    }
                ]
            },
            previousPage: {
                type: 'number',
                example: 1
            },
            nextPage: {
                type: 'number',
                example: 2
            }
        }
    },
    paginatedUrlAnalytics: {
        properties: {
            analytics: {
                type: 'arrray',
                example: [
                    {
                        _id: {
                            type: 'string',
                            example: '605636683f6e29c81c8b2de2',
                        },
                        urlCode: {
                            type: 'string',
                            example: 'EWhYi4xfu'
                        },
                        ip: {
                            type: 'string',
                            example: '105.123.0.0'
                        },
                        clickCount: {
                            type: 'number',
                            example: 5
                        },
                        locationInfo: {
                            type: 'object',
                            example: {
                                ipAddress: '105.123.0.0',
                                addressCountryCode: 'NG',
                                addressCountryName: 'Nigerian',
                                timeZone: 'Africa/Lagos',
                                latitude: 10,
                                longitute: 7
                            }
                        }
                    },
                    {
                        _id: {
                            type: 'string',
                            example: '605636683f6e39c71c8b2de0',
                        },
                        urlCode: {
                            type: 'string',
                            example: 'EWhYi4xfu'
                        },
                        ip: {
                            type: 'string',
                            example: '115.123.0.0'
                        },
                        clickCount: {
                            type: 'number',
                            example: 3
                        },
                        locationInfo: {
                            type: 'object',
                            example: {
                                ipAddress: '115.123.0.0',
                                addressCountryCode: 'NG',
                                addressCountryName: 'Nigerian',
                                timeZone: 'Africa/Lagos',
                                latitude: 9,
                                longitute: 8
                            }
                        }
                    },
                    {
                        _id: {
                            type: 'string',
                            example: '605636633f6v29c81c8b2de5',
                        },
                        urlCode: {
                            type: 'string',
                            example: 'EWhYi4xfu'
                        },
                        ip: {
                            type: 'string',
                            example: '109.111.0.0'
                        },
                        clickCount: {
                            type: 'number',
                            example: 1
                        },
                        locationInfo: {
                            type: 'object',
                            example: {
                                ipAddress: '109.111.0.0',
                                addressCountryCode: 'NG',
                                addressCountryName: 'Nigerian',
                                timeZone: 'Africa/Lagos',
                                latitude: 14,
                                longitute: 10
                            }
                        }
                    }
                ]
            },
            shortUrl: {
                type: 'string',
                example: 'https://domain/EWhYi4xfu'
            },
            previousPage: {
                type: 'number',
                example: 1
            },
            nextPage: {
                type: 'number',
                example: 2
            }
        }
    },
    unAuthorized: {
        type: 'string',
        example: 'Un-authorized'
    },
    badRequest: {
        type: 'string',
        example: 'Invalid email'
    },
    notFound: {
        type: 'string',
        example: 'Not Found'
    },
    serverError: {
        type: 'string',
        example: 'Internal Server Error'
    }
};
