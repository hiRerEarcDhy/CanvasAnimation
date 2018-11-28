/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function BoxAnimationEnd(ctx, animationStartDelay, endY, x)
{

    var animationInterval = null;
    var ANIMATION_SPEED = 1; // change to suit the animation speed in milliseconds. Smaller numbers give a faster animation */
    var animationIsDisplayed = false;

    //(Y == 200)
    var y = CANVAS_HEIGHT;

    setTimeout(start, animationStartDelay);


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
            var gradient = ctx.createLinearGradient(20, 20, 300, 300);
            gradient.addColorStop(0, "#bc4b4b");
            gradient.addColorStop(1, "#c189d6");
            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, CANVAS_WIDTH, CANVAS_HEIGHT);     //(x-location, y-location, box height, box width)
        }
    }
}


