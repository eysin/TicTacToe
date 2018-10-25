//checks if winner is found, if so, return player id (1 for x, 2 for o)
//else returns 0
function winCheck(grid)
{
    for(var j = 1; j < 3;j++)
    {
        for(var i = 0; i < 3;i++)
        {
            //horizontal check
            if(grid[i][0] == j && grid[i][1] == j && grid[i][2] == j)
                return j;
            //vertical check
            if(grid[0][i] == j && grid[1][i] == j && grid[2][i] == j)
                return j;
        }
    //diagonal check
    if(grid[0][0] == j && grid[1][1] == j && grid[2][2] == j)
        return j;
    //2nd diagonal check
    if(grid[0][2] == j && grid[1][1] == j && grid[2][0] == j)
        return j;
    }
    //if none are true, ret 0
    return 0;
}
module.exports = winCheck;