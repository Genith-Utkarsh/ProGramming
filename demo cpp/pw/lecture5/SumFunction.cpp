#include<iostream>
using namespace std;

int sum(int a , int b){
    return a + b;
}

int main(){
    int a , b ;
    cout<<"Ente first number : "<< endl;
    cin>>a;
    cout<<"Enter second number : "<< endl;
    cin>> b;

    cout<<"Sum of numbers  : " << sum(a, b);
}