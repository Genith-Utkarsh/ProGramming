#include<iostream>
using namespace std ;
int main(){
    int count = 1;
    int rows;
    cout<<"Enter number of rows : ";
    cin >> rows;

    for(int i = 0 ; i < rows ; i++){
        for(int j = 0; j < count ; j++){
            cout<<"*";
        }
        cout<<endl;
        count++;
    }
}