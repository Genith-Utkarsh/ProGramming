#include<iostream>
using namespace std ;
int main() {

    float sp, cp, total;
    cout<<"Enter selling price : "<< endl;
    cin>>sp;

    cout<< "Enter cost price : "<< endl;
    cin>>cp;

    total = sp - cp;

    if(total > 0){
        cout<<"You have made profit of = "<<total<<endl;
    } else if (total < 0 ) {
        cout<<"You have made total loss = "<< -total << endl;
    } else {
        cout<< "No profit no loss";
    }
}