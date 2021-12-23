import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String str=scn.nextLine();
        String [] arr={".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"};
        printKPC(str,"",arr);
    }

    public static void printKPC(String str, String asf,String [] arr) {
        if(str.length()==0){
            System.out.println(asf);
            return;
        }
        int fc=(int)(str.charAt(0)-'0');
        String ByFc=arr[fc]; //tu
        String ros=str.substring(1); //vwx
        // System.out.println(ros.length());
        for(int j=0;j<ByFc.length();j++){
            printKPC(ros,asf+ByFc.charAt(j),arr);
        }

        
    }

}