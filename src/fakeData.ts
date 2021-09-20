enum EventColor {
  Request = "#5D6A18",
  RangeMaintenance = "#B29167",
  Info = "#91B7CA",
}

const fakeRequests = [
  {
    start: '2022-05-03T00:00',
    end: '2022-05-03T23:59',
    title: '3IBCT',
    color: EventColor.Request,
    resource: 2
  },
  {
    start: '2022-05-05T00:00',
    end: '2022-05-06T23:59',
    title: '3IBCT',
    color: EventColor.Request,
    resource: 2
  },
  {
    start: '2022-05-03T00:00',
    end: '2022-05-03T23:59',
    title: '3IBCT',
    color: EventColor.Request,
    resource: 3
  },
  {
    start: '2022-05-04T00:00',
    end: '2022-05-04T23:59',
    title: 'CID',
    color: EventColor.Request,
    resource: 3
  },
  {
    start: '2022-05-05T00:00',
    end: '2022-05-06T23:59',
    title: '3IBCT',
    color: EventColor.Request,
    resource: 3
  },
  {
    start: '2022-05-05T00:00',
    end: '2022-05-06T23:59',
    title: '3IBCT',
    color: EventColor.Request,
    resource: 3
  },
  {
    start: '2022-05-07T00:00',
    end: '2022-05-08T23:59',
    title: 'HIARNG',
    color: EventColor.Request,
    resource: 3
  },
  {
    start: '2022-05-03T00:00',
    end: '2022-05-03T23:59',
    title: '25CAB',
    color: EventColor.Request,
    resource: 5
  },
  {
    start: '2022-05-04T00:00',
    end: '2022-05-04T23:59',
    title: 'CID',
    color: EventColor.Request,
    resource: 5
  },
  {
    start: '2022-05-05T00:00',
    end: '2022-05-05T23:59',
    title: '25CAB',
    color: EventColor.Request,
    resource: 5
  },
  {
    start: '2022-05-07T00:00',
    end: '2022-05-08T23:59',
    title: '9TH MSC',
    color: EventColor.Request,
    resource: 5
  },
  {
    start: '2022-05-03T00:00',
    end: '2022-05-03T23:59',
    title: '25CAB',
    color: EventColor.Request,
    resource: 6
  },
  {
    start: '2022-05-04T00:00',
    end: '2022-05-04T23:59',
    title: 'CID',
    color: EventColor.Request,
    resource: 6
  },
  {
    start: '2022-05-05T00:00',
    end: '2022-05-05T23:59',
    title: '25CAB',
    color: EventColor.Request,
    resource: 6
  },
  {
    start: '2022-05-07T00:00',
    end: '2022-05-08T23:59',
    title: '9TH MSC',
    color: EventColor.Request,
    resource: 6
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'DIVARTY',
    color: EventColor.Request,
    resource: 6
  },
  {
    start: '2022-05-12T00:00',
    end: '2022-05-12T23:59',
    title: '311 SC',
    color: EventColor.Request,
    resource: 6
  },
  {
    start: '2022-05-04T00:00',
    end: '2022-05-05T23:59',
    title: '2IBCT',
    color: EventColor.Request,
    resource: 8
  },
  {
    start: '2022-05-12T00:00',
    end: '2022-05-13T23:59',
    title: 'USMC',
    color: EventColor.Request,
    resource: 9
  },
  {
    start: '2022-05-12T00:00',
    end: '2022-05-13T23:59',
    title: 'USMC',
    color: EventColor.Request,
    resource: 10
  },
  {
    start: '2022-05-12T00:00',
    end: '2022-05-13T23:59',
    title: 'USMC',
    color: EventColor.Request,
    resource: 11
  },
  {
    start: '2022-05-12T00:00',
    end: '2022-05-13T23:59',
    title: 'USMC',
    color: EventColor.Request,
    resource: 12
  },
]


const fakeMaintenance = [{
  start: '2022-05-09T00:00',
  end: '2022-05-11T23:59',
  title: 'RANGE MAINTENANCE',
  color: EventColor.RangeMaintenance,
  resource: 2
},
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 3
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 4
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 5
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 8
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 9
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 11
  },
  {
    start: '2022-05-09T00:00',
    end: '2022-05-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 12
  },
  {
    start: '2022-05-30T00:00',
    end: '2022-06-11T23:59',
    title: 'RANGE MAINTENANCE',
    color: EventColor.RangeMaintenance,
    resource: 12
  },
];

export const fakeEvents = [
  ...fakeRequests,
  ...fakeMaintenance,
];

export const rangeResources = [
  {
    id: 1,
    name: 'QTR-2',
    color: EventColor.Info,
    children: [{
      id: 2,
      name: "SB/SR/CTF ZERO-QUAL",
    },
      {
        id: 3,
        name: "SB/SR/ MRF",
      },
      {
        id: 4,
        name: "SB/SR/INF DEMO"
      },
      {
        id: 5,
        name: "SB/SR/ CPQC"
      },
      {
        id: 6,
        name: "SB/CR-2 (ARF)"
      },
    ]
  },
  {
    id: 7,
    name: 'SR-3 Package',
    color: EventColor.Info,
    children: [
      {
        id: 8,
        name: 'SB/SR-3-SQD/LF',
      }, {
        id: 9,
        name: 'SB/SR-FP 101 (Artillery)',
      }, {
        id: 10,
        name: 'SB/SR-FP 102 (LZ)/(Artillery)',
      }, {
        id: 11,
        name: 'SB/SR-FP-106 (Artillery)',
      }, {
        id: 12,
        name: 'SB/SR-FP-107 (Artillery)',
      }, {
        id: 13,
        name: 'SB/SR/OP-KOLE',
      }
    ]
  }
];
