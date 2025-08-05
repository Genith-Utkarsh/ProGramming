#include<iostream>
using namespace std;

int calcPower(int num, int power){
    if(power == 0) return 1;
    return num * calcPower(num, power - 1); 
}

int main(){
    int num, power;
    cout<<"Enter number : ";
    cin>> num ;
    cout<<"Enter power : ";
    cin>> power;

    int result = calcPower(num, power);
    cout<<"Result is = "<< result;
}