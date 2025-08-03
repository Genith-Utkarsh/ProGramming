#include<iostream>
using namespace std;

void log(int num){
    if(num == 0) return;

    log(num - 1);
    cout<< num << endl;
}

int main(){
    int num = 6;
    log(num);
}