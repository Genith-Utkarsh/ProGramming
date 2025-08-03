#include<iostream>
using namespace std;

void swap(int a , int b){
    int temp = a;
    a = b;
    b = temp;

    cout<<"Swapped values of a and b"<<endl;
    cout<<"a = "<<a<<endl;
    cout<<"b = "<<b<<endl;
}

int main(){
    int a = 2 , b =5;
    cout<<"a = "<<a <<" b = "<<b<<endl;
    swap(a, b);
}