#include<iostream>
using namespace std;
int main() {
    cout<<"Enter elements of first matrix = "<< endl;
    int arrFirst[4][5];
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 5; j++){
            cin>>arrFirst[i][j];
        }
    }


    cout<<"First matrix = "<< endl;

    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 5; j++){
            cout<<arrFirst[i][j]<< " ";
        }
        cout<< endl;
    }



    cout<<"\nEnter elements of second matrix = "<< endl;
    int arrSecond[4][5];
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 5; j++){
            cin>>arrSecond[i][j];
        }
    }

    cout<<"\n Second matrix = "<< endl;
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 5; j++){
            cout<<arrSecond[i][j]<<" ";
        }
        cout<< endl;
    }


    // Addition of first matrix and second matrix

    int result[4][5];
    for(int i =0; i < 4 ; i++){
        for(int j = 0; j < 5; j++){
            result[i][j] = arrFirst[i][j] + arrSecond[i][j];
        }
    }

    cout<<"\n Result array : "<< endl;
    for(int i =0; i < 4 ; i++){
        for(int j = 0; j < 5; j++){
            cout<<result[i][j]<< " ";
        }
        cout<< endl;
    }
}