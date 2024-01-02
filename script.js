var data = {
    chitesh : {
        name : "Chitesh Chakra",
        leetcode : "https://leetcode.com/chiteshchakra/",
        codechef : "https://www.codechef.com/users/chiteshchakra",
        geekforgeeks : "https://auth.geeksforgeeks.org/user/chiteshchakra",
        linkedin : "https://www.linkedin.com/in/chiteshchakraallakula/",
        github : "https://github.com/chiteshchakra"
    },
    harinath : {
        name : "Harinath Ranga",
        leetcode : "https://leetcode.com/R_HARINATH/",
        codechef : "https://www.codechef.com/users/r_harinath",
        geekforgeeks : "https://auth.geeksforgeeks.org/user/harinathranga",
        linkedin : "https://www.linkedin.com/in/harinathranga/",
        github : "https://github.com/harinathranga"
    },
    prakash : {
        name : "Prakash Raju",
        leetcode : "https://leetcode.com/prakashraju_05/",
        codechef : "https://www.codechef.com/users/prakashraju",
        geekforgeeks : "https://auth.geeksforgeeks.org/user/prakashraju_05",
        linkedin : "https://www.linkedin.com/in/prakashraju05/",
        github : "https://github.com/PrakashRaju05"
    },
    mahesh : {
        name : "Mahesh Yadav",
        leetcode : "https://leetcode.com/mahesh_777/",
        codechef : "https://www.codechef.com/users/mahesh_30",
        geekforgeeks : "https://auth.geeksforgeeks.org/user/uduthamaheshyadav",
        linkedin : "https://www.linkedin.com/in/uduthamaheshyadav/",
        github : "https://github.com/Uduthamahesh77"
    }
};

const hari = document.getElementById("harinath");
const chinna = document.getElementById("chitesh");
const prakash = document.getElementById("prakash");
const mahesh = document.getElementById("mahesh");

function changeContent(member,data){
    document.getElementById("display").innerHTML=`<h2 id="name">${data[member]['name']}</h2>
    <hr>
    <div>
        <h3>Socials</h3>
        <div class="socials">
            <a target="_blank" href="${data[member]['linkedin']}">LinkedIn</a>
            <a target="_blank" href="${data[member]['github']}">github</a>
        </div>
    </div>
    <br>
    <hr>
    <div>
        <h3>Coding profiles</h3>
        <div id="codings">
            <a target="_blank" href="${data[member]['leetcode']}">Leetcode</a>
            <a target="_blank" href="${data[member]['codechef']}">CodeChef</a>
            <a target="_blank" href="${data[member]['geekforgeeks']}">GeekForGeeks</a>
        </div>
    </div>
    <br>
    <hr> `;
}
hari.addEventListener('click',function(){
    changeContent("harinath",data);
});
chinna.addEventListener('click',function(){
    changeContent("chitesh",data);
});
prakash.addEventListener('click',function(){
    changeContent("prakash",data);
});
mahesh.addEventListener('click',function(){
    changeContent("mahesh",data);
});