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

   public static void solve(ArrayList<Edge>[] graph) {
      PriorityQueue<Edge> pq = new PriorityQueue<>((a,b)->{
         return a.wt-b.wt;
      });
      //initailise 
      pq.add(new Edge(0, 0, 0));

      //bfs 

      boolean [] vis =new boolean [graph.length];
      int ans = 0;
      while (pq.size() != 0) {
         int size = pq.size();
         while(size-->0){
            //remove
            Edge rem = pq.remove(); //0 0 0 0 1 0 2 

            int parant = rem.nbr;
            int wt = rem.wt;
            if(!vis[parant]){
               //mark
               vis[parant] = true;
               //work
   
               System.out.println("["+rem.src + "-" + rem.nbr + "@" + rem.wt+"]"); //[1-0@10]
               ans += wt;
   
               //add
               for (Edge e : graph[parant]) {
                  if (!vis[e.nbr]) {
                     pq.add(e);
                  }
               }
            }




         }
      }

      System.out.println(ans);
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

      // write your code here

      solve(graph);
   }

}