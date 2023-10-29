// this is a Conway's game of life game

// structure of grid
let grid = [["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"],
["o", "o", "o", "o", "o", "o", "o", "o"]]

console.log(grid)
console.log(grid.length)

// set grid initially
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        if ((Math.random() * 4) > 2) {
            grid[i][j] = "x"
        }
    }
}

console.log(grid)

// intermediary grid
let intermediaryGrid = [[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]]

// set intermediary grid initially
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        if ((Math.random * 4) > 1) {
            grid[i][j] = "x"
        }
    }
}

// check which cells should live or die in the next generation
for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid.length; j++) {
        let aliveCount = 0
        // if i = j = 0
        if (i == 0 && j == 0) {
            if (grid[i][j + 1] == "o") aliveCount += 1
            if (grid[i + 1][j] == "o") aliveCount += 1
            if (grid[i + 1][j + 1] == "o") aliveCount += 1
        }
        // if i = 0 and 0 < j < grid.length - 1
        else if (i == 0 && j > 0 && j < grid.length - 1) {
            if (grid[i][j - 1] == "o") aliveCount += 1
            if (grid[i][j + 1] == "o") aliveCount += 1
            if (grid[i + 1][j - 1] == "o") aliveCount += 1
            if (grid[i + 1][j] == "o") aliveCount += 1
            if (grid[i + 1][j + 1] == "o") aliveCount += 1
        }
        // if i = 0 and j = grid.length - 1
        else if (i == 0 && j == grid.length - 1) {
            if (grid[i][j - 1] == "o") aliveCount += 1
            if (grid[i + 1][j - 1] == "o") aliveCount += 1
            if (grid[i + 1][j] == "o") aliveCount += 1

        }
        // if 0 < i < grid.length - 1 and j = 0
        else if (i > 0 && i < grid.length - 1 && j == 0) {
            if (grid[i - 1][j + 1] == "o") aliveCount += 1
            if (grid[i - 1][j - 1] == "o") aliveCount += 1
            if (grid[i][j + 1] == "o") aliveCount += 1
            if (grid[i + 1][j] == "o") aliveCount += 1
            if (grid[i + 1][j + 1] == "o") aliveCount += 1
        }
        // if 0 < i < grid.length - 1 and j = grid.length - 1
        else if (i > 0 && i < grid.length - 1 && j == grid.length - 1) {
            if (grid[i - 1][j] == "o") aliveCount += 1
            if (grid[i - 1][j + 1] == "o") aliveCount += 1
            if (grid[i][j - 1] == "o") aliveCount += 1
            if (grid[i + 1][j - 1] == "o") aliveCount += 1
            if (grid[i + 1][j] == "o") aliveCount += 1
        }
        // if i = grid.length - 1 and j = 0
        else if (i == grid.length - 1 && j == 0) {
            if (grid[i - 1][j + 1] == "o") aliveCount += 1
            if (grid[i - 1][j - 1] == "o") aliveCount += 1
            if (grid[i][j + 1] == "o") aliveCount += 1
        }
        // if i = grid.length - 1 and 0 < j < grid.length - 1
        else if (i == grid.length - 1 && j > 0 && j < grid.length - 1) {
            if (grid[i - 1][j] == "o") aliveCount += 1
            if (grid[i - 1][j + 1] == "o") aliveCount += 1
            if (grid[i - 1][j - 1] == "o") aliveCount += 1
            if (grid[i][j - 1] == "o") aliveCount += 1
            if (grid[i][j + 1] == "o") aliveCount += 1
        }
        // if i = grid.length - 1 and j = grid.length - 1
        else if (i == grid.length - 1 && j == grid.length - 1) {
            if (grid[i - 1][j] == "o") aliveCount += 1
            if (grid[i - 1][j + 1] == "o") aliveCount += 1
            if (grid[i][j - 1] == "o") aliveCount += 1
        }
        // else
        else {
            if (grid[i - 1][j] == "o") aliveCount += 1
            if (grid[i - 1][j + 1] == "o") aliveCount += 1
            if (grid[i - 1][j - 1] == "o") aliveCount += 1
            if (grid[i][j - 1] == "o") aliveCount += 1
            if (grid[i][j + 1] == "o") aliveCount += 1
            if (grid[i + 1][j - 1] == "o") aliveCount += 1
            if (grid[i + 1][j] == "o") aliveCount += 1
            if (grid[i + 1][j + 1] == "o") aliveCount += 1
        }
        intermediaryGrid[i][j] = aliveCount
    }
}

console.log(intermediaryGrid)

// populate next generation of grid
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] == "o" && intermediaryGrid[i][j] < 2) {
            grid[i][j] = "x"
        }
        else if (grid[i][j] == "o" && intermediaryGrid[i][j] > 3) {
            grid[i][j] = "x"
        }
        else if (grid[i][j] == "x" && intermediaryGrid[i][j] == 3)
            grid[i][j] = "o"
    }
}

console.log(grid)