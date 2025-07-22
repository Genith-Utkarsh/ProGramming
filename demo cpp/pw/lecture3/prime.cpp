#include<iostream>
using namespace std;
int main(){
    bool flag = true;

    int num;
    cout<<"Enter number : "<<endl;
    cin>>num;

    for(int i =2 ; i < num ; i++){
        if(num % i == 0){
            flag = false;
            break;
        }
    }

    if(flag == true){
        cout<<num<<" is prime"<<endl;
    }
    else {
        cout<<num<<" is composite"<<endl;
    }
}