#include<iostream>
using namespace std;
int main() {
    // and   or     &&    ||

    int num;
    cout<<"ENter number : ";
    cin>>num;

    if(num % 2  == 0 and num % 3 == 0) {
        cout<< num << " is divisible by 6"<<endl;
    }

    if(num %  5 == 0 or num % 9 == 0) {
        cout<< num << " is divisible  by 5 or 9.." <<endl;
    }
}