public class ReverseInteger {
    public static void main(String[] args) {
        int num = 12345;
        int reversedNum = reverseInteger(num);
        System.out.println("Original number: " + num);
        System.out.println("Reversed number: " + reversedNum);
    }

    public static int reverseInteger(int num) {
        int reversedNum = 0;

        while (num != 0) {
            int digit = num % 10;       // Get the last digit of the number
            reversedNum = reversedNum * 10 + digit; // Append it to the reversed number
            num /= 10;                 // Remove the last digit from the original number
        }

        return reversedNum;
    }
}
