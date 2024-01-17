let projects = [
   {
    name: "BusBooker",
    imgsrc: "./images/busbooker.png",
    github: "https://github.com/Paramhans-Singh/BusBooker",
    website: "https://github.com/Paramhans-Singh/BusBooker",
    tags: "MERN",
    month: "December",
    year: "2023",
  },

  {
    name: "Portfolio",
    imgsrc: "./images/portofolio.png",
    github: "https://github.com/Paramhans-Singh/Portfolio",
    website: "https://portfolio-paramhans-singh.vercel.app/",
    tags: "ReactJS",
    month: "November",
    year: "2023",
  },
  {
    name: "Chat-X",
    imgsrc: "./images/chatify.png",
    github: " https://github.com/Paramhans-Singh/Chat-X",
    website: " https://github.com/Paramhans-Singh/Chat-X",
    tags: "MERN",
    month: "September",
    year: "2023",
  },
  {
    name: "GrubHub",
    imgsrc: "./images/grubhub.png",
    github: "https://github.com/Paramhans-Singh/GrubHub",
    website: "https://grub-hubs.vercel.app/",
    tags: "React Js",
    month: "July",
    year: "2023",
  },
 
  {
    name: "GeekGuru",
    imgsrc: "./images/geekguru.png",
    github: "https://github.com/Paramhans-Singh/Geek-Gurus",
    website: "https://geek-gurus.vercel.app/",
    tags: "React JS",
    month: "April",
    year: "2023",
  },
 
  {
    name: "IOSD Website",
    imgsrc: "./images/iosd.png",
    github: "https://github.com/Paramhans-Singh/IOSD",
    website: "https://iosd.vercel.app/",
    tags: "MERN",
    month: "February",
    year: "2023",
  },
];





const cardContainer = document.getElementById("cards-container");
projects.forEach((Element) => {
  var cardEl = document.createElement("div");
  cardEl.innerHTML = `
        <div class="tags">${Element.tags}</div>
        <img src="${Element.imgsrc}" alt="">
        <h4 class="project-name">${Element.name}</h4>
        <div class="buttons">
            <button class="btn"><a href= "${Element.github}" target= "_blank">Code</a></button>
            <button class="btn"><a href= "${Element.website}" target= "_blank">Live Demo</a></button>
        </div> 
        <div class="date">${Element.month}, ${Element.year}</div>`;
  cardEl.classList.add("card");
  cardContainer.appendChild(cardEl);
});
