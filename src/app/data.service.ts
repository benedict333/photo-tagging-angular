import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllData(): Observable<any[]> {
    // Replace this with your JSON data
    const jsonData = 
      [
        {
          "srNo": 1,
          "division": "10-A",
          "House Name": "Aayithamattam",
          "fullName": "Biju Antony",
          "Tagged": "FALSE"
        },
        {
          "srNo": 2,
          "division": "10-A",
          "House Name": "",
          "fullName": "Biju Jose",
          "Tagged": "FALSE"
        },
        {
          "srNo": 3,
          "division": "10-A",
          "House Name": "",
          "fullName": "Biju Thomas",
          "Tagged": "FALSE"
        },
        {
          "srNo": 4,
          "division": "10-A",
          "House Name": "",
          "fullName": "Bino V.G",
          "Tagged": "FALSE"
        },
        {
          "srNo": 5,
          "division": "10-A",
          "House Name": "",
          "fullName": "Jestin Philip",
          "Tagged": "FALSE"
        },
        {
          "srNo": 6,
          "division": "10-A",
          "House Name": "",
          "fullName": "Mathew T.S",
          "Tagged": "FALSE"
        },
        {
          "srNo": 7,
          "division": "10-A",
          "House Name": "",
          "fullName": "Maxin Sebastian",
          "Tagged": "FALSE"
        },
        {
          "srNo": 8,
          "division": "10-A",
          "House Name": "",
          "fullName": "Rajesh T.R",
          "Tagged": "FALSE"
        },
        {
          "srNo": 9,
          "division": "10-A",
          "House Name": "",
          "fullName": "Rajesh V.J",
          "Tagged": "FALSE"
        },
        {
          "srNo": 10,
          "division": "10-A",
          "House Name": "",
          "fullName": "Reji Thomas",
          "Tagged": "FALSE"
        },
        {
          "srNo": 11,
          "division": "10-A",
          "House Name": "",
          "fullName": "Roy T.P",
          "Tagged": "FALSE"
        },
        {
          "srNo": 12,
          "division": "10-A",
          "House Name": "",
          "fullName": "Santhosh C.T",
          "Tagged": "FALSE"
        },
        {
          "srNo": 13,
          "division": "10-A",
          "House Name": "",
          "fullName": "Santhosh Kumar K.S",
          "Tagged": "FALSE"
        },
        {
          "srNo": 14,
          "division": "10-A",
          "House Name": "",
          "fullName": "Santhosh Kumar O.R",
          "Tagged": "FALSE"
        },
        {
          "srNo": 15,
          "division": "10-A",
          "House Name": "",
          "fullName": "Santhosh Kumar T.S",
          "Tagged": "FALSE"
        },
        {
          "srNo": 16,
          "division": "10-A",
          "House Name": "",
          "fullName": "Sibi Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 17,
          "division": "10-A",
          "House Name": "",
          "fullName": "Ajitha Kumari M.J",
          "Tagged": "FALSE"
        },
        {
          "srNo": 18,
          "division": "10-A",
          "House Name": "",
          "fullName": "Anumol K.S",
          "Tagged": "FALSE"
        },
        {
          "srNo": 19,
          "division": "10-A",
          "House Name": "",
          "fullName": "Biji N.M",
          "Tagged": "FALSE"
        },
        {
          "srNo": 20,
          "division": "10-A",
          "House Name": "",
          "fullName": "Bindu Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 21,
          "division": "10-A",
          "House Name": "",
          "fullName": "Bindu Mathew",
          "Tagged": "FALSE"
        },
        {
          "srNo": 22,
          "division": "10-A",
          "House Name": "",
          "fullName": "Bindu P.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 23,
          "division": "10-A",
          "House Name": "",
          "fullName": "Beena C.H",
          "Tagged": "FALSE"
        },
        {
          "srNo": 24,
          "division": "10-A",
          "House Name": "",
          "fullName": "Bincy George",
          "Tagged": "FALSE"
        },
        {
          "srNo": 25,
          "division": "10-A",
          "House Name": "",
          "fullName": "Elcy K.M",
          "Tagged": "FALSE"
        },
        {
          "srNo": 26,
          "division": "10-A",
          "House Name": "",
          "fullName": "Jaya K.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 27,
          "division": "10-A",
          "House Name": "",
          "fullName": "Jessy Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 28,
          "division": "10-A",
          "House Name": "",
          "fullName": "Jamini Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 29,
          "division": "10-A",
          "House Name": "",
          "fullName": "Jiji Thomas",
          "Tagged": "FALSE"
        },
        {
          "srNo": 30,
          "division": "10-A",
          "House Name": "",
          "fullName": "Lincy K Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 31,
          "division": "10-A",
          "House Name": "",
          "fullName": "Minikutty A.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 32,
          "division": "10-A",
          "House Name": "",
          "fullName": "Minimol K.S",
          "Tagged": "FALSE"
        },
        {
          "srNo": 33,
          "division": "10-A",
          "House Name": "",
          "fullName": "Mini Sebastian",
          "Tagged": "FALSE"
        },
        {
          "srNo": 34,
          "division": "10-A",
          "House Name": "",
          "fullName": "Mini V.M",
          "Tagged": "FALSE"
        },
        {
          "srNo": 35,
          "division": "10-A",
          "House Name": "",
          "fullName": "Nishamol P.G",
          "Tagged": "FALSE"
        },
        {
          "srNo": 36,
          "division": "10-A",
          "House Name": "",
          "fullName": "Silvy K.T",
          "Tagged": "FALSE"
        },
        {
          "srNo": 37,
          "division": "10-B",
          "House Name": "",
          "fullName": "Binu Antony",
          "Tagged": "FALSE"
        },
        {
          "srNo": 38,
          "division": "10-B",
          "House Name": "",
          "fullName": "Boby Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 39,
          "division": "10-B",
          "House Name": "",
          "fullName": "Baiju Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 40,
          "division": "10-B",
          "House Name": "",
          "fullName": "Manoj K.A",
          "Tagged": "FALSE"
        },
        {
          "srNo": 41,
          "division": "10-B",
          "House Name": "",
          "fullName": "Manoj V.R",
          "Tagged": "FALSE"
        },
        {
          "srNo": 42,
          "division": "10-B",
          "House Name": "",
          "fullName": "Ramkumar K.B",
          "Tagged": "FALSE"
        },
        {
          "srNo": 43,
          "division": "10-B",
          "House Name": "",
          "fullName": "Rense P Kuruvila",
          "Tagged": "FALSE"
        },
        {
          "srNo": 44,
          "division": "10-B",
          "House Name": "",
          "fullName": "Roy A.C",
          "Tagged": "FALSE"
        },
        {
          "srNo": 45,
          "division": "10-B",
          "House Name": "",
          "fullName": "Sajeev P.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 46,
          "division": "10-B",
          "House Name": "",
          "fullName": "Saju Sebastian",
          "Tagged": "FALSE"
        },
        {
          "srNo": 47,
          "division": "10-B",
          "House Name": "",
          "fullName": "Sasi K.M",
          "Tagged": "FALSE"
        },
        {
          "srNo": 48,
          "division": "10-B",
          "House Name": "",
          "fullName": "Thomas V.V",
          "Tagged": "FALSE"
        },
        {
          "srNo": 49,
          "division": "10-B",
          "House Name": "",
          "fullName": "Unnikrishnan V.R",
          "Tagged": "FALSE"
        },
        {
          "srNo": 50,
          "division": "10-B",
          "House Name": "",
          "fullName": "Viju Kumar P.P",
          "Tagged": "FALSE"
        },
        {
          "srNo": 51,
          "division": "10-B",
          "House Name": "",
          "fullName": "Vinu C.T",
          "Tagged": "FALSE"
        },
        {
          "srNo": 52,
          "division": "10-B",
          "House Name": "",
          "fullName": "Vinumon K.J",
          "Tagged": "FALSE"
        },
        {
          "srNo": 53,
          "division": "10-B",
          "House Name": "",
          "fullName": "Bindhu K.G",
          "Tagged": "FALSE"
        },
        {
          "srNo": 54,
          "division": "10-B",
          "House Name": "",
          "fullName": "Bindhumol A.C",
          "Tagged": "FALSE"
        },
        {
          "srNo": 55,
          "division": "10-B",
          "House Name": "",
          "fullName": "Bindhu P.P",
          "Tagged": "FALSE"
        },
        {
          "srNo": 56,
          "division": "10-B",
          "House Name": "",
          "fullName": "Bindhu P.B",
          "Tagged": "FALSE"
        },
        {
          "srNo": 57,
          "division": "10-B",
          "House Name": "",
          "fullName": "Deepa T.P",
          "Tagged": "FALSE"
        },
        {
          "srNo": 58,
          "division": "10-B",
          "House Name": "",
          "fullName": "Densy Dominic",
          "Tagged": "FALSE"
        },
        {
          "srNo": 59,
          "division": "10-B",
          "House Name": "",
          "fullName": "Jayamol P.G",
          "Tagged": "FALSE"
        },
        {
          "srNo": 60,
          "division": "10-B",
          "House Name": "",
          "fullName": "Jayani K.V",
          "Tagged": "FALSE"
        },
        {
          "srNo": 61,
          "division": "10-B",
          "House Name": "",
          "fullName": "Marykutty M.J",
          "Tagged": "FALSE"
        },
        {
          "srNo": 62,
          "division": "10-B",
          "House Name": "",
          "fullName": "Mini Mathew",
          "Tagged": "FALSE"
        },
        {
          "srNo": 63,
          "division": "10-B",
          "House Name": "",
          "fullName": "Minimol A.D",
          "Tagged": "FALSE"
        },
        {
          "srNo": 64,
          "division": "10-B",
          "House Name": "",
          "fullName": "Minimol K.P",
          "Tagged": "FALSE"
        },
        {
          "srNo": 65,
          "division": "10-B",
          "House Name": "",
          "fullName": "Preenimol P.C",
          "Tagged": "FALSE"
        },
        {
          "srNo": 66,
          "division": "10-B",
          "House Name": "",
          "fullName": "Princy Vincent",
          "Tagged": "FALSE"
        },
        {
          "srNo": 67,
          "division": "10-B",
          "House Name": "",
          "fullName": "Shanty M.A",
          "Tagged": "FALSE"
        },
        {
          "srNo": 68,
          "division": "10-B",
          "House Name": "",
          "fullName": "Shybi Thomas",
          "Tagged": "FALSE"
        },
        {
          "srNo": 69,
          "division": "10-B",
          "House Name": "",
          "fullName": "Shini K.M",
          "Tagged": "FALSE"
        },
        {
          "srNo": 70,
          "division": "10-B",
          "House Name": "",
          "fullName": "Sindhu C.B",
          "Tagged": "FALSE"
        },
        {
          "srNo": 71,
          "division": "10-B",
          "House Name": "",
          "fullName": "Sindhu K.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 72,
          "division": "10-B",
          "House Name": "",
          "fullName": "Vinimol N.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 73,
          "division": "10-C",
          "House Name": "",
          "fullName": "Anish V.R",
          "Tagged": "FALSE"
        },
        {
          "srNo": 74,
          "division": "10-C",
          "House Name": "",
          "fullName": "Benedict Antony",
          "Tagged": "FALSE"
        },
        {
          "srNo": 75,
          "division": "10-C",
          "House Name": "",
          "fullName": "Biju Gopalan",
          "Tagged": "FALSE"
        },
        {
          "srNo": 76,
          "division": "10-C",
          "House Name": "",
          "fullName": "Biju Varghese",
          "Tagged": "FALSE"
        },
        {
          "srNo": 77,
          "division": "10-C",
          "House Name": "",
          "fullName": "Binu Chacko",
          "Tagged": "FALSE"
        },
        {
          "srNo": 78,
          "division": "10-C",
          "House Name": "",
          "fullName": "Jagadeesh K.T",
          "Tagged": "FALSE"
        },
        {
          "srNo": 79,
          "division": "10-C",
          "House Name": "",
          "fullName": "Jinni Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 80,
          "division": "10-C",
          "House Name": "",
          "fullName": "Joby Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 81,
          "division": "10-C",
          "House Name": "",
          "fullName": "Saji Zacharias",
          "Tagged": "FALSE"
        },
        {
          "srNo": 82,
          "division": "10-C",
          "House Name": "",
          "fullName": "Santhosh George",
          "Tagged": "FALSE"
        },
        {
          "srNo": 83,
          "division": "10-C",
          "House Name": "",
          "fullName": "Sreekumar B",
          "Tagged": "FALSE"
        },
        {
          "srNo": 84,
          "division": "10-C",
          "House Name": "",
          "fullName": "Subhash K.A",
          "Tagged": "FALSE"
        },
        {
          "srNo": 85,
          "division": "10-C",
          "House Name": "",
          "fullName": "Tomy Thomas",
          "Tagged": "FALSE"
        },
        {
          "srNo": 86,
          "division": "10-C",
          "House Name": "",
          "fullName": "Venugopalan V.V",
          "Tagged": "FALSE"
        },
        {
          "srNo": 87,
          "division": "10-C",
          "House Name": "",
          "fullName": "Vinodkumar P.D",
          "Tagged": "FALSE"
        },
        {
          "srNo": 88,
          "division": "10-C",
          "House Name": "",
          "fullName": "Ajithakumari A.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 89,
          "division": "10-C",
          "House Name": "",
          "fullName": "Beena Joseph",
          "Tagged": "FALSE"
        },
        {
          "srNo": 90,
          "division": "10-C",
          "House Name": "",
          "fullName": "Bincy P.S",
          "Tagged": "FALSE"
        },
        {
          "srNo": 91,
          "division": "10-C",
          "House Name": "",
          "fullName": "Bindhu M.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 92,
          "division": "10-C",
          "House Name": "",
          "fullName": "Jancy Sebastian",
          "Tagged": "FALSE"
        },
        {
          "srNo": 93,
          "division": "10-C",
          "House Name": "",
          "fullName": "Rekha K.C",
          "Tagged": "FALSE"
        },
        {
          "srNo": 94,
          "division": "10-C",
          "House Name": "",
          "fullName": "Rosamma K.J",
          "Tagged": "FALSE"
        },
        {
          "srNo": 95,
          "division": "10-C",
          "House Name": "",
          "fullName": "Savithri A.P",
          "Tagged": "FALSE"
        },
        {
          "srNo": 96,
          "division": "10-C",
          "House Name": "",
          "fullName": "Shajana C.C",
          "Tagged": "FALSE"
        },
        {
          "srNo": 97,
          "division": "10-C",
          "House Name": "",
          "fullName": "Shaly Sebastian",
          "Tagged": "FALSE"
        },
        {
          "srNo": 98,
          "division": "10-C",
          "House Name": "",
          "fullName": "Shobana K.K",
          "Tagged": "FALSE"
        },
        {
          "srNo": 99,
          "division": "10-C",
          "House Name": "",
          "fullName": "Shylaja Sasi",
          "Tagged": "FALSE"
        },
        {
          "srNo": 100,
          "division": "10-C",
          "House Name": "",
          "fullName": "Sindhu K.V",
          "Tagged": "FALSE"
        } ,     
        {
          "srNo": 101,
          "division": "10-C",
          "House Name": "",
          "fullName": "Sindhu A.V",
          "tagged": "FALSE"
        },
        {
          "srNo": 102,
          "division": "10-C",
          "House Name": "",
          "fullName": "Sindhu T.A",
          "tagged": "FALSE"
        },
        {
          "srNo": 103,
          "division": "10-C",
          "House Name": "",
          "fullName": "Sreelekha M.S",
          "tagged": "FALSE"
        },
        {
          "srNo": 104,
          "division": "10-C",
          "House Name": "",
          "fullName": "Umadevi K.S",
          "tagged": "FALSE"
        },
        {
          "srNo": 105,
          "division": "10-C",
          "House Name": "",
          "fullName": "Usha K.G",
          "tagged": "FALSE"
        },
        {
          "srNo": 106,
          "division": "10-C",
          "House Name": "",
          "fullName": "Viji C.J",
          "tagged": "FALSE"
        },
        {
          "srNo": 107,
          "division": "10-C",
          "House Name": "",
          "fullName": "Vincy Philip",
          "tagged": "FALSE"
        },
        {
          "srNo": 108,
          "division": "10-C",
          "House Name": "",
          "fullName": "Martin Joseph",
          "tagged": "FALSE"
        },
        {
          "srNo": 109,
          "division": "10-C",
          "House Name": "",
          "fullName": "Santhosh A.T",
          "tagged": "FALSE"
        }
    ];
    return of(jsonData);
  }
}
