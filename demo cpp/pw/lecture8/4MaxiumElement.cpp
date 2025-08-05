// Use Max and Min built in function 

// for smallest nu,mber use INT_MIN
// for max number use INT_MAX

#include<iostream>
#include<climits>
using namespace std;
int main(){
    int arr[] = {1, 5, 3, 810, 24, 234};
    int size = sizeof(arr) / 4;

    int mx = INT_MIN;
    for(int i = 0; i < size; i++){
       mx = max(mx, arr[i]);
    }

    cout<<"Max element in array = "<< mx;
}