/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function BackgroundAnimation(ctx, speed)
{
    /* These three are ALWAYS needed */
    var animationInterval = null;
    var ANIMATION_SPEED = 20; // change to suit the animation speed in milliseconds. Smaller numbers give a faster animation */
    var animationIsDisplayed = false;

    /* These variables depend on the animation */
    var x = 0;
    var backgroundImage = new Image();
    backgroundImage.src = "scrollingbackground.png";

    backgroundImage.onload = function ()
    {
        /* Start the animation */
        setTimeout(start, 0);
    };


    /* Public functions */
    this.start = start;
    function start()
    {
        animationIsDisplayed = true;
        animationInterval = setInterval(update, ANIMATION_SPEED);
    }


    this.stop = stop;
    function stop()
    {
        animationIsDisplayed = true;
        clearInterval(animationInterval);
        animationInterval = null; // set to null when not running           
    }


    this.kill = kill;
    function kill()
    {
        stop();
        animationIsDisplayed = false;
    }


    this.update = update;
    function update()
    {
        x -= speed;

        if (x <= -backgroundImage.width)
        {
            x = 0;
        }
    }


    this.render = render;
    function render()
    {
        if (animationIsDisplayed)
        {
            ctx.drawImage(backgroundImage, x, 0, backgroundImage.width, CANVAS_HEIGHT);
            ctx.drawImage(backgroundImage, x + backgroundImage.width, 0, backgroundImage.width, CANVAS_HEIGHT);
        }
    }
}
