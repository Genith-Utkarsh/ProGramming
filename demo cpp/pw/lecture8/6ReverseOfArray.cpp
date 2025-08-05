#include<iostream>
using namespace std;
int main(){
    int arrStrainght[] = {1, 2, 4, 6, 7 };
    int arrStrainghtLen = sizeof(arrStrainght)/4;
    int arrReverse[arrStrainghtLen];

    for(int i = 0; i < arrStrainghtLen; i++){
        arrReverse[arrStrainghtLen - i -1] = arrStrainght[i];
    }

    for(int i = 0; i < arrStrainghtLen; i++){
        cout<<arrReverse[i] <<" ";
    }
}