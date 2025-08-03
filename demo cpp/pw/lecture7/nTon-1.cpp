#include<iostream>
using namespace std;

void log(int num){
    // Base Case
    if(num == 0) return;
    // work to be done
    cout<<num<<endl;

    // recurssive call
    log(num - 1);
}

int main(){
    int n = 5;
    log(5);
}