# incremental-mass-rewritten-plus

Personal tweaks to IMR.

## Changelog:

### v0.7.1.6-plus 14

- Rage upgrades 1x4, 1x5, 2x1 and 2x2 costs increased
- Black Hole upgrade 1x3 cost decreased
- Black Hole upgrades 2x4 and 2x5 costs increased
- Atom upgrades 2x4 and 2x5 costs decreased
- Challenges 1 - 4 goals scale faster
- Atom reset requirement slightly increased
- Elements 1 and 6 effects boosted
- Elements 5, 6, 13, 58, 59 and 60 costs decreased
- Elements 19, 20, 21, 23, 24, 27, 29, 36, 40, 41, 42 and 50 increased
- Star 1 cost increased (to match Element 50)
- Supernova tree upgrade [chal3] requirement decreased
- Supernova tree upgrades [sn1], [sn2] and [sn3] effects boosted
- Microwave wave 'BH-Condenser Boost' effect reduced
- Dark Matter gain increased in Evo 0
- Charger 6 cost decreased in Evo 4
- 'Break Infinity' Infinity upgrade keeps Constellation upgrades in Evo 4+
- Keep Constellation tiers and perks on Infinity reset
- Notifications update every tick rather than once per second
- Pending Challenge completion tiers are only shown if [qol6] has not been bought
- Improved Supernova scene CSS
- Simplified Supernova reset logic, so any reset will give gains (eg entering a Fermion whilst you have Supernova gain pending)
- Fixed Element Available notification showing when Elements were not yet unlocked
- Fixed a weird extra line on the Radiation unlock image
- Removed the ability to meet Supernova tree requirements on double-click (it was buggy and not fully implemented, and ultimately a little confusing as to what might be happening)

### v0.7.1.6-plus 13

- Slightly moved Taurus upgrade [u7] for better visuals
- Taurus upgrade [o1] and Gemini upgrade [o1] are both permanent upon purchase
- Keep Element 14 in Evo 4+ (down from 5+)
- Quantize amount does not reset on Infinity in Evo 4+
- Challenges subtab is hidden if no challenges are available
- Challenges 13 - 15 do not show their 'completed/max' if automated
- Constellation upgrades show their IDs
- Subtab default logic improved to be set to the first available subtab
- Fixed Charger 9 and 10 notifications showing when they were not yet unlocked
- Fixed Big Rip background persisting through Darkness resets
- Fixed tabs showing even when they have no valid subtabs

<br>

_TODO_

- _Snake Boom_
- _Late Evo 4 Infinity scaling is completely busted_
- _Inf reset on Evo 4 sometimes breaks Atom+Quark gain_
- _Inf reset on Evo 4 only sometimes resets Constellation stuff_

### v0.7.1.6-plus 12

- Muonic Element 93 cost reduced
- Added Taurus upgrade [u7] which boosts Protostar gain based on Stardust
- Stardust gain from Starfruits increased by 5x
- Aries upgrade [u4] cost decreased
- C16 uses Fabric for Corrupted Shard gain in Evo 3+
- Added a boost (^1.5) to Atoms in Big Rip in Evo 3+
- Wormhole unlocks automatically increments for Evo 4 (so you don't have to reset for Atoms when they're already being automated)
- Background now changes when in Big Rip
- Some de-obfuscating(?) of some code, just to make it easier to read and understand

<br>

_To fix at some point:_

- _Charger notification showing when Charger not unlocked_
- _Boom not working in Snake_

### v0.7.1.6-plus 11

- Element 294 boosts Protostar gain
- Challenge 4 effect softcapped slightly earlier
- Challenges 1-4 properly disabled in Evo 2+
- Boosted Quark gain in Evo 2
- Stronger building effect is slightly weaker
- Unobtainable elements (due to the specific resource not being unlocked) are not shown in the 'Next Elements' display
- Fix challenge chosen not being reset on Quantum reset
- Formatting run

### v0.7.1.6-plus 10

- Boosted Challenge 9 and 10 rewards in Evo 3+
- Decoupled Element 291 and 292 effects from Quark gain, so they only affect Protostar gain without massively boosting Quark gain directly
- Boson 'Supernova requirement is decreased based on Gluons' enabled in Evo 2 and 3
- Improved Challenge logic when deciding which challenges should show as 'Disabled'
- Improved Fermion styling to show disabled Fermions
- Fixed Element 291 and 292 effect formulas
- Fixed Elements 291 and 292 not doing anything

### v0.7.1.6-plus 9

- Boosted 'Better Infinity' effect slightly
- Boosted Evo 2+ multiplier to Quantum Foam
- Boost Atom gain in Evo 2+ slightly
- Element 288 cost reduced in Evo 2+
- Supernova tree upgrade [unl3] cost decreased when in Evo 2+
- Supernova tree upgrade [qu_qol8] cost increased
- Improved Challenge styling
- Improved Star Generator styling
- Changed Ouroboros screen CSS to make text more legible
- Challenges now say what they unlock (as opposed to 'more features')
- Increased header bar min-height to prevent jittering when a new notification appears
- Fixed five Theorem slots appearing on first load when only four should be visible
- Improved Ouroboros story strings
- String and grammar pass

### v0.7.1.6-plus 8

- Boosted all Meditation effects
- Boosted Apple Boost effects to Calm Powers and Meditation levels
- Added an 'Unpin requirement' button on Supernova tree
- Fixed Primordium theorems not being spent
- Fixed (very roughly) Theorems updating so fast that they're hard to click
- Fixed loading not working properly (this was my fault)
- Removed April 1st stuff

### v0.7.1.6-plus 7

- Merge with 'unstable' branch

### v0.7.1.6-plus 6

- Improved the Infinity Theorem tab styling
- Protoversal Theorem 'cheaper cosmic strings' and 'entropy scaling', and Einstein Theorem 'glyphic mass' effects boosted
- Minimum dot chance on a Theorem doubled
- Element 222 Theorem level softcap increase doubled
- Added a 'Form ALL Theorems into fragments' button
- Element 255 cost increased
- Element 283 automates Parallel Extruder in addition to its normal effect
- Reduced the corrupted glitching effect on text
- Fixed Ascensions display not setting HTML properly

### v0.7.1.6-plus 5

- Final Star Shard button is available on the sidebar as soon as it can be reset for
- Corrupted Shard button is available on the sidebar as soon as Challenge 16 is available
- Added an Exotic Atoms display to the Muonic Element Layer
- Removed the unused 'Max All Matters' button from The Matters tab
- Increased The Matters columns from 2 to 3
- If a Supernova tree upgrade has a specific requirement (eg 'whilst in U-Quark and without buying BH Condensers') then clicking it whilst selected and not meeting those requirements will activate those requirements for you

### v0.7.1.6-plus 4

- Boosted power of the Muscler building
- Dark Matter second effect starts earlier
- Boosted first Muonic Element upgrade effect
- Element 1, 151, 215, 235, 241, 243 and 270 costs reduced
- Corrupted Star upgrade 2 requirement scaling slightly reduced
- Infinity 'Tree Automation', 'Self Infinity', 'Stop Big Rip Switching', 'Dark Passive', 'Corrupted Construction' and 'Better Infinity' upgrade costs greatly reduced
- Reduce Infinity upgrade preceding row upgrade requirements
- Decreased Rank scaling
- Main upgrade 1x2 effect increased
- Main upgrade 1x2 and 2x3 costs reduced
- Black Hole upgrade 2x1, 2x2 and 2x3 costs reduced
- Atom upgrade 1x3, 2x2, 2x3 and 2x4 costs reduced
- Big Rip upgrade 1x5 cost reduced
- Improved story strings

### v0.7.1.6-plus 3

- Boosted Dark Shadow gain and Dark Ray from Dark Shadow gain
- Added a Quarks display on the Tier 1 Normal Elemental Layer
- Added a Dark Shadows display on Tier 2 and 3 of the Normal Elemental Layers
- Challenge 1, 2, 4 and 8 have lower starting goals
- Challenge 2 reward bonus increased
- First Corruption Charger is cheaper and has a lower unlock requirement
- Element 190, 191, 192, 193, 195, 198 and 203 costs increased

### v0.7.1.6-plus 2

- Removed the 'reset without Supernova' button. Supernovas can now be reset for at any time on the right icon
- Supernova tree upgrade [c] boosted (0.1 -> 1 Neutron Star /s)
- Supernova tree upgrades [unl2], [unl3], [qc1], [qu8], [qu9] and [qu10] are more expensive
- Atom upgrade 2x4 'Stronger effect softcap is 15% weaker' cost slightly reduced
- Big Rip upgrades 1x3, 1x4 and 2x1 costs reduced
- Big Rip upgrade 1x3 'Pre-Quantum Global Speed is raised based on Death Shards (before division)' effect slightly boosted
- Fermion display improvements
- Radiation tab improvements
- String grammar and spelling pass

### v0.7.1.6-plus 1

- Challenge 10 start is slightly lower
- Up, Down, Charm, Muon and Tau fermion requirements are slightly lower
- Reduced Down requirement fermion scaling
- Increased U-Quark and U-Lepton production base
- Decreased Electron fermion softcap penalty
- Supernova tree upgrades [fn1], [fn4] and [fn6] costs reduced
- The 'You have been offline for' message only shows if you have been away for more than 5 minutes
- String grammar pass
