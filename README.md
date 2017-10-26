# AutoTinder
Automatic swiping on tinder with a basic strategy.
Login at tinder.com and run this code in the developer console (F12).

Variables
1. swipeIntervalMin (default at 2000ms)
2. swipeIntervalMax (default at 4000ms)
3. counter (default at 0)
4. ageThreshold (default at 27)


Rules
1. Swipe right (delayed between 2-4s) until counter > 10
2. If swipee age is greater than or equal to ageThreshold as well, swipe left and reset counter to 0
3. Repeat #1
4. clearInterval(run) to stop
