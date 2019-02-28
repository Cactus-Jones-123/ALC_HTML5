// Single line comment
/*

Multiline comment

*/

//document.write("<h1>Hey! <em>Same!</em></h1>");

// This code pops up and tells them something
//alert("What are you doing user! Answer these questions to get in and you will find what I say about you!! Mwahahahahaha");

//confirm("Do you like pokemon?");

// This code asks what type of pokemon they like
//prompt("What type of pokemon do you like?");

// This code asks their name
//var pc = prompt("What you be called?");

// This makes sure that thats what they want
//confirm("So you be that one "+pc);

// This code is a new function, wich can be accessed anytime
//function Swamp(){
//    var swampEnv = prompt("this is a dank swamp. \n -follow path \n -swim");
    
//    if(swampEnv == "follow" || swampEnv == "follow path"){
//        var swampPath = prompt("jf;ajfkd;agha;lghalgja");
//        if(swampPath = "enter"){
            
//        }
//    }
//}

// This code is a shop and you can buy and store things in your inventory
//function Blacksmith(){
//    alert("The blacksmith scowls at you and mumble something rude! you wait fo rhim to assist you.");
    
//        var blacksmith = prompt("What do ou want to buy? \n -sword \n -shild \n -armor \n -leave shop");
//            if(blacksmith == "sword" || balcksmith == "buysword" && inventory.coins >= 100){
//                var swordBuy = confirm("Are you sure you want to buy this sword?");
//                    if(swordBuy){
//                        inventory.sword ++;
//                        alert("You own " +inventory.sword+" swords");
//                        inventory.coins = inventory.coins - 100;
//                        alert("You have "+inventory.coins+" coins remaining");
//                        Blacksmith();
//                    }
//                else{
//                    alert("Have a good day, come back again!");
//                    village();
//                }                                                                            ||
//            }                                                                                ||
//}                                                                                          \-||-/
// This code chooses a random number and depending on the number, there are different outcomes\||/
//    function Random(){                                                                       \/
//        alert("all doors locked but one are locked you open door.");
//        var rand = [Math.floor(Math.random()* 3)];
        
//        if(rand == 0){
//            restart();
//        }
//        else if(rand == 1){
//            win();
//        }
//        else if(rand == 2){
//            lose();
//        }
//    }
//    function restart(){
//        alert("When open door, cactus swing down, you try dodge, but it still hit you. It losted some of speed/momentum though. Cactus had smacks you face. You is nocked out.");
//        BeginCactus();
//    }
//    function win(){
//        alert("When open door, you see cactus swinging down, you dodge, but barely. You look around and see a hole, you jump down. You land in paradise, Congradulations!! You won!");
//    }
//    function lose(){
//        alert("When open door, cactus swings down, kills you with hit to face. Ooooh, you lose. D:");
//    }

// This code makes a while loop to make sure its raining
//var isRaining = true;

//while(isRaining){
//    console.log("It is raining outside, take an umbrella!");
//    isRaining = false;
//}

// This code makes a for loop so you can do multiple things at once
//for(i = 1; i <= arrowCon; i++){
//    inventory.arrows ++;
//    console.log("You have "+inventory.arrows+" arrows");
//    inventory.coins --;
//    console.log("You have "+inentory.coins+" coins");
//    arrowsShop --;
//}
//alert("you have "+inventory.coins+" coins in your purse");
//alert("You have purchased "+arrowCon+" arrows. Thank you!")
 var inventoryCheck = function(){
     alert("\n -cactus spines: "+inventory.cactus_spine+"\n -coins: "+inventory.coins+"");
 }
var inventory = {
    cactus_spine:0,
    coins:1000,
}
Game();

function Game(){
    
    document.write("<h1>Bruh you want to <em>restart</em>, restart the <em>page</em> to play game again!!!</h1>")
    alert("The Cactus Turtle Story Thingamagigger");
    var playerName = prompt("What you be called?!");
    
    while(!confirm("Are you sure "+playerName+" is you name?")){
        playerName = prompt("What you be called then?!")
    }
    alert("Make sure to spell out your answer exactly as you see the ways or it won't work. Thanks for playing!!")
    alert("Welcome to story of turtle who be cactus,  "+ playerName);
    
    BeginCactus();
    
    function BeginCactus(){
        var cactusRoom = prompt("You wake in cactus bed surrounded by cactus on cactus and more cactus. You are stuck in cactus. Mwahahahahahahahahahahaha! Oh yeah I forgetted tell you head hurts bad by prickly cactus on cactus because of cactus, don't worry bout it there is prickly bed, and no way out you can see. You have a rule book, and a cactus spine on you right now. \n -look roundd \n -back prickly bed \n -search way out \n -look turtle book \n -to shop").toLowerCase();
        
        if(cactusRoom == "look roundd"){
            var cactusroomLook = prompt("You see turtle run fast in cactus hole. There is pricklies everywhere you look. You find non-prickly bed with person zzz'ing in it. There is prickly door, but locked prickly door. There is prickly bed you woke. In center floor of prickly cactus floor, rug made of cactus and pricklies lay. You also see turtle book on prickly floor. \n -wake zzz'ing person \n -move rug \n -back prickly bed").toLowerCase();
            
            if (cactusroomLook == "wake zzz'ing person"){
                var wakemanUp = alert("You wake up man he reaches under bed and with blank black look, grabs long prickly cactus spine thingy and stabs you throat. Cactus Game Over! D:");
            }
            
            else if(cactusroomLook == "back prickly bed"){
                alert("You sleep in prickly bed dream of man and cactus spine, and death. When you wake see zzz'ing man, remember the dream and stay back");
            var resume = confirm("Do wish to continue?!");
            
            if(resume){
                BeginCactus();
            }
            else{
                alert("Cactus Game Over! D:");
            } 
            }
            else if(cactusroomLook == "move rug"){
                var rugMove = prompt("You move rug, under is hole barely big for you to fit. \n -go down hole \n -step away");
                
                if(rugMove == "go down hole"){
                    var holeDescend = alert("You crawl out of hole land something gritty pale yellow. You realize this is paradise beach. Congrajulations!!! You Won The Game!!!");
                }
                else if(rugMove == "step away"){
                    BeginCactus();
                }
                else{
                alert("I don'y know you say");
                BeginCactus();
                }
            }
            else{
                alert("I don't know you say!");
                BeginCactus();
            }
        }
        
        else if(cactusRoom == "back prickly bed"){
            alert("You sleep in prickly bed and dream of cactus and turtles, wonder what they have do with each other");
            var resume = confirm("Do wish to continue?!");
            
            if(resume){
                BeginCactus();
            }
            else{
                alert("Cactus Game Over! D:");
            }
        }
        else if(cactusRoom == "search way out"){
            alert("You don't find way out and pricked your fingerses trying to find way out");
            
            resume = confirm("Do wish to continues?!");
            
            if(resume){
                BeginCactus();
            }
            else{
                alert("Cactus Game Over! D:");
            }
        }
        else if(cactusRoom == "look turtle book"){

            Turtlebook();
        }
        else if(cactusRoom == "read rule book"){
            var rulebookRead = prompt
        }
        else if(cactusRoom == "to shop"){
            Shop();
        }
        else if(cactusRoom == "inventory"){
            
        }
        else{
            alert("I don'y know you say?!");
            BeginCactus();
        }
    }
    
    function HallWay(){
        var hallTodo = prompt("Scratch, scratch, scratch. Door opens. You walk into door and in hallway. There is many doors to left and right. \n -try doors \n -walk down hallway");
        if(hallTodo == "try doors"){
            Random();
        }
        else if(hallTodo == "walk down hallway"){
            var hole = prompt("You walk down hallway. There is hole. \n -go down hole \n -back prickly bed");
            if(hole == "go down hole"){
                alert("as start going down hole, feel something stab through gut. as fall in hole, you turn and see man standing, he is smiling, he says 'thank you' and than you drift away.");
                alert("Game over!D:");
            }
            else if(hole == "back prickly bed"){
                Win();
            }
            else{
                HallWay();
            }
        }
        else{
            alert("I don'y know what say you?!");
            HallWay();
        }
    }
    function Shop(){
        var i = 1;
    alert("The shopkeeper scowls at you and mumble something rude! you wait for him to assist you.");
    
        var shopkeeper = prompt("What do ou want to buy? \n -cactus spine \n -hint \n -leave shop");
            if(shopkeeper == "cactus spine" || shopkeeper == "buy cactus spine"){
                var spineBuy = prompt("How many cactus spines would you like to buy?");
                
                while(!confirm("Are you sure you want to buy "+spineBuy+" cactus spines, for 100 coins per spine?")){
                    spineBuy = prompt("How many cactus spines do you want to buy then?!");
                }
                
                for(; i<= spineBuy; i++){
                    inventory.cactus_spine ++;
                    console.log("You have "+inventory.cactus_spine+" cactus spines");
                    inventory.coins -= 100;
                    console.log("You have "+inventory.coins+" coins");
                }
                
                
                inventoryCheck();
                Shop();
            }
            
            else if(shopkeeper == "hint" && inventory.coins >= 150){
                var hintBuy = confirm("Are you sure you want to buy this hint?");
                    if(hintBuy){
                        inventory.coins = inventory.coins - 150;
                        alert("Do not touch the zzz'ing man. will kill you. if find a hole, go back to bed and return hole.");
                        inventoryCheck();
                        Shop();
                    }
            }
            else{
                alert("Have a good day, come back again!");
                BeginCactus();
            }
        
    }
    function Turtlebook(){
        var turtleBook = prompt("You open book. There is only uno pagina. It say, 'There is scratch on door. Scratch cactus spine on locked door tres times to open door.'. \n -scratch door \n -back prickly bed \n -look round again");
        if(turtleBook == "scratch door"){
            HallWay();
        }
        else if(turtleBook == "back prickly bed"){
            alert("You go to sleep and dream of weird things.");
            var resume = confirm("Do wish continue?");
           
            if(resume){
                BeginCactus();
            }
        }
        else if(turtleBook == "look round again"){
            var resume = confirm("You look around again, nothing change. Do wish continue?");
           
            if(resume){
                Turtlebook();
            }
        }
        else{
            alert("I don't know what say?!");
            Turtlebook();
       }
    }
    function Win(){
        var backBed = prompt("You went bed. When wake, see zzz'ing man gone. \n -back prickly bed again \n -go to hole and jump");
       
        if(backBed == "back prickly bed again"){
            alert("You go bed.");
            var resume = confirm("Do wish to continue cactus turtle game?");
            
            if(resume){
                Win();
            }
        }
       else if(backBed == "go to hole and jump"){
           alert("When go back to hole, man who was zzz'ing there. He turns, say 'thank you' than jump. You follow. You land in paradise. Congratulations, you won!");
       }
       else{
           alert("I didn't understanding you!");
           Win();
       }
    }
    
    function Random(){
        alert("all doors locked but one are locked you open door.");
        var rand = [Math.floor(Math.random()* 3)];
        
        if(rand == 0){
            restart();
        }
        else if(rand == 1){
            win();
        }
        else if(rand == 2){
            lose();
        }
    }
    function restart(){
        alert("When open door, cactus swing down, you try dodge, but it still hit you. It losted some of speed/momentum though. Cactus had smacks you face. You is nocked out. You restart.");
        BeginCactus();
    }
    function win(){
        alert("When open door, you see cactus swinging down, you dodge, but barely. You look around and see a hole, you jump down. You land in paradise, Congradulations!! You won!");
    }
    function lose(){
        alert("When open door, cactus swings down, kills you with hit to face. Ooooh, you lose. D:");
    }
}