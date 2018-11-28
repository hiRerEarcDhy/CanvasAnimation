/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function TextAnimationStart2(ctx, animationStartDelay, message, endY, x, fontSize, textColour)
{
    /* These three are ALWAYS needed */
    var animationInterval = null;
    var ANIMATION_SPEED = 5; // change to suit the animation speed in milliseconds. Smaller numbers give a faster animation */
    var animationIsDisplayed = true;

    /* These variables depend on the animation */
    var y = 110;

    /* Start the animation */
    setTimeout(start, animationStartDelay);


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
        y--;
        if (y <= endY)
        {
            y = endY;
            stop();
        }
    }


    this.render = render;
    function render()
    {
        if (animationIsDisplayed)
        {
            ctx.fillStyle = textColour;
            ctx.font = fontSize + "px Times Roman";
            ctx.fillText(message, x, y);
        }
    }
}
