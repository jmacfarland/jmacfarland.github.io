
var persistentScore = 0;

var tiles = [];
tiles["A"] = { "value" : 1,  "init" : 9,  "left" : 9, "image" : "css/img/Scrabble_Tile_A.jpg"  } ;
tiles["B"] = { "value" : 3,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_B.jpg"  } ;
tiles["C"] = { "value" : 3,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_C.jpg"  } ;
tiles["D"] = { "value" : 2,  "init" : 4,  "left" : 4, "image" : "css/img/Scrabble_Tile_D.jpg"  } ;
tiles["E"] = { "value" : 1,  "init" : 12, "left" : 12, "image" : "css/img/Scrabble_Tile_E.jpg"  } ;
tiles["F"] = { "value" : 4,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_F.jpg"  } ;
tiles["G"] = { "value" : 2,  "init" : 3,  "left" : 3, "image" : "css/img/Scrabble_Tile_G.jpg"  } ;
tiles["H"] = { "value" : 4,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_H.jpg"  } ;
tiles["I"] = { "value" : 1,  "init" : 9,  "left" : 9, "image" : "css/img/Scrabble_Tile_I.jpg"  } ;
tiles["J"] = { "value" : 8,  "init" : 1,  "left" : 1, "image" : "css/img/Scrabble_Tile_J.jpg"  } ;
tiles["K"] = { "value" : 5,  "init" : 1,  "left" : 1, "image" : "css/img/Scrabble_Tile_K.jpg"  } ;
tiles["L"] = { "value" : 1,  "init" : 4,  "left" : 4, "image" : "css/img/Scrabble_Tile_L.jpg"  } ;
tiles["M"] = { "value" : 3,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_M.jpg"  } ;
tiles["N"] = { "value" : 1,  "init" : 6,  "left" : 6, "image" : "css/img/Scrabble_Tile_N.jpg"  } ;
tiles["O"] = { "value" : 1,  "init" : 8,  "left" : 8, "image" : "css/img/Scrabble_Tile_O.jpg"  } ;
tiles["P"] = { "value" : 3,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_P.jpg"  } ;
tiles["Q"] = { "value" : 10, "init" : 1,  "left" : 1, "image" : "css/img/Scrabble_Tile_Q.jpg"  } ;
tiles["R"] = { "value" : 1,  "init" : 6,  "left" : 6, "image" : "css/img/Scrabble_Tile_R.jpg"  } ;
tiles["S"] = { "value" : 1,  "init" : 4,  "left" : 4, "image" : "css/img/Scrabble_Tile_S.jpg"  } ;
tiles["T"] = { "value" : 1,  "init" : 6,  "left" : 6, "image" : "css/img/Scrabble_Tile_T.jpg"  } ;
tiles["U"] = { "value" : 1,  "init" : 4,  "left" : 4, "image" : "css/img/Scrabble_Tile_U.jpg"  } ;
tiles["V"] = { "value" : 4,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_V.jpg"  } ;
tiles["W"] = { "value" : 4,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_W.jpg"  } ;
tiles["X"] = { "value" : 8,  "init" : 1,  "left" : 1, "image" : "css/img/Scrabble_Tile_X.jpg"  } ;
tiles["Y"] = { "value" : 4,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_Y.jpg"  } ;
tiles["Z"] = { "value" : 10, "init" : 1,  "left" : 1, "image" : "css/img/Scrabble_Tile_Z.jpg"  } ;
tiles["_"] = { "value" : 0,  "init" : 2,  "left" : 2, "image" : "css/img/Scrabble_Tile_Blank.jpg"  } ;

function getRandomTile() {
  //get a random tile, accounting for the different quantities of each tile
  var tilemap = []
  for (var l in tiles){
    for (var i = 0; i < tiles[l].left; i++){
      tilemap.push(l);
    }
  }
  //choose random tile from the tilemap
  var index = parseInt(Math.random() * tilemap.length);
  var letter = tilemap[index];
  //remove one of the chosen tiles from the tile roster
  tiles[letter].left--;
  return letter;
};

function resetTileNums() {
  //reset each tile's "left" number to the "init" number
  for (var l in tiles){
    tiles[l].left = tiles[l].init;
  }
};

var board = {};
board.tiles =
  [{"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 2, "type": "double_word"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 2, "word": 1, "type": "double_letter"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 2, "word": 1, "type": "double_letter"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 2, "type": "double_word"},
   {"letter": 1, "word": 1, "type": "blank"},
   {"letter": 1, "word": 1, "type": "blank"}
  ];

board.pieces = [
  '0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'
];

function isCoherent() {
  //returns:
  //  True: if there are no empty spaces between letters on the board
  //  False: if there are empty spaces between letters
  var seenFirstLetter = false;
  var seenFollowingBlank = false;
  for (i in board.pieces) {
    char = board.pieces[i];
    if (!seenFirstLetter && char != '0') {
      seenFirstLetter = true;
    } else if (seenFirstLetter && !seenFollowingBlank && char == '0') {
      seenFollowingBlank = true;
    } else if (seenFollowingBlank && char != '0') {
      console.log("NOT COHERENT");
      return false;
    }
  }
  console.log("COHERENT");
  return true;
}

function getWord() {
  //returns array of just the valid letters
  var result = [];
  for (i in board.pieces) {
    if (board.pieces[i] != '0') {
      result.push(board.pieces[i]);
    }
  }
  console.log(result);
  return result;
}

function getWordScore() {
  //returns word score
  var score = 0;
  var wordMult = 1;
  for (i in board.pieces) {
    if (board.pieces[i] != '0') {
      score += tiles[board.pieces[i]].value * board.tiles[i].letter;
      wordMult *= board.tiles[i].word;
    }
  }
  score *= wordMult;
  console.log("WORD SCORE: " + score);
  return score;
}

function createBoard() {
  //setup height and width of board
  var tile_width = 81;
  var num_tiles = 15;
  var board_width = tile_width * num_tiles;
  var tile_height = 87;
  $("#board").css("height", tile_height);
  $("#board").css("width", board_width);

  //add images
  var i;
  for (i = 0; i < num_tiles; i++) {
    temp = $('<div class="tile droppable '+board.tiles[i].type+'" num='+i+' />');
    temp.droppable({
      accept: ".piece",
      tolerance: "fit",
      drop: function(event, ui){
        //put the letter in place on the pieces array
        var place = event.target.attributes.num.value;
        var letter = ui.draggable[0].attributes.letter.value;
        board.pieces[place] = letter;
        console.log(board.pieces);
        //prevent other pieces from being dropped here
        $(this).droppable('option', 'accept', ui.draggable);
        update();
      },
      out: function(event, ui){
        //remove the letter from the pieces array
        var place = event.target.attributes.num.value;
        board.pieces[place] = '0';
        //allow other pieces to be dropped here again
        $(this).droppable('option', 'accept', '.piece');
        update();
      }
    });
    $("#board").append(temp);
  }
};

function update() {
  //score and check for errors
  if (isCoherent()) {
    $("#score").text("Score: "+(persistentScore+getWordScore()));
    $("#nonCoherent").hide();
  } else {
    $("#score").text("Score: "+persistentScore);
    $("#nonCoherent").show();
  }
}

function newTiles() {
  //get and display new set of tiles
  if (isCoherent()) {
    //if what's on the board is valid, save its score in the persistentScore
    persistentScore += getWordScore();
  }
  restart();
  var chosen = [];
  for (var i = 0; i < 7; i++){
    chosen.push(getRandomTile());
  }
  console.log("Random tileset: " + chosen);
  for (var c in chosen) {
    //create 7x tiles with letters as chosen
    temp = $('<div class="piece draggable" letter="'+chosen[c]+'" style="background-image: url('+tiles[chosen[c]].image+')" />');
    temp.draggable({
      snap: ".tile",
      snapMode: "inner",
      //if drop target is invalid, snap back to previous valid location
      revert: "invalid"
    });
    $("#holder").append(temp);
  }
};

function restart() {
  //remove all pieces, reset board tiles to accept any pieces, and wipe the
  // board array clean
  $(".piece").remove();
  $(".droppable").droppable('option', 'accept', '.piece');
  board.pieces = [
    '0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'
  ];
};

function reset() {
  //start new game
  persistentScore = 0;
  restart();
  resetTileNums();
  update();
}

$().ready(function() {
  createBoard();
  $("#holder").droppable({
    accept: ".piece"
  })
  $(".error").hide();
});
