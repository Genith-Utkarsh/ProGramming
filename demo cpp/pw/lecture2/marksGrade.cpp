#include<iostream>
using namespace std;
int main() {
    cout<<"Enter your grades : ";
    int grade;
    cin>>grade;

    char flag ;

    if(grade > 90 and grade <= 100) {
        flag = 'A';
    }
    else if (grade >= 80 and grade < 90){
        flag = 'B';
    }
    else if (grade >= 70 and grade < 80){
        flag = 'C';
    } else {
        flag = 'D';
    }

    cout<<"Your grade are = "<<flag<<endl;
}