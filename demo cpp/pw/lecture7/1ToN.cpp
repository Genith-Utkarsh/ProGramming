#include<iostream>
using namespace std;


void log(int count , int num){
    if(count == num + 1 ) return;

    cout<<count<<endl;
    count++;

    log(count, num);

}

int main(){
    int num = 6;
    int count =  1;
    log(count , num);
}