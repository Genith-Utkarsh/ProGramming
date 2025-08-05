#include<iostream>
using namespace std;

void change(int arr[]){
    arr[0] =100;
}

int main(){
    int arr[] = {1, 2, 3};
    int size = sizeof(arr)/4;
    cout<<"Initial array => "<<endl;
    for(int i = 0; i < size;i++){
        cout<<arr[i]<< " ";
    }
    cout<<endl;
    change(arr);
    cout<<"Final array => " <<endl;
    for(int i = 0; i < size;i++){
        cout<<arr[i]<< " ";
    }
 }