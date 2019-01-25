// Single line comment
/*

Multiline comment

*/

//document.write("<h1>Hey! <em>Same!</em></h1>");


//alert("What are you doing user! Answer these questions to get in and you will find what I say about you!! Mwahahahahaha");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");

//var pc = prompt("What you be called?");

//confirm("So you be that one "+pc);
Game();

function Game(){
    
    document.write("The Cactus Turtle Story Thingamagigger");
    var playerName = prompt("What you be called?!");
    alert("Make sure to spell it exactly as you see it or it won't work. Thanks for playing!!")
    alert("Welcome to story of turtle who be cactus, "+ playerName);
    
    BeginCactus();
    
    function BeginCactus(){
        var cactusroom = prompt("You wake in cactus bed surrounded by cactus on cactus and more cactus. You are stuck in cactus. Mwahahahahahahahahahahaha! Oh yeah I forgetted tell you head hurts bad by prickly cactus on cactus because of cactus, don't worry bout it there is prickly bed, and no way out you can see \n -look roundd \n -back prickly bed \n -search way out \n -look turtle book").toLowerCase();
        
        if(cactusroom == "look roundd" || CactusRoom == "look around"){
            var cactusroomLook = prompt("You see turtle run fast in cactus hole. There is pricklies everywhere you look. You find non-prickly bed with person zzz'ing in it. There is prickly door, but locked prickly door. There is prickly bed you woke. In center floor of prickly cactus floor, rug made of cactus and pricklies lay. You also see turtle book on prickly floor. \n -wake zzz'ing person \n -move rug \n -try catch turtle \n -read turtle book \n -back prickly bed");
        }
        
        else if(cactusroom == "back to bed" || cactusroom == "back prickly bed"){
            alert("You sleep in prickly bed and dream of cactus and turtles wonder what they have do with each other");
            var resume = confirm("Do wish to continue?!");
            
            if(resume){
                BeginCactus();
            }
            else{
                alert("Cactus Game Over! D:");
            }
        }
    }
    
    
    
    
    
}