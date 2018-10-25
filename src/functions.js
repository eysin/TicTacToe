function winCheck(grid)
{
    if(grid[0][0] == 1 && grid[0][1] == 1 && grid[0][2] == 1)
        return 1;
    if(grid[0][0] == 2 && grid[0][1] == 2 && grid[0][2] == 2)
        return 2;
    return 0;
} 
module.exports = winCheck;