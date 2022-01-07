package TargetSumSubset;
import java.util.*;
public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int [] arr=new int [n];
        for(int i=0;i<arr.length;i++){
            arr[i]=scn.nextInt();
        }
        int target=scn.nextInt();
        printTargetSumSubsets(arr,0,"",0,target);

    }

    // set is the subset
    // sos is sum of subset
    // tar is target
    public static void printTargetSumSubsets(int[] arr, int idx, String set, int sos, int target) {
        if(idx==arr.length){
            if(sos==target){
                System.out.println(set+".");
            }
            return;
        }
        if(target>=sos){
            printTargetSumSubsets(arr,idx+1,set+arr[idx]+", ",sos+arr[idx],target);
        }
        printTargetSumSubsets(arr,idx+1,set,sos,target);

    }

}