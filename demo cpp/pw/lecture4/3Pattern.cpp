#include<iostream>
using namespace std;
int main(){
    int rows;
    cout<<"ENter number of rows : ";
    cin>>rows;

   int count = 1;
    for(int i = 0; i < rows ; i++){
         for(int j = 1; j <= count ; j++){
            cout<<j;
         }
         count++;
         cout<<endl;
        
    }
}