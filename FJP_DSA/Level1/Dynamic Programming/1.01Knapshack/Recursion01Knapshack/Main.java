/**
 * Main
 */
import java.util.*;

public class Main {
    
    public static int RacZeroOne(int[] wt, int[] val, int weight, int capacity,int n) {
        if (n == 0 || capacity == 0) {
            return 0;
        }
        int notadd = RacZeroOne(wt, val, weight - 1, capacity, n - 1);
        //case 1
        if (wt[n] <= capacity) {
            return Math.max(val[n] + RacZeroOne(wt, val, weight - 1, capacity - wt[n], n - 1), notadd );
        }
        // case 2
        return notadd;
    }
    public static void main(String[] args){
        // System.out.println("karan");
        int[] wt = { 1, 3, 4, 5 };
        int[] val = { 1, 4, 5, 7 };
        int cap = 7;
        int ans = RacZeroOne(wt, val, 0, cap, wt.length - 1);
        System.out.println(ans);
    }
    
}