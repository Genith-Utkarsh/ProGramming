#include<iostream>
using namespace std;
int main() {
    // check if number is even or odd

    int num;
    cout<< "Enter a number : ";
    cin>> num;

    if(num % 2 == 0){
        cout<< num << " is Even \n";
    } else {
        cout << num << " is Odd \n";
    }

    // printing absolute value 
    if (num < 0){
        num *= -1;
    }

    cout<<"Absolute value of number is = "<<num<<endl;
}