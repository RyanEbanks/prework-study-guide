//Creating Conditions for the different topics

var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for(var i = 0; i < topics.length; i++){
        console.log(topics[i]);
    }
}

function selectTopic(){
    if(randomTopic === 'HTML'){
        console.log("Lets Study HTML!");
    } else if(randomTopic === 'CSS'){
        console.log("Lets Study CSS!");
    }else if(randomTopic === 'Git'){
        console.log("Lets Study Git!");
    }else if(randomTopic === 'JavaScript'){
        console.log("Lets Study JavaScript!");
    } else {
        console.log("Please try again!");
    }
}

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();