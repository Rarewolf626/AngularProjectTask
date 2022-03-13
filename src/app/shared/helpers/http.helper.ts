import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface IHttpOptions {
    headers: HttpHeaders;
    withCredentials: boolean;
    params: any;
}

export interface IHttpOptionsProgress {
    responseType: string;
    reportProgress: boolean;
    observe: string;
}

/**
 * HttpOptions padrão.
 */
const _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    params: null
} as IHttpOptions;


/**
 * HttpOptions padrão sem token.
 */
const _httpOptionsNoLoader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-No-Loader': 'true' }),
    withCredentials: true,
    params: null
} as IHttpOptions;

/**
 * HttpOptions padrão sem token com alias.
 */
 const _httpOptionsNoTokenWithAlias = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-No-Token': 'true' }),
    withCredentials: false,
    params: null
} as IHttpOptions;

/**
 * HttpOptions padrão sem token.
 */
const _httpOptionsNoToken = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-No-Token': 'true', 'X-No-Alias': 'true' }),
    withCredentials: false,
    params: null
} as IHttpOptions;


/**
 * HttpOptions padrão sem loader para retorno de progresso de upload/download.
 */
const _httpOptionsProgressNoLoader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-No-Loader': 'true' }),
    withCredentials: true,
    params: null,
    responseType: 'blob',
    reportProgress: true,
    observe: 'events'
} as IHttpOptions & IHttpOptionsProgress;

/**
   * Obtém as opções de requisições http (headers, credentials).
   * Define os parâmetros.
   * @param {HttpParams | any} params?
   * @returns
   */
export function httpOptions(params?: HttpParams | any): object {
    if (params) {
        _httpOptions.params = params as HttpParams;
    }

    return _httpOptions;
}

export function httpOptionsNoTokenWithAlias(params?: HttpParams | any): object {
    if (params) {
        _httpOptionsNoTokenWithAlias.params = params as HttpParams;
    }

    return _httpOptionsNoTokenWithAlias;
}

export function httpOptionsNoToken(params?: HttpParams | any): object {
    if (params) {
        _httpOptionsNoToken.params = params as HttpParams;
    }

    return _httpOptionsNoToken;
}

/**
 * Obtém as opções de requisições http (headers, credentials).
 * Inclui o cabeçalho que define que nãot erá loader na requisição.
 * Define os parâmetros.
 * @param {HttpParams | any} params?
 * @returns
 */
export function httpOptionsNoLoader(params?: HttpParams | any): object {
    if (params) {
        _httpOptionsNoLoader.params = params as HttpParams;
    }

    return _httpOptionsNoLoader;
}

/**
 * Obtém as opções de requisições http (headers, credentials).
 * Inclui o cabeçalho que define que nãot erá loader na requisição.
 */
export function httpOptionsProgressNoLoader(params?: HttpParams | any): IHttpOptions & IHttpOptionsProgress {
    if (params) {
        _httpOptionsProgressNoLoader.params = params as HttpParams;
    }

    return _httpOptionsProgressNoLoader;
} 