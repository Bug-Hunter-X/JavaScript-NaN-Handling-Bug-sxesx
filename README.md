# JavaScript NaN Handling Bug

This repository demonstrates a subtle bug in JavaScript related to the handling of NaN (Not a Number).

## The Bug

The `foo` function aims to handle various input types gracefully: 
- null
- undefined
- non-numbers
However, it fails to explicitly check for NaN values.  When NaN is passed, the function returns NaN without any special handling which may not be desirable behavior in all cases. 

## The Solution

The solution modifies the function to explicitly check for NaN using `isNaN()` and handles it appropriately (returning a specific value or throwing an error depending on the desired behavior). 

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the outputs and the difference in how NaN is handled.