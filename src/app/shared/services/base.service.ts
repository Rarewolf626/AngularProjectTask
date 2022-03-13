import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { httpOptions, httpOptionsNoLoader, httpOptionsNoToken, httpOptionsNoTokenWithAlias, httpOptionsProgressNoLoader } from '../helpers/http.helper';

/**
 * @description
 *
 * Serviço HTTP genérico simples
 */
//@Injectable()
export abstract class BaseService {

  /**
   *
   */
  public static readonly NO_LOADER_HEADER: string = 'X-No-Loader';

  /**
   * 
   */
  public static readonly NO_TOKEN_HEADER: string = 'X-No-Token';

  /**
   * 
   */
  public static readonly NO_ALIAS_HEADER: string = 'X-No-Alias';

  /**
   * URL do serviço HTTP
   */
  abstract urlServiceREST: string;

  /**
   * Tradução dos Labels
   */
  public literals: any = {};

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected http: HttpClient,

  ) {}

  protected httpOptions = httpOptions;
  protected httpOptionsNoToken = httpOptionsNoToken;
  protected httpOptionsNoTokenWithAlias = httpOptionsNoTokenWithAlias;
  protected httpOptionsNoLoader = httpOptionsNoLoader;
  protected httpOptionsProgressNoLoader = httpOptionsProgressNoLoader;


}
