#include<iostream>
using namespace std;
int main(){
    char ch = 'a'  ;           // only signle digit
    cout<< "character => "<< ch << endl;

    char userCh;
    cout<<"Enter any char : ";
    cin>> userCh;
    cout<<"You entered : "<< userCh<< endl;

    // ascii values 

    cout << "Ascii value of 'A' : " << (int) 'A'<<endl;
    cout<< "Ascii value of 'a' : " << (int) 'a' << endl;
    cout << "Ascii value of '0' : " << (int) '0' << endl;


}