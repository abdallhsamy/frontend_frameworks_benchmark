import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-numbers-table',
  templateUrl: './numbers-table.component.html',
  styleUrls: ['./numbers-table.component.css']
})
export class NumbersTableComponent implements OnInit {
  numbers: number[] = [];
  maxNumber: number = 10001000;
  colors: string[] = [
    '#F9FAFB',
    '#F3F4F6',
    '#E5E7EB',
    '#D1D5DB',
    '#9CA3AF',
    '#6B7280',
    '#4B5563',
    '#374151',
    '#1F2937',
    '#111827',
    '#FDF2F2',
    '#FDE8E8',
    '#FBD5D5',
    '#F8B4B4',
    '#F98080',
    '#F05252',
    '#E02424',
    '#C81E1E',
    '#9B1C1C',
    '#771D1D',
    '#FDFDEA',
    '#FDF6B2',
    '#FCE96A',
    '#FACA15',
    '#E3A008',
    '#C27803',
    '#9F580A',
    '#8E4B10',
    '#723B13',
    '#633112',
    '#F3FAF7',
    '#DEF7EC',
    '#BCF0DA',
    '#84E1BC',
    '#31C48D',
    '#0E9F6E',
    '#057A55',
    '#046C4E',
    '#03543F',
    '#014737',
    '#EBF5FF',
    '#E1EFFE',
    '#C3DDFD',
    '#A4CAFE',
    '#76A9FA',
    '#3F83F8',
    '#1C64F2',
    '#1A56DB',
    '#1E429F',
    '#233876',
    '#F0F5FF',
    '#E5EDFF',
    '#CDDBFE',
    '#B4C6FC',
    '#8DA2FB',
    '#6875F5',
    '#5850EC',
    '#5145CD',
    '#42389D',
    '#362F78',
    '#F6F5FF',
    '#EDEBFE',
    '#DCD7FE',
    '#CABFFD',
    '#AC94FA',
    '#9061F9',
    '#7E3AF2',
    '#6C2BD9',
    '#5521B5',
    '#4A1D96',
    '#FDF2F8',
    '#FCE8F3',
    '#FAD1E8',
    '#F8B4D9',
    '#F17EB8',
    '#E74694',
    '#D61F69',
    '#BF125D',
    '#99154B',
    '#751A3D',
  ]

  ngOnInit() {
    this.initTable();
  }

  initTable() {
    setInterval(() => {
      this.numbers = [];
      this.generateNumberRange();
    }, 1);
  }

  generateNumberRange() {
    for (let i = 1; i <= 150; i++) {
      this.numbers.push(this.randomize(i));
    }
  }

  randomize(number: number): number {
    return number * Math.floor(Math.random() * 98453679845367);
  }

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getRandomBackgroundClass(): string {
    return `bg-${this.getRandomColor()}`;
  }
}
