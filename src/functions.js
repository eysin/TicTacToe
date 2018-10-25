function winCheck(grid)
{
    
    for(var i = 0; i < 3;i++)
    {
        //horizontal check
        if(grid[i][0] == 1 && grid[i][1] == 1 && grid[i][2] == 1)
            return 1;
        if(grid[i][0] == 2 && grid[i][1] == 2 && grid[i][2] == 2)
            return 2;
        //vertical check
        if(grid[0][i] == 1 && grid[1][i] == 1 && grid[2][i] == 1)
            return 1;
        if(grid[0][i] == 2 && grid[1][i] == 2 && grid[2][i] == 2)
            return 2;
    }
    //diagonal check
    if(grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == 1)
        return 1;
    if(grid[0][0] == 2 && grid[1][1] == 2 && grid[2][2] == 2)
        return 2;
    //2nd diagonal check
    if(grid[0][2] == 1 && grid[1][1] == 1 && grid[2][0] == 1)
        return 1;
    if(grid[0][2] == 2 && grid[1][1] == 2 && grid[2][0] == 2)
        return 2;
    //if none are true, ret 0
    return 0;
} 
module.exports = winCheck;