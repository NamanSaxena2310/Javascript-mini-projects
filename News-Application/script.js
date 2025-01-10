const apiKey = '3ea0899a0f3c402abb3e71290a10bd5c'

const blogContainer = document.getElementById('blog-container')

const searchField = document.getElementById('search-input')

const searchButton = document.getElementById('search-button')

async function  fetchRandomNews(){
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`

    const response = await fetch(apiUrl)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data.articles
    
  } catch (error) {
    console.error("Error Fetching Random News", error)
    return []
  }
}

searchButton.addEventListener('click', async()=>{
  const query = searchField.value.trim()
  if (query !== "") {
    try{
      const articles =  await fetchNewsQuery(query)
      displayBlogs(articles)
    }catch(error){
      console.log("Error Fetching news by query",error)
    }
  } else {
    
  }
})


async function fetchNewsQuery(query){
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`

    const response = await fetch(apiUrl)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data.articles
    
  } catch (error) {
    console.error("Error Fetching Random News", error)
    return []
  }
}

function displayBlogs(articles){
  blogContainer.innerHTML =""
  articles.forEach((article) => {

    const blogCard = document.createElement('div')
    blogCard.classList.add("blog-card")

    const img = document.createElement("img")
    img.src = article.urlToImage
    img.alt = article.title

    const title = document.createElement('h2')
    const trunctatedTitle = article.title.length > 30? article.title.slice(0,30) + "...." : article.title;
   
    title.textContent = trunctatedTitle

    const description = document.createElement('p')
    const trunctatedDescription = article.description.length > 120? article.description.slice(0,120) + "...." : article.description;
   
    description.textContent = trunctatedDescription

    blogCard.appendChild(img)
    blogCard.appendChild(title)
    blogCard.appendChild(description)
    blogCard.addEventListener('click',()=>{
      window.open(article.url, "_blank")
    })

    blogContainer.appendChild(blogCard)
  });

}

( async ()=>{
  try {
   const articles =  await fetchRandomNews()
   displayBlogs(articles);
  } catch (error) {
    console.error("Error fetching random news", error)
  }
})();

