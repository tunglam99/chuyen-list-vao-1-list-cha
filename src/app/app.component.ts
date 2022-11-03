import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  input1 = [
    {
      valueSCH: '0',
      valueNTS: '',
    },
    {
      valueSCH: '1',
      valueNTS: '',
    },
    {
      valueSCH: '2',
      valueNTS: '',
    },
    {
      valueSCH: '3',
      valueNTS: '',
    },
  ];

  input2 = [
    {
      valueSCH2: '0',
      date: 'test',
      amount: 'test',
      rate: 'test',
      freq: 'test',
      repayAtm: '',
    },
    {
      valueSCH2: '0',
      date: 'test1',
      amount: '',
      rate: '',
      freq: '',
      repayAtm: '',
    },
    {
      valueSCH2: '3',
      date: 'test5',
      amount: '',
      rate: '',
      freq: '',
      repayAtm: '',
    },
    {
      valueSCH2: '2',
      date: 'test7',
      amount: '',
      rate: '',
      freq: '',
      repayAtm: '',
    },
    {
      valueSCH2: '3',
      date: '',
      amount: '',
      rate: '',
      freq: '',
      repayAtm: '',
    },
  ];

  ketqua = [
    {
      valueSCH: '0',
      valueNTS: '',
      SCH: [
        {
          valueSCH2: '0',
          date: 'test',
          amount: 'test',
          rate: 'test',
          freq: 'test',
          repayAtm: '',
        },
        {
          valueSCH2: '0',
          date: 'test1',
          amount: '',
          rate: '',
          freq: '',
          repayAtm: '',
        },
      ],
    },
    {
      valueSCH: '1',
      valueNTS: '',
      SCH: null,
    },
    {
      valueSCH: '2',
      valueNTS: '',
      SCH: [
        {
          valueSCH2: '2',
          date: 'test7',
          amount: '',
          rate: '',
          freq: '',
          repayAtm: '',
        },
      ],
    },
    {
      valueSCH: '3',
      valueNTS: '',
      SCH: [
        {
          valueSCH2: '3',
          date: '',
          amount: '',
          rate: '',
          freq: '',
          repayAtm: '',
        },
      ],
    },
  ];
  lam: any
  ngOnInit(): void {
    const a = this.input1.map((x) => {
      const b = this.input2.filter((data) => x.valueSCH === data.valueSCH2);

      return {
        ...x,
        SCH: b,
      };
    });
this.lam = a
    console.log(a);
  }
}
