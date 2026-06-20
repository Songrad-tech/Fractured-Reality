# Stop and reset players after the dragon dies or they leave the fight.
execute as @a[tag=fr_dragon_music] at @s unless entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run stopsound @s music fractured_reality:music.ender_dragon
execute as @a[tag=fr_dragon_music] at @s unless entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run scoreboard players reset @s fr_music_time
execute as @a[tag=fr_dragon_music] at @s unless entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run tag @s remove fr_dragon_music

# Start the custom track when a player approaches a living Ender Dragon.
execute as @a[tag=!fr_dragon_music] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run stopsound @s music
execute as @a[tag=!fr_dragon_music] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run playsound fractured_reality:music.ender_dragon music @s ~ ~ ~ 1 1 0
execute as @a[tag=!fr_dragon_music] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run scoreboard players set @s fr_music_time 6186
execute as @a[tag=!fr_dragon_music] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run tag @s add fr_dragon_music

# Count down while the fight continues.
execute as @a[tag=fr_dragon_music] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] unless score @s fr_music_time matches 0.. run scoreboard players set @s fr_music_time 6186
execute as @a[tag=fr_dragon_music] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run scoreboard players remove @s fr_music_time 1

# Restart the 309.28-second track when it reaches its end.
execute as @a[tag=fr_dragon_music,scores={fr_music_time=..0}] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run stopsound @s music fractured_reality:music.ender_dragon
execute as @a[tag=fr_dragon_music,scores={fr_music_time=..0}] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run playsound fractured_reality:music.ender_dragon music @s ~ ~ ~ 1 1 0
execute as @a[tag=fr_dragon_music,scores={fr_music_time=..0}] at @s if entity @e[type=minecraft:ender_dragon,distance=..512,limit=1] run scoreboard players set @s fr_music_time 6186
