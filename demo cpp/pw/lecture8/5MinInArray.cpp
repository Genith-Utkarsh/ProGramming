#include<iostream>
#include<climits>
using namespace std;
int main(){
    int arr[] = {100, 5, 3, 810, 24, 234};
    int size = sizeof(arr) / 4;

    int mn = INT_MAX;
    for(int i = 0; i < size; i++){
       mn = min(mn, arr[i]);
    }

    cout<<"Max element in array = "<< mn;
}