public class lec001my {

    public static boolean inRange(int i, int j, int[][] arr) {
        int n = arr.length;
        int m = arr[0].length;

        if (i < 0 || i >= n || j < 0 || j >= m)
            return false;
        return true;
    }

    public static boolean inRange(int i, int j, int n, int m) {
        if (i < 0 || i >= n || j < 0 || j >= m)
            return false;
        return true;
    }

    public static int mazePath_01(int sr, int sc, int dr, int dc, int[][] dir, String[] dirN, String asf) {
        if (sr == dr && sc == dc) {
            System.out.println(asf);
            return 1;
        }

        int count = 0;
        for (int d = 0; d < dir.length; d++) {
            int r = sr + dir[d][0];
            int c = sc + dir[d][1];

            if (inRange(r, c, dr + 1, dc + 1)) {
                count += mazePath_01(r, c, dr, dc, dir, dirN, asf + dirN[d]);
            }
        }
        return count;

    }

    // With Jumps: Move
    public static int mazePath_02(int sr, int sc, int dr, int dc, int[][] dir, String[] dirN, String asf) {
        if (sr == dr && sc == dc) {
            System.out.println(asf);
            return 1;
        }

        int count = 0;
        for (int d = 0; d < dir.length; d++) {
            for (int move = 1; move <= Math.max(dr, dc); move++) {
                int r = sr + dir[d][0] * move;
                int c = sc + dir[d][1] * move;

                if (inRange(r, c, dr + 1, dc + 1)) {
                    count += mazePath_02(r, c, dr, dc, dir, dirN, asf + dirN[d] + move);
                }
            }

        }
        return count;

    }
    // ==================================Home-Work=====================================================================

    // =====================================1 minimum path flood fill
    public static class pair {
        int cunt;
        String ans;

        pair() {
        }

        pair(int cnt, String ans) {
            this.ans = ans;
            this.cunt = cnt;
        }
    }
    public static pair  minFloodpath(int sr, int sc, int dr, int dc,int[][] dir, String[] dirN,int diridx) {
        if (sr == dr && sc == dc) {
            return new pair(1, "");
        }
        int min = Integer.MAX_VALUE;
        String ans = dirN[diridx];
        for (int i = 0; i < dir.length;i++) {
            int r =sr+ dir[i][0];
            int c = sc + dir[i][1];

            if (inRange(r, c, dr + 1, dc + 1)) {
                pair rec= minFloodpath(r, c, dr, dc, dir, dirN, i );
                if (rec.cunt < min) {
                    min = rec.cunt;
                    ans = rec.ans;
                }
            }
        }
        return new pair(min+1,ans+dirN[diridx]);
    }

    // with threedimension==============================>

    public static void mazePath() {
        int n = 3;
        int m = 4;
        String[] dirN = { "H", "V", "D" };
        int[][] dir = { { 0, 1 }, { 1, 0 }, { 1, 1 } };

        // int ans = mazePath_01(0,0,n-1,m-1,dir, dirN, "");
        // int ans = mazePath_02(0, 0, n - 1, m - 1, dir, dirN, "");
        pair ans = minFloodpath(0, 0, n - 1, m - 1, dir, dirN,0);
        System.out.println(ans.ans+" "+ans.cunt);
    }

    // ===============================FLOOD
    public static int solvefloodfill(int sr, int sc, int[][] dir, int[][] maze, int count) {
        if (sr == maze.length - 1 && sc == maze[0].length - 1) {
            return 1;
        }
        // display(maze);
        maze[sr][sc] = 1;
        int mycount = 0;
        for (int[] d : dir) {
            int row = sr + d[0];
            int col = sc + d[1];
            if (inRange(row, col, maze) && maze[row][col] == 0) {
                mycount += solvefloodfill(row, col, dir, maze, count + 1);
            }
        }
        maze[sr][sc] = 0;
        return mycount;
    }

    public static void display(int[][] maze) {
        for (int i = 0; i < maze.length; i++) {
            for (int j = 0; j < maze[0].length; j++) {
                System.out.print(maze[i][j] + "\t");
            }
            System.out.println();
        }
    }

    public static void floodfill() {
        int n = 3;
        int m = 3;

        int[][] maze = new int[n][m];
        int[][] dir = { { -1, -1 }, { -1, 0 }, { -1, 1 }, { 0, 1 }, { 1, 1 }, { 1, 0 }, { 1, -1 }, { 0, -1 } };

        // int[][] dir = { { -2, 1 }, { -1, 2 }, { 1, 2 }, { 2, 1 }, { 2, -1 }, { 1, -2
        // }, { -1, -2 }, { -2, -1 } };
        int ans = solvefloodfill(0, 0, dir, maze, 1);
        System.out.println(ans);
    }

    // FILL=======================================================

    // Leetcode 62: Unique Path=====================================

    // LeetCode 63 ========= UNIQUE PATHS 2 =============================

    public static void main(String[] args) {
        // mazePath();
        mazePath();
        // floodfill();
    }
}