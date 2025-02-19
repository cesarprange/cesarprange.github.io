$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(700, 400, 400, 20);
    createPlatform(600, 500, 500, 30);
    createPlatform(500, 600, 600, 40);
    createPlatform(400, 700, 700, 50);
    createPlatform(800, 300, 300, 10);



    // TODO 3 - Create Collectables

    createCollectable("steve", 500, 500);
    createCollectable("diamond", 400, 600);
    createCollectable("grace", 300, 700);
    createCollectable("kennedi", 200, 700);

    
    // TODO 4 - Create Cannons

    createCannon("right", 700, 600);
    createCannon("bottom", 800, 500);
    createCannon("top", 1100, 400);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
