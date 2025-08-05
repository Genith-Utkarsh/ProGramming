#include<iostream>
using namespace std;
int main(){
    int arrStrainght[] = {1, 2, 4, 6, 7 };
    int arrStrainghtLen = sizeof(arrStrainght)/4;

    int j = arrStrainghtLen - 1;

    for(int i = 0; i < arrStrainghtLen ; i++){
        if(i < j){
            int temp = arrStrainght[i];
            arrStrainght[i] = arrStrainght[j];
            arrStrainght[j] = temp;
        }
        i++;
        j--;
    }

    // display

    for(int i = 0; i < arrStrainghtLen; i++){
        cout<<arrStrainght[i] << " ";
    }
    
}