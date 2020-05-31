controller.B.onEvent(ControllerButtonEvent.Released, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    palloncino.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 59))
    ago.setPosition(Math.randomRange(0, 160), Math.randomRange(59, 120))
    info.startCountdown(Math.randomRange(15, 35))
})
let ago: Sprite = null
let palloncino: Sprite = null
palloncino = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 f 2 2 2 2 f 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 f 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 f f f f 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(palloncino)
scene.setBackgroundColor(9)
ago = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
info.setScore(0)
info.startCountdown(30)
ago.setPosition(Math.randomRange(0, 75), Math.randomRange(0, 75))
palloncino.setFlag(SpriteFlag.StayInScreen, true)
ago.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    ago.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
