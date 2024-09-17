import java.util.Scanner; 

public class SentinelValue {
  
Scanner input = new Scanner(System.in);
		//5! = 5 x 4 x 3 x 2 x 1 = 120
		//3! = 3 x 2 x 1 = 6
		//8! = 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 40,320
		
	    System.out.print("Would you like to practice your factorials? (Answer 'true' or 'false')");        
	   
	   boolean choice = input.nextBoolean();          
	   
	   while (choice) {            	
	   System.out.print("Please enter a number to begin practicing."); 
	   int num = input.nextInt();
	   	 		
	    System.out.print("What does " + num + "!" + " equal?"); 
	    int fact=1;
		   for(int i=1; i<=num; i++){
		       fact=fact*i;
		   }  
	    
	    		
	    		int ans = input.nextInt();               
	    		while (ans != fact) {                  
	    			System.out.println("Try again!"); 
	    			
	    			System.out.print("What does " + num + "!" + " equal?");  
	    			
	    			ans = input.nextInt();               
	    			}                
	    		System.out.println("Correct!");        
	    		} 
	   		while (choice) {
	    	System.out.print("Would you like to practice your factorials? (Answer 'true' or 'false')");   
	    	
	    	choice = input.nextBoolean();       
	    	}    
	    }  
}

	



