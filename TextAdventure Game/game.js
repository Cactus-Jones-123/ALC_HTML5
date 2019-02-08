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

//function Swamp(){
//    var swampEnv = prompt("this is a dank swamp. \n -follow path \n -swim");
    
//    if(swampEnv == "follow" || swampEnv == "follow path"){
//        var swampPath = prompt("jf;ajfkd;agha;lghalgja");
//        if(swampPath = "enter"){
            
//        }
//    }
//}

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
//                }
//            }
//}

var inventory = {
    rule_book:1,
    cactus_spine:1,
    coins:1000,
}
Game();

function Game(){
    
    document.write("<h1>Bruh you want to <em>restart</em>, restart the <em>page</em> to play game again!!!</h1>")
    alert("The Cactus Turtle Story Thingamagigger");
    var playerName = prompt("What you be called?!");
    alert("Make sure to spell out your answer exactly as you see the ways or it won't work. Thanks for playing!!")
    alert("Welcome to story of turtle who be cactus,  "+ playerName);
    
    BeginCactus();
    
    function BeginCactus(){
        var cactusRoom = prompt("You wake in cactus bed surrounded by cactus on cactus and more cactus. You are stuck in cactus. Mwahahahahahahahahahahaha! Oh yeah I forgetted tell you head hurts bad by prickly cactus on cactus because of cactus, don't worry bout it there is prickly bed, and no way out you can see. You have a rule book, and a cactus spine on you right now. \n -look roundd \n -back prickly bed \n -search way out \n -look turtle book \n -read rule book \n -go to shop (demonstration for mr. powell)").toLowerCase();
        
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
            var turtleBook = prompt("You open book. There is only uno pagina. It say, 'There is scratch on door. Scratch cactus spine on locked door tres times to open door.'. \n -scracth door with cactus spine \n -back prickly bed \n -look round again");
        }
        else if(cactusRoom == "read rule book"){
            var rulebookRead = prompt
        }
        else if(cactusRoom == "to shop"){
            Shop();
        }  
        else{
            alert("I don'y know you say");
            BeginCactus();
        }
    }
    
    function HallWay(){
        var hallTodo = prompt("Scratch, scratch, scratch. Door opens. You walk into door and in hallway. There is many doors to left and right. \n -try doors \n -walk down hallway");
    }
   function Shop(){
    alert("The shopkeeper scowls at you and mumble something rude! you wait for him to assist you.");
    
        var shopkeeper = prompt("What do ou want to buy? \n -cactus spine \n -hint \n -leave shop");
            if(shopkeeper == "cactus spine" || shopkeeper == "buy cactus spine" && inventory.coins >= 100){
                var cactusspineBuy = confirm("Are you sure you want to buy this cactus spine?");
                    if(cactusspineBuy){
                        inventory.cactus_spine ++;
                        alert("You own " +inventory.cactus_spine+" cactus spines");
                        inventory.coins = inventory.coins - 100;
                        alert("You have "+inventory.coins+" coins remaining");
                        Shop();
                    }
            }
            else if(shopkeeper == "hint" && inventory.coins >= 150){
                var hintBuy = confirm("Are you sure you want to buy this hint?");
                    if(hintBuy){
                        inventory.coins = inventory.coins - 150;
                        alert("You have "+inventory.coins+" coins remaining");
                        alert("Do not touch the zzz'ing man. he will kill you. if you find a hole, go back to bed and return to hole.");
                        Shop();
                    }
            }
            else{
                alert("Have a good day, come back again!");
                BeginCactus();
            }
        
}
    
    
}