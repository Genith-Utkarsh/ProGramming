#include<iostream>
using namespace std;
int main(){
    // square of num by taking input from the user
    int num;
    cout<<"Enter a number : ";
    cin>>num;

    int square = num * num;
    cout<<"Square of "<<num<<" is = "<<square<<endl;


    cout<<endl;

    // area of rectangle

    float a, b, area;

    cout<<"Enter value of a : ";
    cin>>a;
    cout<<"Enter value of b : ";
    cin>>b;

    area =  a * b ;

    cout<<"Area of reactangle is = "<<area;
}