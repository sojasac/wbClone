export class Server {
  constructor(){
  }
  getServerCards = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Smth went wrong');
        }
      })
      .then(resolve)
      .catch(reject);
    });
  }

}


