import java.io.*;
import java.util.*;

public class Main {
    static class Edge {
        int src;
        int nbr;
        int wt;

        Edge(int src, int nbr, int wt) {
            this.src = src;
            this.nbr = nbr;
            this.wt = wt;
        }
    }

    public static class pair {
        int vrtx;
        int wt;

        pair(int vrts, int wt) {
            this.vrtx = vrts;
            this.wt = wt;
        }
    }

   public static void  solve(ArrayList<Edge>[]graph, int src){
       int[] vis = new int[graph.length];
       Arrays.fill(vis, Integer.MAX_VALUE);
       //initializing
       PriorityQueue<pair> pq = new PriorityQueue<>((a, b) -> {
           return a.wt - b.wt;
       });
        pq.add(new pair(src,0));
    //   System.out.println(graph[src].get(0).wt);
        while(pq.size()!=0){
            int size=pq.size();
            while(size-->0){
              //remove
              pair rem=pq.remove(); //vertex wt
              int vrtx=rem.vrtx;
              int wt=rem.wt;
              
              //mark
              if(vis[vrtx]==2147483647){
                    vis[vrtx]=wt;
                    //work
                    //add
                  for(Edge e:graph[vrtx]){ //src nbr wt
                      int nbr=e.nbr;
                      int mywt=e.wt;
                      if(vis[nbr]==Integer.MAX_VALUE){
                         pq.add(new pair(nbr,wt+mywt)); 
                      }
                  }
              }
              
            }
        }
        
        for(int v:vis){
            System.out.println(v);
        }

   }

   public static void main(String[] args) throws Exception {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      int vtces = Integer.parseInt(br.readLine());
      ArrayList<Edge>[] graph = new ArrayList[vtces];
      for (int i = 0; i < vtces; i++) {
         graph[i] = new ArrayList<>();
      }

      int edges = Integer.parseInt(br.readLine());
      for (int i = 0; i < edges; i++) {
         String[] parts = br.readLine().split(" ");
         int v1 = Integer.parseInt(parts[0]);
         int v2 = Integer.parseInt(parts[1]);
         int wt = Integer.parseInt(parts[2]);
         graph[v1].add(new Edge(v1, v2, wt));
         graph[v2].add(new Edge(v2, v1, wt));
      }

      int src = Integer.parseInt(br.readLine());
      // write your code here

      solve(graph, src);
      
   }
}