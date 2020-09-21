const form = document.querySelector("#form");
const search = document.querySelector("#search");
const result = document.querySelector("#search-result");
const word = document.querySelector("#word");
const pos = document.querySelector("#pos");
const def = document.querySelector("#def");
const loading = document.querySelector("#loading");

let found;


result.style.display="none";
loading.style.display="none"

fetch("dict.json")
    .then(response => response.json())
    .then(d => {
        // console.log(d[3224].word)
        form.addEventListener('submit', (event) =>{
            let q = search.value;
            q = q.toUpperCase()
            event.preventDefault();
            loading.style.display="block";
            result.style.display="none";
            setTimeout(function(){
                loading.style.display="none"; 
                result.style.display="block";
                for(var i = 0; i < d.length; i++){
                    if(q === d[i].word){
                        found = true
                        console.log("found")
                        word.textContent=d[i].word.toLowerCase();
                        pos.textContent=d[i].pos;
                        // console.log(d[i].definitions.length)
                        def.textContent=d[i].definitions[0];
                        search.value = "";  
                        break;
                    }else{
                        found = false;
                    }
                }
                if(!found){
                    word.textContent="NOT FOUND";
                    def.textContent="Search something else?"
                }
            }, 3000);
            search.value = "";

    });
})

