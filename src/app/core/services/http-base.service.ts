import { Injectable } from '@angular/core';

const API_URI: string = 'https://api.themoviedb.org/3'
const REQ_AUTH: string = "?api_key=2bc5c3fe56239fcb0a4bd569da6534c2&language=it&append_to_response=images&include_image_language=it,en,null"

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor() { }

  /*
  Funzione per la costruzione dell'endpoint delle chiamate API di TMDB
  @param endpoint   risorsa a cui accedere
  @param queryParams eventuali parametri specificati nella documentazione
  #returns string costruita pronta per l'utilizzo in una chiamta http

  */

  builApiRequest(endpoint: string, queryParams?: string){
    // api_url/endpoint?api_key&query_params
    return `${API_URI}/${endpoint}${REQ_AUTH}${queryParams ?? ''}`
  }
}
