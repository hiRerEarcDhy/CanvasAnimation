/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function SonicAnimation(ctx, centreX, centreY, width, height, sonicSpeed, animationStartDelay)
{
    /* These three are ALWAYS needed */
    var animationInterval = null;
    var ANIMATION_SPEED = 60; // sprite sub-image changing speed. Smaller numbers give a faster animation */
    var animationIsDisplayed = false;

    /* These variables depend on the animation */
    var NUMBER_OF_SPRITES = 8; // the number of sprites in the sprite image
    var NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE = 8; // the number of columns in the sprite image
    var NUMBER_OF_ROWS_IN_SPRITE_IMAGE = 1; // the number of rows in the sprite image
    var currentSprite = 0;
    var row = 0;
    var column = 0;

    var SPRITE_WIDTH;
    var SPRITE_HEIGHT;

    var sonicImage = new Image();
    sonicImage.src = "sonicsprites.png";
    sonicImage.onload = function ()
    {
        SPRITE_WIDTH = parseInt(sonicImage.width / NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE);  // the -5 is an adjustment so that this sprite works
        SPRITE_HEIGHT = parseInt(sonicImage.height / NUMBER_OF_ROWS_IN_SPRITE_IMAGE);

        /* Start the animation */
        setTimeout(start, animationStartDelay);
    }

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
        centreX += sonicSpeed;
       
        currentSprite++;
        if (currentSprite === NUMBER_OF_SPRITES)
        {
            column = 0;
            currentSprite = 0;
        }
        else
        {
            column++;
            if (column === NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE)
            {
                column = 0;
            }
        }
    }


    this.render = render;
    function render()
    {
        if (animationIsDisplayed)
        {
            ctx.drawImage(sonicImage, column * SPRITE_WIDTH, row * SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_HEIGHT, centreX, centreY, width, height);
        }
    }
}
