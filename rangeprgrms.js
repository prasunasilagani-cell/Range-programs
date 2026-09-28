
//1.sum of prime numbers
sum=0
for(j=20;j<=150;j++){
n=j
count=0
for(i=1;i<=10;i++){
  if(n%i==0){
    count+=1
  }  
}
if(count==2){
    sum+=j 
}
}
console.log(sum);
console.log();


//2.Average of perfect numbers
countn=0
sumn=0
for(j=1;j<=1000;j++){
n=j
count=0
sum=0
for(i=1;i<j;i++){
    if(n%i==0){
       sum+=i
       count+=1
    }
}
if(sum==n){
    countn+=1
    sumn+=j
}
}
console.log(sum/countn);
console.log();


//3.leap year
for(j=1900;j<=2026;j++){
n=j
if(n%4==0){
     if(n%100==0){
          if(n%400==0){
            console.log(j);
          }
          else{
          }
     }
     else{
        console.log(j);
     }
}
else{
}
}
console.log();


//4.Palindrome numbers
for(j=100;j<=500;j++){
n=j
temp=n
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
if(rev==temp){
    console.log(j);
}
}
console.log();

//5.Digit sum=10
for(j=120;j<=850;j++){
n=j
sum=0
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    sum+=digit
    n=parseInt(n/10)
}
if(sum==10){
console.log(j);
}
}
console.log();


//6.Pairs with target sum 30
for(a=1;a<=50;a++){
    for(b=a+1;b<=50;b++){
        if(a+b==30){
            console.log(a,b);
            
        }
    }
}
console.log();


//7.Exactly 3 factors
for(j=10;j<=300;j++){
n=j
count=0
for(i=1;i<=j;i++){
    if(n%i==0){
        count+=1
    }
}
if(count==3){
console.log(n);
}
}
console.log();


//8.Prime factors
for(k=20;k<=50;k++){
    console.log("The factors of "+k); 
n=k
for(i=1;i<=k;i++){
    if(n%i==0){
        count=0
        for(j=1;j<=i;j++){
            if(i%j==0){
                count+=1    
            }   
        } 
        if(count==2){
            console.log(i); 
        } 
    }
}
}
console.log();

//9.Armstrong Number
for(j=100;j<=999;j++){
n=j
temp=n
sum=0
while(n>0){
    digit=n%10
    sum+=digit**3
    n=parseInt(n/10)
}
if(sum==j){
console.log(j);
}
}
console.log();


//10.Maximum factors
max_fact=0
max_num=0
for(i=50;i<=150;i++){
  n=i
  count=0
  for(j=1;j<=i;j++){
    if(i%j==0){
      count+=1  
    }
  if(max_fact<count){
    max_fact=count
    max_num=n
  }  
  }
}
console.log(max_num);
