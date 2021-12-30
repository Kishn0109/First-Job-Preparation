import java.io.*;
import java.util.*;

public class king {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int [][] arr=new int [n][n];
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                arr[i][j]=0;
            }
        }
        int row=scn.nextInt();
        int col=scn.nextInt();
        printKnightsTour(arr,4,2,1);
    }

    public static void printKnightsTour(int[][] chess, int r, int c, int upcomingMove) {
        if(upcomingMove==(chess.length*chess.length)){
            displayBoard(chess); 
            System.out.println();
            return; 
        }
        if(r<0 && c<0 && r>=chess.length && c>=chess.length && chess[r][c]!=0  ){
            return;
        }
        chess[r][c]=upcomingMove;
        // System.out.println(upcomingMove+" "+r+" "+c);
        // displayBoard()
        if(r>=2 && c>=1){
            printKnightsTour(chess,r-2,c-1,upcomingMove+1);
        }

        if(r>=2 && c>=0 && c<chess.length-1){
            printKnightsTour(chess,r-2,c+1,upcomingMove+1); 
        }

        if(c>=2 && r>=1 && r<chess.length-1){    
            printKnightsTour(chess,r+1,c-2,upcomingMove+1);
        }

        if(r>0 && c>=2 && c<=chess.length-1){
            printKnightsTour(chess,r-1,c-2,upcomingMove+1);
        }
        if(r<chess.length-2 && c>=1){
            printKnightsTour(chess,r+2,c-1,upcomingMove+1);
        }
        if(r<chess.length-2 && c<chess.length-1){
            printKnightsTour(chess,r+2,c+1,upcomingMove+1);
        }
        if(r>=1 && c<chess.length-2){
            // System.out.print("chala");
            printKnightsTour(chess,r-1,c+2,upcomingMove+1);
        }
        if(r<chess.length-1 && c<chess.length-2){
            // System.out.print("chala");
            printKnightsTour(chess,r+1,c+2,upcomingMove+1);
        }
        chess[r][c]=0;
    }

    public static void displayBoard(int[][] chess){
        for(int i = 0; i < chess.length; i++){
            for(int j = 0; j < chess[0].length; j++){
                System.out.print(chess[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println();
    }
}