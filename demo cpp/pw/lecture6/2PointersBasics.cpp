#include<iostream>
using namespace std;
int main(){
    int a = 2;
    int* p = &a;  //  storing address of a in p       use &variableName
    cout<<"address of a = "<<p << endl;
    cout<<"Value of a  = "<< *p<< endl;

    // as p is storing the address of a so it will have itas own address where it stores the address of another variable

    int** var = &p;
    cout<<"address of p = "<< var;
 }