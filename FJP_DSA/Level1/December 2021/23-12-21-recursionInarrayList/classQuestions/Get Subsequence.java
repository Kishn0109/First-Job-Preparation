import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String s=scn.nextLine();
        ArrayList<String>ans= gss(s);
        System.out.println(ans);
    }

    public static ArrayList<String> gss(String str) {
        if(str.length()==0){
            ArrayList<String>basearr=new ArrayList<>();
            basearr.add("");
            return basearr;
        }
        char ch=str.charAt(0);
        String ros=str.substring(1);
        ArrayList<String>recar= gss(ros);
        ArrayList<String>myarr=new ArrayList<String>(recar);
        for(String s:recar){
            myarr.add(ch+s);
        }
        return myarr;
    }

}