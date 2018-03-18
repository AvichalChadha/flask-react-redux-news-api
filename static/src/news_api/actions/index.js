var date = new Date();
var date_now = date.toISOString();
const api_key = '8b8d07de6a6f40d7b42a56fcd49a07f7'
const URL_NEWS = `https://newsapi.org/v2/everything?sources=bloomberg,the-verge,the-guardian-uk&q=technology&+sortBy=publishedAt&language=en&from=${date_now}&to=2018-03&pageSize=50&apiKey=8b8d07de6a6f40d7b42a56fcd49a07f7`


const URL_ROOT = 'https://newsapi.org/v2/everything'
                                

//It grabs all the the news for the particular keyword that you write in the search-bar 
export function getNews(keyword){

    const request = fetch(`${URL_ROOT}?q=${keyword}&sources=bloomberg,the-verge,the-guardian-uk&+sortBy=publishedA&from=${date_now}&to=2018-03&language=en&pageSize=50&apiKey=${api_key}`, { method: 'GET'})
                    .then(response => response.json());

    return{
      type: 'PARTICULAR_NEWS',
      payload:request
    }

  }


// This grabs all the news with the keyword "technology".
export function allTheNews() {

  const request = fetch(`${URL_NEWS}`, { method: 'GET' })
    .then(response => response.json());

  return {
    type: 'ALL_NEWS',
    payload: request

  }
  
}






