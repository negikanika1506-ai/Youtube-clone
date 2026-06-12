const videos = [

{
title:"Build a Professional Portfolio Website",
channel:"Code Master",
views:"1.2M views • 2 weeks ago",
thumbnail:"https://picsum.photos/600/350?1"
},

{
title:"JavaScript Full Course 2026",
channel:"Tech World",
views:"900K views • 1 month ago",
thumbnail:"https://picsum.photos/600/350?2"
},

{
title:"React Project Tutorial",
channel:"Developer Hub",
views:"760K views • 3 weeks ago",
thumbnail:"https://picsum.photos/600/350?3"
},

{
title:"AI Future Explained",
channel:"AI Zone",
views:"2M views • 5 days ago",
thumbnail:"https://picsum.photos/600/350?4"
},

{
title:"Gaming Highlights",
channel:"Gaming Hub",
views:"870K views • 6 days ago",
thumbnail:"https://picsum.photos/600/350?5"
},

{
title:"CSS Animations Masterclass",
channel:"Frontend Pro",
views:"680K views • 2 months ago",
thumbnail:"https://picsum.photos/600/350?6"
},

{
title:"Machine Learning Basics",
channel:"AI Academy",
views:"1.5M views • 2 weeks ago",
thumbnail:"https://picsum.photos/600/350?7"
},

{
title:"Build Calculator Project",
channel:"Coding School",
views:"450K views • 3 weeks ago",
thumbnail:"https://picsum.photos/600/350?8"
},

{
title:"Python Complete Course",
channel:"Learn Python",
views:"1.1M views • 1 month ago",
thumbnail:"https://picsum.photos/600/350?9"
}

];

const videoGrid = document.getElementById("videoGrid");

function displayVideos(videoArray){

videoGrid.innerHTML="";

videoArray.forEach(video=>{

videoGrid.innerHTML += `

<div class="video-card">

<div class="thumbnail">

<img src="${video.thumbnail}">

<div class="duration">12:45</div>

</div>

<div class="video-info">

<img
class="channel-icon"
src="https://i.pravatar.cc/50">

<div class="video-details">

<h3>${video.title}</h3>

<p>${video.channel}</p>

<p>${video.views}</p>

</div>

</div>

</div>

`;

});

}

displayVideos(videos);

document
.getElementById("searchInput")
.addEventListener("keyup", function(){

const value =
this.value.toLowerCase();

const filteredVideos =
videos.filter(video =>
video.title.toLowerCase().includes(value)
);

displayVideos(filteredVideos);

});

document
.querySelector(".menu-btn")
.addEventListener("click", ()=>{

const sidebar =
document.getElementById("sidebar");

if(sidebar.style.display==="none"){
sidebar.style.display="block";
}
else{
sidebar.style.display="none";
}

});