let userSearchInput = document.getElementById("input-search") as HTMLInputElement;
let userLanguageInput = document.getElementById("input-language") as HTMLSelectElement;
let userSortOrderInput = document.getElementById("input-sort") as HTMLSelectElement;
const form = document.querySelector("form");
const output = document.getElementById("output-area");



form?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const userSearch = userSearchInput.value;
    const userLanguage = userLanguageInput.value;
    const userSortOrder = userSortOrderInput.value;
    console.log(userSearch);
    
// # hide the key
    fetch(`https://newsapi.org/v2/everything?q=${userSearch}&sortBy=${userSortOrder}&apiKey=eea981ef410b4cfd82bb7c75d8a3026a&language=${userLanguage}`).then((res) => res.json()).then((data) => {
        console.log(data);
        
        const title = data.articles[0].title;
        const urlImage = data.articles[0].urlToImage;
        const content = data.articles[0].content;
        const url = data.articles[0].url;

        const outputArticle = document.createElement("article");
        outputArticle.classList.add("article-card");

        const outputTitle = document.createElement("h2");
        outputTitle.innerText = title;

        const outputImage = document.createElement("img");
        outputImage.src = `${urlImage}`;
        outputImage.classList.add("article-img");
        
        const outputContent = document.createElement("p");
        outputContent.innerText = content;

        const outputLink = document.createElement("a");
        outputLink.href = url;
        outputLink.target = "_blank";
        outputLink.innerText = "Zum Artikel";
    
        outputArticle.append(outputTitle, outputImage, outputContent, outputLink);
        output?.append(outputArticle);
    }
,);
})




