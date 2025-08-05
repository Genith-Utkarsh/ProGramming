#include<iostream>
using namespace std;
int main(){
    // declaring ;
    int size =10;
    int arr[size];

    // taking input for uninitalised array
    cout<<"Enter elements in array : ";
    for(int i = 0 ; i < 4; i++){
        cin>>arr[i];
    }

    // displaying the array element
    for(int i = 0; i < 4; i++){
        cout<<arr[i]<<" ";
    }

    cout<<endl;
    // delaring as well as initializing the array no need to define size 
    int numArray[] = {1, 2, 4, 5, 6,5};

    // updATING the array element
    numArray[3] = 10;

    for(int i = 0; i< 6; i++){
        cout<<numArray[i] << " ";
    }
}