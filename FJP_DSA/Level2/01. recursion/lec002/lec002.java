class lec002 {
    public static int permutation(int target, int[] coins, String asf) {
        if (target == 0) {
            System.out.println(asf);
            return 1;
        }
        int ans = 0;
        for (int i = 0; i < coins.length; i++) {
            if (target - coins[i] >= 0) {
                ans += permutation(target - coins[i], coins, asf + coins[i]);
            }
        }
        return ans;
    }
    
    public static int coincombinationinfinite(int target, int[] coins, String asf,int idx) {
        if (target == 0) {
            System.out.println(asf);
            return 1;
        }
        int ans = 0;
        for (int i = idx; i < coins.length; i++) {
            if (target - coins[i] >= 0) {
                ans += coincombinationinfinite(target - coins[i], coins, asf + coins[i],i);
            }
        }
        return ans;
    }
    
    public static int permutationSinglechoice(int target, int[] coins, String asf, int idx,boolean [] vis) {
        if (target == 0) {
            System.out.println(asf);
            return 1;
        }
        int ans = 0;
        for (int i = 0; i < coins.length; i++) {
            if (target - coins[i] >= 0 && !vis[i]) {
                vis[i] = true;
                ans += permutationSinglechoice(target - coins[i], coins, asf + coins[i], i, vis);
                vis[i] = false;
            }
        }
        return ans;
    }

 public static void main(String[] args) {
     int target=15;
     int [] coins={2,3,5,7};
     boolean [] vis=new boolean[coins.length];
     int ans = permutation(target, coins, "");
     int combinations= permutationSinglechoice(target, coins, "", 0,vis);
     System.out.println("combinations "+combinations+" "+ ans);
 }
}