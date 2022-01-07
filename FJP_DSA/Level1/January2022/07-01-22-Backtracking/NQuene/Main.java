package NQuene;

import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int [][] maze=new int [n][n];

        // for(int i=0;i<maze.length;i++){
        //     for(int j=0;j<maze[0].length;j++){
        //         System.out.print(maze[i][j]);
        //     }
        //     System.out.println();
        // }
        // maze[1][2]=1;
        // System.out.println(queneissafe(maze,2,1));
        printNQueens(maze,"",0);
    }
    public static boolean queneissafe(int[][] chess,int row,int col){
        //check for col
        for(int i=row;i>=0;i--){
            if(chess[i][col]==1){
                return false;
            }
        }
        for(int i=row,j=col ; i>=0 && j>=0 ; i--,j--){
            if(chess[i][j]==1){
                return false;
            }
        }
        for(int i=row,j=col;i>=0 && j<chess[0].length;i--,j++){
            if(chess[i][j]==1){
                return false;
            }
        }
        return true;

    }
    public static void printNQueens(int[][] chess, String qsf, int row) {
       if(row==chess.length){
           System.out.println(qsf+".");
           return;
       }
        // System.out.println(row);
       for(int i=0;i<chess[0].length;i++){
           if(queneissafe(chess,row,i)==true){
                chess[row][i]=1;
                printNQueens(chess,qsf+row+"-"+i+", ",row+1);
                chess[row][i]=0;
           }
       } 
    }
}