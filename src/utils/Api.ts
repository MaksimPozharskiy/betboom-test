/* eslint-disable no-console */
class Api {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  private static response(res: Response) {
    return res.json();
  }

  private static handleResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    console.log(res.status);
    return Promise.reject(res);
  }

  private static handleResponseError(e: Event) {
    console.log(e);
    return Promise.reject(e);
  }

  public getChart() {
    return fetch(`${this.url}/chart`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(Api.handleResponse)
      .catch(Api.handleResponseError);
  }

  public getPlayers() {
    return fetch(`${this.url}/players`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(Api.handleResponse)
      .catch(Api.handleResponseError);
  }

  public getChartByIdPLayer(id: number) {
    return fetch(`${this.url}/chart/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(Api.handleResponse)
      .catch(Api.handleResponseError);
  }

  public createPlayer(name: string) {
    return fetch(`${this.url}/players/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Name: name }),
    })
      .then(Api.handleResponse)
      .catch(Api.handleResponseError);
  }
}

export default new Api('https://6256a4056ea70370053cbb7c.mockapi.io');
