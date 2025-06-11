const API_URL = 'https://cecc-sintesis-default-rtdb.firebaseio.com';

const HTMLResponse = document.querySelector("#container-app");

fetch(`${API_URL}/sintesiss.json`)
    .then((response) => response.json())
    .then((sintesiss) => {
        sintesiss.forEach((sintesis) => {
            const article = document.createElement('article');
            
            let h1F = document.createElement("h1");           
            let h1 = document.createElement("h1");
            let a = document.createElement("a");

            h1F.innerText = "AGE FUSM";
            h1.innerText = sintesis.titulo;
            a.innerText = "Click para ver";
            a.href = sintesis.contenido;

            article.appendChild(h1F)
            article.appendChild(h1)
            article.appendChild(a)

            HTMLResponse.appendChild(article)
        });
    });


