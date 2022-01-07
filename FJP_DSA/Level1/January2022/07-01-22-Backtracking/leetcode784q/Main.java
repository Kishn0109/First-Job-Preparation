package leetcode784q;

import java.util.*;

public class Main {

  public static void main(String[] args) {
    // Write your code here
    ArrayList<String>ans=letterCasePermutation("c");
    System.out.println(ans);
  }
    public static ArrayList<String>letterCasePermutation(String s) {
        if(s.length()<=0){
            ArrayList<String>ba=new ArrayList<>();
            ba.add("");
            return ba;
        }
        char ch=s.charAt(0);
        String ros=s.substring(1);
        ArrayList<String>rearray= letterCasePermutation(ros);
        ArrayList<String>myArrayList=new ArrayList<>();
        if(ch>='a' && ch<='z'){
            for(String val : rearray){
                    myArrayList.add(ch+val);
            }
            char big=(char)('A'+(ch-'a'));
            for(String val : rearray){
                myArrayList.add(big+val);
            }
        }else {
            for(String val : rearray){
                    myArrayList.add(ch+val);
            }

        }
        return myArrayList;
    }
}
