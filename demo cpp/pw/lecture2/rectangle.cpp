#include<iostream>
using namespace std;
int main() {
    float length , breadth , area , perim;

    cout<<"Enter length of reactangle : ";
    cin>>length;

    cout<<"Enter breadth of rectangle : ";
    cin>>breadth;

    area = length * breadth;
    perim = 2 * (length + breadth);

    cout<<"Area = "<< area << endl ;
    cout<<"Perimeter = "<< perim <<endl;

    if(area > perim) {
        cout<<"Area is greater than perimeter..";
    } else if(area = perim) {
        cout<<"Area is equal to perimeter..";
    } else {
        cout<<"Area is less than perimeter..";
    }
}