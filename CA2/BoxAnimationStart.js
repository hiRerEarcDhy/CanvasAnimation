/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function BoxAnimationStart(ctx, animationStartDelay, endY, x)
{

    var animationInterval = null;
    var ANIMATION_SPEED = 5; // change to suit the animation speed in milliseconds. Smaller numbers give a faster animation */
    var animationIsDisplayed = true;

    //BOX STARTS AT A Y-LOCATION OF 0
    var y = 0;

    //KICKS OFF ANIMATION
    setTimeout(start, animationStartDelay);


    //START ANIMATION
    this.start = start;
    function start()
    {
        animationIsDisplayed = true;
        animationInterval = setInterval(update, ANIMATION_SPEED);
    }

    //STOPS ANIMATION
    this.stop = stop;
    function stop()
    {
        animationIsDisplayed = true;
        clearInterval(animationInterval);
        animationInterval = null; // set to null when not running           
    }

    //ANIMATION DISAPPEARS
    this.kill = kill;
    function kill()
    {
        stop();
        animationIsDisplayed = false;
    }

    //UPDATES BOX'S LOCATION
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

    //RENDERS THE BOX
    this.render = render;
    function render()
    {
        if (animationIsDisplayed)
        {
            var gradient = ctx.createLinearGradient(20, 20, 300, 300);
            gradient.addColorStop(0, "#739ee2");
            gradient.addColorStop(1, "#d09ed8");
            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, CANVAS_WIDTH, CANVAS_HEIGHT);     //(x-location, y-location, box height, box width)
        }
    }
}


