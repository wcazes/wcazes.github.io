const data = {
    handle: "@wcazes",
    fullname: "William Cazes",
    summary: "I'm a self taught Full Stack JavaScript Developer who creates things as a hobby. I currently have a non-tech day job that keeps me from writing code every waking second of my life.",
    personalLinks: [
        {
          name: 'WhosHiring.info',
          description: 'A community based job board.'
        },
        {
          name: 'BuyingCenla.com',
          description: 'Niche listing site for my local area.'
        },
        {
          name: 'LetsTravel.today',
          description: 'A travel based project.'
        }
      ],
    projectLinks: [
        {   id: 0,
            name: "Dictionary",
            description: "Uses a dictionary in JSON format that I found on the Internet.",
            github: "https://github.com/wcazes/simple-dictionary",
        },
        {
            id: 1,
            name: "AIM Clone",
            description: "Visual recreation of the messenger with two switchable styles.",
            github: "https://github.com/wcazes/aim-clone",
        }
        // {
        //     name: "",
        //     description: "",
        //     github: "",
        //     live: "",
        // },
    ],
    footerLinks: [
        {
          key:0,
          icon:'fab fa-github',
          href:'https://github.com/wcazes',
          name:'Github',
        },
        {
          key:1,
          icon:'fab fa-codepen',
          href:'https://codepen.io/wcazes',
          name:'Codepen',
        },
        {
          key:2,
          icon:'fab fa-linkedin',
          href:'https://linkedin.com/in/wcazes',
          name:'LinkedIn',
        },
        {
          key:3,
          icon:'fab fa-twitter',
          href:'https://twitter.com/intent/tweet?screen_name=wcazes',
          name:'Tweet',
        },
        {
          key:4,
          icon:'fab fa-twitter',
          href:'https://twitter.com/intent/follow?screen_name=wcazes',
          name:'Follow',
        },
        {
          key:5,
          icon:'fab fa-instagram',
          href:'https://instagram.com/life_with_william',
          name:'Instagram',
        },
        {
          key:6,
          icon:'fa fa-envelope',
          href:'mailto:wcazes@outlook.com',
          name:'Email',
        },
        {
          key:7, 
          icon:'fad fa-mug',
          href:'https://buymeacoffee.com/wcazes',
          name:'BuyMeACoffee',
        }
    ]
};

const app = Vue.createApp({
    setup(){

        return{
            data
        }
    }
});




app.mount('#app');
