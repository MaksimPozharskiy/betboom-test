class Api {
  static url: string;

  constructor(url: string) {
    Api.url = url;
  }

  private static response(res: any) {
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

  public static getChart() {
    return fetch(`${this.url}/chart`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(this.handleResponse)
      .catch(this.handleResponseError);
  }
}

export default Api;
