import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int m = scn.nextInt();
        int cost = scn.nextInt();
        char[][] cloth = new char[n][m];
        for(int i = 0; i < n; i ++) {
            for(int j = 0; j < m; j ++) {
                cloth[i][j] = scn.next().charAt(0);
            }
        } 
        List<Integer> ans = getPrice(cloth, cost);
        Collections.sort(ans);
        System.out.println(ans);
        scn.close();
    }   

    public static int [][] dir={{0,1},{1,0},{-1,0},{0,-1}};
    public static int getcount(char [][] grid, int row,int col,int count){
        grid[row][col]='w';
        int mycount = 1;
        for (int[] d : dir) {
            int r = row + d[0];
            int c = col + d[1];

            if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] != 'w') {
                mycount += getcount(grid, r, c, count + 1);
            }
        }
        
        return mycount;

    }

    public static List<Integer> getPrice(char[][] grid, int cost) {
        //your code goes here
        ArrayList<Integer> ans = new ArrayList<Integer>();
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j]!='w'){
                    int count =0;
                    int recc=getcount(grid, i, j, count);
                    System.out.println(recc);
                    ans.add(recc*cost);
                }
            }
        }

        return ans;
        
    } 
}