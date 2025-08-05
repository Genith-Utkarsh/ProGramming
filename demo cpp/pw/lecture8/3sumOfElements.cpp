#include<iostream>
using namespace std;
 int main(){
    int arr[] = {1, 2,4, 5};
    int size = sizeof(arr)/4;

    int sum = 0;
    for(int i = 0; i< size; i++){
        sum += arr[i];
    }

    cout<<"Sum of array elements = "<< sum;
 }