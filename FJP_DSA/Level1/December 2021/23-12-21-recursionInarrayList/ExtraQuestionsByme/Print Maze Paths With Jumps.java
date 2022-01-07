import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
		Scanner scn=new Scanner(System.in);
		int dr=scn.nextInt();
		int dc=scn.nextInt();
		printMazePaths(0,0,dr,dc,"");
    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static void printMazePaths(int sr, int sc, int dr, int dc, String psf) {
		//0 0  3 3
		if(sr==dr-1 && sc==dc-1){
			System.out.println(psf);
			return;
		}
		int n=dr; //3
		int m=dc; //3
		// System.out.println(sr+" "+sc);
		for(int hj=1;hj<m;hj++){
			if(sc+hj<m){
				printMazePaths(sr,sc+hj,dr,dc,psf+"h"+hj); //0 1,3,3,h1
			}
		}
		for(int vj=1;vj<n;vj++){ //vj1
			if(vj+sr<n){
				printMazePaths(sr+vj,sc,dr,dc,psf+"v"+vj); // 1,0,3,3,v1
			}
		}
		for(int dj=1;dj<n && dj<m;dj++){ //dj1
			// System.out.println(dj);
			if(dj+sr<n && dj+sc<m){
				 printMazePaths(sr+dj,sc+dj,dr,dc,psf+"d"+dj); // 1,1,3,3,d1
			}
		}        
    }

}