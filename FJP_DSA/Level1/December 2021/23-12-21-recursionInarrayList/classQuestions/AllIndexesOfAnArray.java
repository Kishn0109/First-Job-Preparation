import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        int x = Integer.parseInt(br.readLine());
        int[] iarr = allIndices(arr, x, 0, 0);

        if(iarr.length == 0){
            System.out.println();
            return;
        }

        for(int i = 0; i < iarr.length; i++){
            System.out.println(iarr[i]);
        }
    }

    public static int[] allIndices(int[] arr, int x, int idx, int cnt) {
        // write ur code here
        if(idx==arr.length){
            int [] barr=new int [cnt];
            return barr;
        }
        if(arr[idx]==x){
            cnt++;
        }
        int [] ansarr=allIndices(arr,x,idx+1,cnt);
        if(arr[idx]==x){
            ansarr[cnt-1]=idx;
        }
        return ansarr;

    }

}