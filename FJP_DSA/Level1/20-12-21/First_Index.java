import java.io.*;
import java.util.*;
public class Main {
    public static void main(String[] args) throws Exception {
        Scanner scn =new Scanner(System.in);
        int n=scn.nextInt();
        int [] arr =new int[n];
        for(int i=0;i<arr.length;i++){
           arr[i]=scn.nextInt(); 
        }
        int m=scn.nextInt();
        System.out.print(firstIndex(arr,0,m));
    }
    public static int firstIndex(int[] arr, int idx, int x){
        // System.out.print(x);
        if(idx==arr.length-1){
            return -1;
        }
        if(arr[idx]==x){
            return idx;
        }
        return firstIndex(arr,idx+1,x);
    }

}