/*************************************************************
 * TABLE OF CONTENTS (FEATURES)
 * ============================
 * 1. Roll dice
 * 2. Move token
 * 3. Show book prompt
 * 4. Book prompt completed button
 * 5. Add book prompts to books read
 * 6. Win game when past GO
 *************************************************************/

window.onload = pageReady;

function pageReady(){

    // variables
    var currentSpace = 13; // to store current position (hard coded so user starts at space 13)
    var nextSpace; // to store space to move to
    var numberRolled = 5; // initialize dice
    var rollInProgress = false; // variable to keep track of if a roll is in progress, ensures user can't click dice again until the next turn
    var moveInProgress = false; // variable to keep track of if button to move token has been clicked, ensures user can only click to move token once in a turn
    var gameOver = false; // to keep track if the user has made it past GO (all the way around the board)
    var book; // to store what type of book was read/completed
    var numBooks = 3; // to keep track of the number of books the user has read/completed (hard coded to 3)

    // variables for HTML elements
    var errorText = document.getElementById("errorText");

    /* 1. ROLL DICE */
    // dice event listener
    dice.onclick = rollDice;

    function rollDice(){
        if(rollInProgress === false){
            rollInProgress = true;
            // generate random number between 1 and 6
            var dice = document.getElementById("dice");
            numberRolled = Math.ceil(Math.random() * 6);
            dice.innerHTML = "<p>" + numberRolled + "</p>";
    
            // set nextSpace variable to the space the user moves to based on the number they rolled
            nextSpace = currentSpace + numberRolled;
    
            // control for when user makes it around entire board
            if (nextSpace > 23){
                var over = nextSpace - 24; // subtract 24 since there are 24 spaces (0-23)
                nextSpace = over;
            }
    
            //variable to access token
            var moveHereImg = "moveHereImg-space" + nextSpace;
    
            // outline of book appears on space user will move to
            document.getElementById(moveHereImg).style.display = "block";

            //popup message
            var popup = document.getElementById("popup");
            popup.style.display = "block";
            popup.innerHTML = "You rolled a " + numberRolled + ". Click to the space move.";


            // /* 2. MOVE TOKEN */
            document.getElementById(moveHereImg).onclick = moveToken;

            function moveToken(){
                if (moveInProgress === false){
                    moveInProgress = true;
                    // token move animation
                for (i = 1; i <= numberRolled; i++){
                    move(i);
            }

            function move(i){
                setTimeout(function(){
                    var startingSpace = currentSpace - numberRolled;
                    var onSpace = startingSpace + i;

                    // to handle when user makes around entire board
                    if (onSpace < 0){
                        onSpace = onSpace + 24;
                        startingSpace = startingSpace + 24;
                        gameOver = true;
                    } else if (onSpace === 0){
                        startingSpace = startingSpace + 24;
                        gameOver = true;
                    }
                    var clearSpace = startingSpace + (i-1);
                    
                    var nextSpace = "token-space" + onSpace;
                    var previousSpace = "token-space" + clearSpace;

                    document.getElementById(nextSpace).style.display = "block";
                    document.getElementById(previousSpace).style.display = "none";
                    if (i === numberRolled){
                        document.getElementById(moveHereImg).style.display = "none";
                        showBookPrompt();
                        moveInProgress = false;
                    }

                }, 500 * i);
            }
                }
            }

            /* 3. SHOW BOOK PROMPT */
            function showBookPrompt(){

                // get the data value (book prompt) associated with the space the user landed on
                var spaceValue = "space" + currentSpace;
                var roll = document.getElementById(spaceValue).dataset.value;

                // show book prompt card instead of popup of what the number was rolled
                var card = document.getElementById("card");
                var cardBookPrompt = document.getElementById("cardBookPrompt");
                card.style.display = "none";
                popup.style.display = "none";
                card.style.display = "block";
                cardBookPrompt.innerHTML = roll;

                // show same coloured book prompt card as the colour of the space the user landed on
                switch(roll) {
                    case "A romance book":
                        card.classList.remove(card.classList[0]);
                        card.classList.add("pinkCard");
                        book = "romance";
                        break;
                    case "A book in a series":
                        card.classList.remove(card.classList[0]);
                        card.classList.add("greenCard");
                        book = "series";
                        break;
                    case "A thriller/mystery book":
                        card.classList.remove(card.classList[0]);
                        card.classList.add("blueCard");
                        book = "mystery";
                        break;
                    case "A fantasy book":
                        card.classList.remove(card.classList[0]);
                        card.classList.add("purpleCard");
                        book = "fantasy";
                        break;
                    case "A new release":
                        card.classList.remove(card.classList[0]);
                        card.classList.add("yellowCard");
                        book = "new-release";
                        break;
                    case "Any book of your choosing":
                        card.classList.remove(card.classList[0]);
                        card.classList.add("lightBlueCard");
                        book = "choice";
                        break;
                }

                /* 4. BOOK PROMPT COMPLETED BUTTON */
                // get html button and list of book prompts
                var completeButton = document.getElementById("completeButton");
                // var rolls = document.getElementById("bookPrompts");
                var booksReadList = document.getElementById("booksReadList");
                
                function bookCompleted(){
                    /* 5. ADD BOOK PROMPT TO BOOKS READ */
                    // add book img to bookshelf
                    var bookImg = document.createElement("img");
                    bookImg.src = "images/" + book + ".svg";
                    var bookshelf = document.getElementById("bookshelf");
                    bookshelf.appendChild(bookImg);

                    // add book img to bookshelf to display once the game is over
                    var finalBookImg = document.createElement("img");
                    finalBookImg.src = "images/" + book + ".svg";
                    var finalBookshelf = document.getElementById("finalBookshelf");
                    finalBookshelf.appendChild(finalBookImg);

                    // add book prompt to list
                    var bookPrompt = document.createElement("li");
                    var bookPromptText = document.createTextNode(roll);
                    bookPrompt.appendChild(bookPromptText);
                    booksReadList.appendChild(bookPrompt);

                    // add to numBooks counter
                    numBooks = numBooks + 1;
                    var numBooksRead = document.getElementById("numBooksRead");
                    numBooksRead.innerHTML = "You read " + numBooks + " books:";

                    // hide book prompt card
                    card.style.display = "none";

                    // user can now roll again
                    rollInProgress = false;

                    // remove any error text
                    errorText.style.display = "none";

                    if(gameOver === true){
                        win();
                    }
                }

                // complete button event listener
                completeButton.onclick = bookCompleted;
            }

            /* 6. WIN GAME WHEN PAST GO */
            function win(){
                // get html elements
                var game = document.getElementById("game");
                var reward = document.getElementById("reward");

                // hide game
                game.style.display = "none";
                // show reward screen
                reward.style.display = "block";
            }

            // the space the user moved to becomes the new current space
            currentSpace = nextSpace;

        //show error message if user tries to roll while in the middle of another roll/turn
         }else{
            errorText.style.display = "block";
        }
    }

}