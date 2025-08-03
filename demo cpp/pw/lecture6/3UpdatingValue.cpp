// for updating the value use => 
// 1) int* p = &a;
//2) *p = 23                 it will updte the value of a 


// swapping two numbers using pointers




#include<iostream>
using namespace std;


void swap(int* a , int*b){
    int temp = *a;
     *a = *b;
     *b = temp;

    cout<<"Swapped value of a and b are = "<<endl;
    cout<<"a  = "<< *a<<endl;
    cout<<"b = "<< *b<<endl;



}

int main(){
    int a = 2;
    int b = 5;
    cout<<"Value of a = "<<a<<" b = "<<b<<endl;

    swap(&a, &b);
}