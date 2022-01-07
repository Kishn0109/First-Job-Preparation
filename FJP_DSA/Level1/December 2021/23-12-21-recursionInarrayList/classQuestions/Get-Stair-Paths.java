import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        ArrayList<String>ans=getStairPaths(n);
        System.out.println(ans);
    }

    public static ArrayList<String> getStairPaths(int n) {
        if(n==0){
            ArrayList<String>ba=new ArrayList<>();
            ba.add("");
            return ba;
        }
        ArrayList<String>myarr=new ArrayList<String>();
        for(int i=1;i<=3;i++){
            if(n-i>=0){
                ArrayList<String>recarr=getStairPaths(n-i);
                for(String val:recarr){
                    myarr.add(i+""+val);
                }
            }
        }
        return myarr;
    }

}