#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter value of number : ";
    cin>>num;

    float a = (float) num;
    float half = a / 2;

    cout<<"Half of number "<<num<<" is  = "<<half<<endl;
}