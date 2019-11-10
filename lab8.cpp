//Renaisa Wahed
// LAB 8: Using functions and Finding a Character in A String

#include<iostream>
#include<string>
using namespace std; 

int count(string,char); 

int main()
{
	int i, length;
	char ch; 
        string phrase;

	cout << "What phrase?"; 
	getline (cin, phrase);
	
	cout << "What character do you want to search for in this phrase?"; 
	cin >> ch;

	cout << ch << " occurs in the phrase " << count(phrase, ch) 
             << " times" << endl;   
	
        return 0;
}

int count(string s, char a) 
{
        int i, length, counter = 0;
        char ch;

        length = s.length();
	for (i=0; i < length; i++) 
	{
            ch = s.at(i);

            if (ch == a)
               counter++;
	}

        return counter;
}
