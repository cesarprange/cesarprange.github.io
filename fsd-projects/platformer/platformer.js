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
   // toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(1000, 0, 20, 290);
    createPlatform(1350, 200, 40, 50, "red");createPlatform(500, 0, 20, 290);
    createPlatform(1350, 300, 80, 80, "red");

    // TODO 3 - Create Collectables

    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("bob", 1000, 40);
    createCollectable("gold", 600, 180, 0.5, 0.7);
    
    
    // TODO 4 - Create Cannons

    createCannon("top", 200, 100);
    createCannon("right", 300, 2000);
    createCannon("side", 200, 100);
    createCannon("left", 300, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
