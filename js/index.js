const smallProjects = [
    {
        name: "Dictionary",
        description: "Uses a dictionary in JSON format that I found on the Internet.",
        github: "https://github.com/wcazes/simple-dictionary",
        live: "./projects/dictionary",
    },
    {
        name: "AIM Clone",
        description: "Visual recreation of the messenger with two switchable styles.",
        github: "https://github.com/wcazes/aim-clone",
        live: "./projects/AIM-Clone",
    },
    // {
    //     name: "",
    //     description: "",
    //     github: "",
    //     live: "",
    // },
];

const ul = document.getElementById('projects');
const li = document.createElement('li');
li.setAttribute('class' , "list-dic mb-3");

// for (let i = 0; i < s.length; i++) {
//     const project = smallProjects[i];
//     console.log(project)
    
// };
for (let i = 0; smallProjects.length > i; i++) {
    const temp =` <li id="list-item" class="list-disc mb-3">
    <a class="text blue-900 font-bold" href="${smallProjects[i].live}">${smallProjects[i].name}</a> : ${smallProjects[i].description} [<a href="${smallProjects[i].github}" class="text-blue-900 font-bold" class="text-blue-900 font-bold">github</a>] [<a href="${smallProjects[i].live}"  class="text-blue-900 font-bold">live</a>]</li>`; 

    ul.innerHTML += temp;
}