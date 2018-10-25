function winCheck(grid)
{
    
    for(var i = 0; i < 3;i++)
    {
        //horizontal check
        if(grid[i][0] == 1 && grid[i][1] == 1 && grid[i][2] == 1)
            return 1;
        if(grid[i][0] == 2 && grid[i][1] == 2 && grid[i][2] == 2)
            return 2;
    }
    return 0;
} 
module.exports = winCheck;