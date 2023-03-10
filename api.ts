/* tslint:disable */
/* eslint-disable */
/**
 * My Express TypeScript API
 * API documentation for my Express TypeScript API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface DefaultPagingReponseSchema
 */
export interface DefaultPagingReponseSchema {
    /**
     * 
     * @type {number}
     * @memberof DefaultPagingReponseSchema
     */
    'code'?: number;
    /**
     * 
     * @type {DefaultPagingReponseSchemaPagination}
     * @memberof DefaultPagingReponseSchema
     */
    'pagination'?: DefaultPagingReponseSchemaPagination;
    /**
     * 
     * @type {DefaultPagingReponseSchemaResults}
     * @memberof DefaultPagingReponseSchema
     */
    'results'?: DefaultPagingReponseSchemaResults;
}
/**
 * 
 * @export
 * @interface DefaultPagingReponseSchemaPagination
 */
export interface DefaultPagingReponseSchemaPagination {
    /**
     * 
     * @type {number}
     * @memberof DefaultPagingReponseSchemaPagination
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof DefaultPagingReponseSchemaPagination
     */
    'nextPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof DefaultPagingReponseSchemaPagination
     */
    'prevPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof DefaultPagingReponseSchemaPagination
     */
    'limit'?: number;
}
/**
 * 
 * @export
 * @interface DefaultPagingReponseSchemaResults
 */
export interface DefaultPagingReponseSchemaResults {
    /**
     * 
     * @type {number}
     * @memberof DefaultPagingReponseSchemaResults
     */
    'count'?: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof DefaultPagingReponseSchemaResults
     */
    'rows'?: Array<any>;
}
/**
 * 
 * @export
 * @interface DefaultReponseSchema
 */
export interface DefaultReponseSchema {
    /**
     * 
     * @type {number}
     * @memberof DefaultReponseSchema
     */
    'code'?: number;
    /**
     * 
     * @type {object}
     * @memberof DefaultReponseSchema
     */
    'results'?: object;
}
/**
 * 
 * @export
 * @interface LoginRequestSchema
 */
export interface LoginRequestSchema {
    /**
     * 
     * @type {string}
     * @memberof LoginRequestSchema
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequestSchema
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface LoginResponseSchema
 */
export interface LoginResponseSchema {
    /**
     * 
     * @type {number}
     * @memberof LoginResponseSchema
     */
    'code'?: number;
    /**
     * 
     * @type {LoginResponseSchemaResults}
     * @memberof LoginResponseSchema
     */
    'results'?: LoginResponseSchemaResults;
}
/**
 * 
 * @export
 * @interface LoginResponseSchemaResults
 */
export interface LoginResponseSchemaResults {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseSchemaResults
     */
    'accessToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseSchemaResults
     */
    'refreshToken'?: string;
}
/**
 * 
 * @export
 * @interface RecordNotFoundResponse
 */
export interface RecordNotFoundResponse {
    /**
     * 
     * @type {number}
     * @memberof RecordNotFoundResponse
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordNotFoundResponse
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordNotFoundResponse
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface RegisterRequestSchema
 */
export interface RegisterRequestSchema {
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'password'?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterRequestSchema
     */
    'dob'?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'gender'?: RegisterRequestSchemaGenderEnum;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'avatarUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestSchema
     */
    'phone'?: string;
}

export const RegisterRequestSchemaGenderEnum = {
    Male: 'MALE',
    Famle: 'FAMLE',
    Orther: 'ORTHER',
    Private: 'PRIVATE'
} as const;

export type RegisterRequestSchemaGenderEnum = typeof RegisterRequestSchemaGenderEnum[keyof typeof RegisterRequestSchemaGenderEnum];

/**
 * 
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'id'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'createdAtUnixTimestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'updatedAtUnixTimestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'deletedAtUnixTimestamp'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'deletedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'username'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'dob'?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'gender'?: UpdateUserRequestGenderEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'avatar'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'phone'?: string;
}

export const UpdateUserRequestGenderEnum = {
    Male: 'MALE',
    Famle: 'FAMLE',
    Orther: 'ORTHER',
    Private: 'PRIVATE'
} as const;

export type UpdateUserRequestGenderEnum = typeof UpdateUserRequestGenderEnum[keyof typeof UpdateUserRequestGenderEnum];

/**
 * 
 * @export
 * @interface UserPagingReponseSchema
 */
export interface UserPagingReponseSchema {
    /**
     * 
     * @type {number}
     * @memberof UserPagingReponseSchema
     */
    'code'?: number;
    /**
     * 
     * @type {DefaultPagingReponseSchemaPagination}
     * @memberof UserPagingReponseSchema
     */
    'pagination'?: DefaultPagingReponseSchemaPagination;
    /**
     * 
     * @type {UserPagingReponseSchemaResults}
     * @memberof UserPagingReponseSchema
     */
    'results'?: UserPagingReponseSchemaResults;
}
/**
 * 
 * @export
 * @interface UserPagingReponseSchemaResults
 */
export interface UserPagingReponseSchemaResults {
    /**
     * 
     * @type {number}
     * @memberof UserPagingReponseSchemaResults
     */
    'count'?: number;
    /**
     * 
     * @type {Array<UserReponseSchemaResults>}
     * @memberof UserPagingReponseSchemaResults
     */
    'rows'?: Array<UserReponseSchemaResults>;
}
/**
 * 
 * @export
 * @interface UserReponseSchema
 */
export interface UserReponseSchema {
    /**
     * 
     * @type {number}
     * @memberof UserReponseSchema
     */
    'code'?: number;
    /**
     * 
     * @type {UserReponseSchemaResults}
     * @memberof UserReponseSchema
     */
    'results'?: UserReponseSchemaResults;
}
/**
 * 
 * @export
 * @interface UserReponseSchemaResults
 */
export interface UserReponseSchemaResults {
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'id'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserReponseSchemaResults
     */
    'createdAtUnixTimestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserReponseSchemaResults
     */
    'updatedAtUnixTimestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserReponseSchemaResults
     */
    'deletedAtUnixTimestamp'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'deletedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'username'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserReponseSchemaResults
     */
    'dob'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'gender'?: UserReponseSchemaResultsGenderEnum;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'avatar'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReponseSchemaResults
     */
    'phone'?: string;
}

export const UserReponseSchemaResultsGenderEnum = {
    Male: 'MALE',
    Famle: 'FAMLE',
    Orther: 'ORTHER',
    Private: 'PRIVATE'
} as const;

export type UserReponseSchemaResultsGenderEnum = typeof UserReponseSchemaResultsGenderEnum[keyof typeof UserReponseSchemaResultsGenderEnum];


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Default api
         * @param {string} url 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('create', 'url', url)
            const localVarPath = `/{url}`
                .replace(`{${"url"}}`, encodeURIComponent(String(url)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (hl !== undefined) {
                localVarQueryParameter['hl'] = hl;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Default api
         * @param {string} id 
         * @param {string} url 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: string, url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            // verify required parameter 'url' is not null or undefined
            assertParamExists('deleteById', 'url', url)
            const localVarPath = `/{url}/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"url"}}`, encodeURIComponent(String(url)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (hl !== undefined) {
                localVarQueryParameter['hl'] = hl;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Default api
         * @param {string} url 
         * @param {string} id 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('getById', 'url', url)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/{url}/{id}`
                .replace(`{${"url"}}`, encodeURIComponent(String(url)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (hl !== undefined) {
                localVarQueryParameter['hl'] = hl;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Default api
         * @param {string} url 
         * @param {string} [fields] 
         * @param {string} [where] 
         * @param {string} [limit] 
         * @param {number} [page] 
         * @param {string} [order] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (url: string, fields?: string, where?: string, limit?: string, page?: number, order?: string, hl?: 'ko' | 'en' | 'vi', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('getList', 'url', url)
            const localVarPath = `/{url}`
                .replace(`{${"url"}}`, encodeURIComponent(String(url)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (where !== undefined) {
                localVarQueryParameter['where'] = where;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (hl !== undefined) {
                localVarQueryParameter['hl'] = hl;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Default api update by id
         * @param {string} url 
         * @param {string} id 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('updateById', 'url', url)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/{url}/{id}`
                .replace(`{${"url"}}`, encodeURIComponent(String(url)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (hl !== undefined) {
                localVarQueryParameter['hl'] = hl;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Default api
         * @param {string} url 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultReponseSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(url, fields, hl, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Default api
         * @param {string} id 
         * @param {string} url 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(id: string, url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultReponseSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(id, url, fields, hl, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Default api
         * @param {string} url 
         * @param {string} id 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultReponseSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(url, id, fields, hl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Default api
         * @param {string} url 
         * @param {string} [fields] 
         * @param {string} [where] 
         * @param {string} [limit] 
         * @param {number} [page] 
         * @param {string} [order] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(url: string, fields?: string, where?: string, limit?: string, page?: number, order?: string, hl?: 'ko' | 'en' | 'vi', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultPagingReponseSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(url, fields, where, limit, page, order, hl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Default api update by id
         * @param {string} url 
         * @param {string} id 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultReponseSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(url, id, fields, hl, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Default api
         * @param {string} url 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: any): AxiosPromise<DefaultReponseSchema> {
            return localVarFp.create(url, fields, hl, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Default api
         * @param {string} id 
         * @param {string} url 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(id: string, url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: any): AxiosPromise<DefaultReponseSchema> {
            return localVarFp.deleteById(id, url, fields, hl, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Default api
         * @param {string} url 
         * @param {string} id 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', options?: any): AxiosPromise<DefaultReponseSchema> {
            return localVarFp.getById(url, id, fields, hl, options).then((request) => request(axios, basePath));
        },
        /**
         * Default api
         * @param {string} url 
         * @param {string} [fields] 
         * @param {string} [where] 
         * @param {string} [limit] 
         * @param {number} [page] 
         * @param {string} [order] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(url: string, fields?: string, where?: string, limit?: string, page?: number, order?: string, hl?: 'ko' | 'en' | 'vi', options?: any): AxiosPromise<DefaultPagingReponseSchema> {
            return localVarFp.getList(url, fields, where, limit, page, order, hl, options).then((request) => request(axios, basePath));
        },
        /**
         * Default api update by id
         * @param {string} url 
         * @param {string} id 
         * @param {string} [fields] 
         * @param {'ko' | 'en' | 'vi'} [hl] 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: any): AxiosPromise<DefaultReponseSchema> {
            return localVarFp.updateById(url, id, fields, hl, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * Default api
     * @param {string} url 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    create(url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig): AxiosPromise<DefaultReponseSchema>;

    /**
     * Default api
     * @param {string} id 
     * @param {string} url 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deleteById(id: string, url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig): AxiosPromise<DefaultReponseSchema>;

    /**
     * Default api
     * @param {string} url 
     * @param {string} id 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', options?: AxiosRequestConfig): AxiosPromise<DefaultReponseSchema>;

    /**
     * Default api
     * @param {string} url 
     * @param {string} [fields] 
     * @param {string} [where] 
     * @param {string} [limit] 
     * @param {number} [page] 
     * @param {string} [order] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getList(url: string, fields?: string, where?: string, limit?: string, page?: number, order?: string, hl?: 'ko' | 'en' | 'vi', options?: AxiosRequestConfig): AxiosPromise<DefaultPagingReponseSchema>;

    /**
     * Default api update by id
     * @param {string} url 
     * @param {string} id 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    updateById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig): AxiosPromise<DefaultReponseSchema>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Default api
     * @param {string} url 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public create(url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).create(url, fields, hl, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Default api
     * @param {string} id 
     * @param {string} url 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteById(id: string, url: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).deleteById(id, url, fields, hl, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Default api
     * @param {string} url 
     * @param {string} id 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getById(url, id, fields, hl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Default api
     * @param {string} url 
     * @param {string} [fields] 
     * @param {string} [where] 
     * @param {string} [limit] 
     * @param {number} [page] 
     * @param {string} [order] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getList(url: string, fields?: string, where?: string, limit?: string, page?: number, order?: string, hl?: 'ko' | 'en' | 'vi', options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getList(url, fields, where, limit, page, order, hl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Default api update by id
     * @param {string} url 
     * @param {string} id 
     * @param {string} [fields] 
     * @param {'ko' | 'en' | 'vi'} [hl] 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public updateById(url: string, id: string, fields?: string, hl?: 'ko' | 'en' | 'vi', body?: any, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).updateById(url, id, fields, hl, body, options).then((request) => request(this.axios, this.basePath));
    }
}


