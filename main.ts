controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000202030202020204040403030303030202020404020303030202020402040303030302020202020202020202020202020202020202020202020202020101010101010101010101010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile2,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . d 7 7 7 7 7 d . . . . . 
    . . . . d 7 7 7 7 7 d . . . . . 
    . . . . d 7 7 7 7 7 d . . . . . 
    . . . . d 9 9 9 9 9 d . . . . . 
    . . . . d 9 9 9 9 9 d . . . . . 
    . . . . . 9 . . . 9 . . . . . . 
    . . . . . 9 . . . 9 . . . . . . 
    . . . . . 9 . . . 9 . . . . . . 
    . . . . . 9 . . . 9 . . . . . . 
    . . . . 9 9 . . . 9 9 . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
controller.moveSprite(mySprite)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 1 2 1 2 1 2 1 3 . . . . 
        . . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 0), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
game.onUpdateInterval(100, function () {
    if (info.score() >= 20) {
        game.over(true)
    }
})
