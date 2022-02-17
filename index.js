const bombs = [];
let gamePoints = 0;
let canPlay = true;

function updateGamePoints()
{
    const gamepointselement = document.getElementById("gamepoints");
    gamepointselement.innerHTML = "Your Game Points is "+ gamePoints;
}

function addGrid()
{
    const appElement = document.getElementById('app');
    for(let i = 0;i<9;i++)
    {
        const row = document.createElement('div');
        for(let j = 0; j<9;j++)
        {
            const index = i*9+j;

            const col = document.createElement('div');
            col.style.display='inline-block';   //inline-block allows to modify height and width...Block doesnt allow us to modify height and width
            col.style.width='60px';
            col.style.height='60px';
            col.style.border = '1px solid black';
            col.style.textAlign = 'center';
            col.style.verticalAlign = 'middle';
            col.setAttribute("index",index);
            col.addEventListener('click',function(){
                if(canPlay){
                    if(bombs.includes(index)){
                        col.innerHTML = "*";
                        col.style.backgroundColor = "red";
                        col.style.color = "white";
                        canPlay = false;
                        const gamepointselement = document.getElementById("gamepoints");
                        gamepointselement.innerHTML = "Game Over!!! YOur final Score is "+ gamePoints;
                    }
                    else{
                        col.style.background="green";
                        gamePoints++;
                        updateGamePoints();
                    }
                }
                
            })

            row.appendChild(col);

            
        }
        appElement.appendChild(row);
    }
}

function generateBombs()
{
    
    while(bombs.length!=10){
        const randomNum = Math.floor(Math.random() * 100);
        if(randomNum < 81 && !bombs.includes(randomNum)){           //this will create array of 0 to 81 random number....which will not repeated
            bombs.push(randomNum);
        }
    }

    
}

addGrid();
generateBombs();
console.log(bombs);