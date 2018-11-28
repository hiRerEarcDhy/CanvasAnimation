function TextBox(font, text, ctx, desiredX, desiredY, x, y, animationStartDelay, ANIMATION_SPEED, stepX, stepY, delayKill, color)
{
    
    var animationInterval = null;
    var animationIsDisplayed = false;

    
    //KICKS OFF ANIMATION
    var image = new Image();
    image.src = "sonicspritesheet.png";

    //WHEN IMAGE LOADS
    image.onload = function ()
    {
        /* Start the animation */
        setTimeout(start, animationStartDelay);

        setTimeout(function ()
        {
            kill();
        }, delayKill);
    }


    //START OF ANIMATION
    this.start = start;
    function start()
    {
        animationIsDisplayed = true;
        animationInterval = setInterval(update, ANIMATION_SPEED);
    }

    //STOPS ANIMATION WHEN REACHES GIVEN DESTINATION
    this.stop = stop;
    function stop()
    {
        animationIsDisplayed = true;
        clearInterval(animationInterval);
        animationInterval = null; // set to null when not running           
    }

    //MAKES TEXT DISAPPEAR
    this.kill = kill;
    function kill()
    {
        stop();
        animationIsDisplayed = false;
    }
    
    //MOVES ANIMATION
    this.update = update;
    function update()
    {
        if (x < desiredX)
        {
            x += stepX;
        }

        if (y < desiredY)
        {
            y += stepY;
        }

        if (x >= desiredX && y >= desiredY)
        {
            x = desiredX;
        }

    }


    this.render = render;
    function render()
    {
        if (animationIsDisplayed)
        {

            ctx.save();

            ctx.fillStyle = color;
            ctx.font = font;
            ctx.fillText(text, x, y);

            ctx.restore();
        }
    }
}