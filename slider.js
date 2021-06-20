
let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const bottombtn01 = document.querySelector('#imgto1');
const bottombtn02 = document.querySelector('#imgto2');
const bottombtn03 = document.querySelector('#imgto3');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottombtn01.addEventListener('click', moveA);
bottombtn02.addEventListener('click', moveB);
bottombtn03.addEventListener('click', moveC);

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveright);


//move first image//
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}

function moveB()
{
    imageSlider.style.transform = 'translate(-1328px)';
    nowIndex =2;
}

function moveC()
{
    imageSlider.style.transform = 'translate(-2656px)';
    nowIndex =3;
}

function moveLeft()
{
    if(nowIndex ==1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}



function moveright()
{
    if(nowIndex == 3)
    {
    nowIndex =3;
    }
    else{
        nowIndex ++;
    }

    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    } 




    
}