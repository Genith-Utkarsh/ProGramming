#include<iostream>
using namespace std;

int sum(int num){
    if(num == 0) return 0;
    return num + sum(num -1 );
}

int main(){
    int num = 7;
    int result = sum(7);
    cout<<"Sum of 1 to "<<num<<" is  = "<< result<< endl ;
}