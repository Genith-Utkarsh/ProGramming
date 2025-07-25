#include<iostream>
using namespace std;
int main(){
    int count ;
    cout<<"Enter number of rows : ";
    cin>>count;

    int exTemp = count;

    for(int i = 0 ; i < count ; i++){
        for(int j = exTemp; j > 0 ; j--){
            cout<<"*";
        }
        exTemp--;
        cout<<endl;
    }
}