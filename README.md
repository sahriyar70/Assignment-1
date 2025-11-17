# Assignment-1

{
    1-What is the use of the keyof keyword in TypeScript? Provide an example:

Ans:
keyof TypeScript-এর একটি খুবই গুরুত্বপূর্ণ keyword, যা কোনো object type-এর সব key-এর union type তৈরি করে 
keyof = একটি object-এর key গুলোকে type হিসেবে পাওয়া 
keyof কোনো type-এর property নামগুলোকে string literal union হিসেবে বের করে
}

{
 2- Explain the difference between any, unknown, and never types in TypeScript
  Ans;

 **any : 
  এটি TypeScript কে JavaScript-এর মতো করে দেয় , যেকোনো মান রাখা যায়
যেকোনো অপারেশন চালানো যায়,TypeScript কোনো ভুল দেখায় না


**unknown :
unknown মানে:ডাটার টাইপ আমি জানি না, তাই ব্যবহার করার আগে টাইপ-চেক করতে হবে।
অর্থাৎ আমি যতক্ষণ না যাচাই করতেছি, ততক্ষণ অপারেশন চালাতে পারব না

**never;
    never – এমন কিছু যা কখনো ঘটে না,এমন টাইপ যেখানে মান থাকার সম্ভাবনা শূন্।কোনও ফাংশন কখনো রিটার্ন করে না।

}

