# AutoTinder
Automatic swiping on tinder with a basic strategy.
Login at tinder.com and run this code in the developer console (F12).

Variables
1. counter (default at 0)
2. ageThreshold (default at 27)

Rules
1. Swipe right until counter > 10
2. If swipee age is greater than or equal to ageThreshold as well, swipe left and reset counter to 0
3. Repeat #1
