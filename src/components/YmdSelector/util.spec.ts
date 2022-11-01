import { YmdSelectBoxUtil } from './util';

describe('createYearOptions', () => {
  it('maxYear から minYear に対し、降順でソートされること', () => {
    const expectValue = [
      { text: '2020', value: '2020' },
      { text: '2019', value: '2019' },
      { text: '2018', value: '2018' },
      { text: '2017', value: '2017' },
      { text: '2016', value: '2016' },
      { text: '2015', value: '2015' },
    ];

    const actual = YmdSelectBoxUtil.createYearOptions(2020, 2015);
    expect(actual).toStrictEqual(expectValue);
  });

  it('minYear > maxYear の時に空配列が返ること', () => {
    const expectValue: ReturnType<typeof YmdSelectBoxUtil.createYearOptions> =
      [];

    const actual = YmdSelectBoxUtil.createYearOptions(2019, 2020);
    expect(actual).toStrictEqual(expectValue);
  });

  it('翌年以降が表示できること', () => {
    const nowYear = new Date().getFullYear();
    const nowYearStr = nowYear.toString();
    const futureYear = nowYear + 1;
    const futureYearStr = futureYear.toString();
    const expectValue = [
      { text: futureYearStr, value: futureYearStr },
      { text: nowYearStr, value: nowYearStr },
    ];

    const actual = YmdSelectBoxUtil.createYearOptions(futureYear, nowYear);
    expect(actual).toStrictEqual(expectValue);
  });
});

describe('createMonthOptions', () => {
  it('月の一覧が取得できること', () => {
    const expectValue = [
      { text: '1', value: '1' },
      { text: '2', value: '2' },
      { text: '3', value: '3' },
      { text: '4', value: '4' },
      { text: '5', value: '5' },
      { text: '6', value: '6' },
      { text: '7', value: '7' },
      { text: '8', value: '8' },
      { text: '9', value: '9' },
      { text: '10', value: '10' },
      { text: '11', value: '11' },
      { text: '12', value: '12' },
    ];

    const actual = YmdSelectBoxUtil.createMonthOptions();
    expect(actual).toStrictEqual(expectValue);
  });
});

describe('createDayOptions', () => {
  const daysOptions28 = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    { text: '10', value: '10' },
    { text: '11', value: '11' },
    { text: '12', value: '12' },
    { text: '13', value: '13' },
    { text: '14', value: '14' },
    { text: '15', value: '15' },
    { text: '16', value: '16' },
    { text: '17', value: '17' },
    { text: '18', value: '18' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '21', value: '21' },
    { text: '22', value: '22' },
    { text: '23', value: '23' },
    { text: '24', value: '24' },
    { text: '25', value: '25' },
    { text: '26', value: '26' },
    { text: '27', value: '27' },
    { text: '28', value: '28' },
  ];
  const daysOptions29 = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    { text: '10', value: '10' },
    { text: '11', value: '11' },
    { text: '12', value: '12' },
    { text: '13', value: '13' },
    { text: '14', value: '14' },
    { text: '15', value: '15' },
    { text: '16', value: '16' },
    { text: '17', value: '17' },
    { text: '18', value: '18' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '21', value: '21' },
    { text: '22', value: '22' },
    { text: '23', value: '23' },
    { text: '24', value: '24' },
    { text: '25', value: '25' },
    { text: '26', value: '26' },
    { text: '27', value: '27' },
    { text: '28', value: '28' },
    { text: '29', value: '29' },
  ];
  const daysOptions30 = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    { text: '10', value: '10' },
    { text: '11', value: '11' },
    { text: '12', value: '12' },
    { text: '13', value: '13' },
    { text: '14', value: '14' },
    { text: '15', value: '15' },
    { text: '16', value: '16' },
    { text: '17', value: '17' },
    { text: '18', value: '18' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '21', value: '21' },
    { text: '22', value: '22' },
    { text: '23', value: '23' },
    { text: '24', value: '24' },
    { text: '25', value: '25' },
    { text: '26', value: '26' },
    { text: '27', value: '27' },
    { text: '28', value: '28' },
    { text: '29', value: '29' },
    { text: '30', value: '30' },
  ];
  const daysOptions31 = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    { text: '10', value: '10' },
    { text: '11', value: '11' },
    { text: '12', value: '12' },
    { text: '13', value: '13' },
    { text: '14', value: '14' },
    { text: '15', value: '15' },
    { text: '16', value: '16' },
    { text: '17', value: '17' },
    { text: '18', value: '18' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '21', value: '21' },
    { text: '22', value: '22' },
    { text: '23', value: '23' },
    { text: '24', value: '24' },
    { text: '25', value: '25' },
    { text: '26', value: '26' },
    { text: '27', value: '27' },
    { text: '28', value: '28' },
    { text: '29', value: '29' },
    { text: '30', value: '30' },
    { text: '31', value: '31' },
  ];

  it('平年の場合、1 - 12 月の日数が正常に取得できること', () => {
    [
      {
        month: 1,
        expectValue: daysOptions31,
      },
      {
        month: 2,
        expectValue: daysOptions28,
      },
      {
        month: 3,
        expectValue: daysOptions31,
      },
      {
        month: 4,
        expectValue: daysOptions30,
      },
      {
        month: 5,
        expectValue: daysOptions31,
      },
      {
        month: 6,
        expectValue: daysOptions30,
      },
      {
        month: 7,
        expectValue: daysOptions31,
      },
      {
        month: 8,
        expectValue: daysOptions31,
      },
      {
        month: 9,
        expectValue: daysOptions30,
      },
      {
        month: 10,
        expectValue: daysOptions31,
      },
      {
        month: 11,
        expectValue: daysOptions30,
      },
      {
        month: 12,
        expectValue: daysOptions31,
      },
    ].forEach((item) => {
      const actual = YmdSelectBoxUtil.createDayOptions(2021, item.month);
      expect(actual).toStrictEqual(item.expectValue);
    });
  });

  it('うるう年の場合、1 - 12 月の日数が正常に取得できること', () => {
    [
      {
        month: 1,
        expectValue: daysOptions31,
      },
      {
        month: 2,
        expectValue: daysOptions29,
      },
      {
        month: 3,
        expectValue: daysOptions31,
      },
      {
        month: 4,
        expectValue: daysOptions30,
      },
      {
        month: 5,
        expectValue: daysOptions31,
      },
      {
        month: 6,
        expectValue: daysOptions30,
      },
      {
        month: 7,
        expectValue: daysOptions31,
      },
      {
        month: 8,
        expectValue: daysOptions31,
      },
      {
        month: 9,
        expectValue: daysOptions30,
      },
      {
        month: 10,
        expectValue: daysOptions31,
      },
      {
        month: 11,
        expectValue: daysOptions30,
      },
      {
        month: 12,
        expectValue: daysOptions31,
      },
    ].forEach((item) => {
      const actual = YmdSelectBoxUtil.createDayOptions(2020, item.month);
      expect(actual).toStrictEqual(item.expectValue);
    });
  });
});
