#include<iostream>
using namespace std;
int main(){
    int num;
    cout<< "Enter number : "<< endl;
    cin>> num;

    int count = 0;
    while(num > 0){
        num /= 10 ;
        count++;
        
    }

    cout<<"The number of digits : " << count<<endl;

}