const moment = require('moment');

// const holiday = ['24.04.2021', '25.04.2021', '02.05.2021', '08.05.2021', '09.05.2021', '14.05.2021', '16.05.2021', '22.05.2021',
// '23.05.2021', '26.05.2021', '30.05.2021', '06.06.2021', '12.06.2021', '13.06.2021', '20.06.2021'];
const holiday = [
  '2021-04-24', '2021-04-25',
  '2021-05-02', '2021-05-08',
  '2021-05-09', '2021-05-14',
  '2021-05-16', '2021-05-22',
  '2021-05-23', '2021-05-26',
  '2021-05-30', '2021-06-06',
  '2021-06-12', '2021-06-13',
  '2021-06-20'
];

const startTime = '09:00';
const endTime = '18:00';

const actualData = [
  {
    "DPCode": 6063,
    "Location": "6063_PALAM_RAJ_NAGARII_Router",
    "Call_down_date": "27/04/2021",
    "Call_down_time": "9:45 AM",
    "Call_Closed_Date": "28/04/2021",
    "Call_Closed_Time": "2:00 PM",
    "StartDate_Time": "27/4/2021 9:45 AM",
    "EndDate_Time": "28/4/2021 2:00 PM"
  },
  {
    "DPCode": 6378,
    "Location": "6378_KANJHAWALA_Router",
    "Call_down_date": "28/04/2021",
    "Call_down_time": "9:40 AM",
    "Call_Closed_Date": "06/05/2021",
    "Call_Closed_Time": "2:30 PM",
    "StartDate_Time": "28/4/2021 9:40 AM",
    "EndDate_Time": "6/5/2021 2:30 PM"
  },
  {
    "DPCode": 8670,
    "Location": "8670_NEW_KALINDI_COLLEGE_Router",
    "Call_down_date": "29/04/2021",
    "Call_down_time": "9:45 AM",
    "Call_Closed_Date": "03/05/2021",
    "Call_Closed_Time": "1:15 PM",
    "StartDate_Time": "29/4/2021 9:45 AM",
    "EndDate_Time": "3/5/2021 1:15 PM"
  },
  {
    "DPCode": 2024,
    "Location": "2024_TRINAGAR_Router",
    "Call_down_date": "30/04/2021",
    "Call_down_time": "9:55 AM",
    "Call_Closed_Date": "04/05/2021",
    "Call_Closed_Time": "5:00 PM",
    "StartDate_Time": "30/4/2021 9:55 AM",
    "EndDate_Time": "4/5/2021 5:00 PM"
  },
  {
    "DPCode": 2413,
    "Location": "2413_SPECIALISED_SME_BRANCH_Router",
    "Call_down_date": "01/05/2021",
    "Call_down_time": "10:20 AM",
    "Call_Closed_Date": "13/05/2021",
    "Call_Closed_Time": "6:00 PM",
    "StartDate_Time": "1/5/2021 10:20 AM",
    "EndDate_Time": "13/5/2021 6:00 PM"
  },
  {
    "DPCode": 2876,
    "Location": "2876_DWARKA_SECTOR_12_Router",
    "Call_down_date": "01/05/2021",
    "Call_down_time": "10:20 AM",
    "Call_Closed_Date": "10/05/2021",
    "Call_Closed_Time": "5:00 PM",
    "StartDate_Time": "1/5/2021 10:20 AM",
    "EndDate_Time": "10/5/2021 5:00 PM"
  },
  {
    "DPCode": 3009,
    "Location": "3009_UCMS_GTB_Router",
    "Call_down_date": "07/05/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "17/05/2021",
    "Call_Closed_Time": "2:00 PM",
    "StartDate_Time": "7/5/2021 10:15 AM",
    "EndDate_Time": "17/5/2021 2:00 PM"
  },
  {
    "DPCode": 2592,
    "Location": "2592_MODEL_TOWN_Router",
    "Call_down_date": "10/05/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "15/05/2021",
    "Call_Closed_Time": "1:10 PM",
    "StartDate_Time": "10/5/2021 10:15 AM",
    "EndDate_Time": "15/5/2021 1:10 PM"
  },
  {
    "DPCode": 8670,
    "Location": "8670_NEW_KALINDI_COLLEGE_Router",
    "Call_down_date": "10/05/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "19/05/2021",
    "Call_Closed_Time": "11:00 AM",
    "StartDate_Time": "10/5/2021 10:15 AM",
    "EndDate_Time": "19/5/2021 11:00 AM"
  },
  {
    "DPCode": 2017,
    "Location": "2017_MAYAPURI",
    "Call_down_date": "11/05/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "12/05/2021",
    "Call_Closed_Time": "12:50 PM",
    "StartDate_Time": "11/5/2021 10:15 AM",
    "EndDate_Time": "12/5/2021 12:50 PM"
  },
  {
    "DPCode": 1300,
    "Location": "1300_VIVEK_VIHAR",
    "Call_down_date": "11/05/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "12/05/2021",
    "Call_Closed_Time": "1:50 PM",
    "StartDate_Time": "11/5/2021 10:15 AM",
    "EndDate_Time": "12/5/2021 1:50 PM"
  },
  {
    "DPCode": 6378,
    "Location": "6378_KANJHAWALA_Router",
    "Call_down_date": "13/05/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "17/05/2021",
    "Call_Closed_Time": "10:30 AM",
    "StartDate_Time": "13/5/2021 9:50 AM",
    "EndDate_Time": "17/5/2021 10:30 AM"
  },
  {
    "DPCode": 1300,
    "Location": "1300_VIVEK_VIHAR",
    "Call_down_date": "13/05/2021",
    "Call_down_time": "11:45 AM",
    "Call_Closed_Date": "13/05/2021",
    "Call_Closed_Time": "12:45 PM",
    "StartDate_Time": "13/5/2021 11:45 AM",
    "EndDate_Time": "13/5/2021 12:45 PM"
  },
  {
    "DPCode": 389,
    "Location": "389_KASHMIRI_GATE_Router",
    "Call_down_date": "15/05/2021",
    "Call_down_time": "10:00 AM",
    "Call_Closed_Date": "16/05/2021",
    "Call_Closed_Time": "10:30 AM",
    "StartDate_Time": "15/5/2021 10:00 AM",
    "EndDate_Time": "16/5/2021 10:30 AM"
  },
  {
    "DPCode": 2413,
    "Location": "2413_SPECIALISED_SME_BRANCH_Router",
    "Call_down_date": "15/05/2021",
    "Call_down_time": "10:00 AM",
    "Call_Closed_Date": "19/05/2021",
    "Call_Closed_Time": "12:00 PM",
    "StartDate_Time": "15/5/2021 10:00 AM",
    "EndDate_Time": "19/5/2021 12:00 PM"
  },
  {
    "DPCode": 4126,
    "Location": "4126_SPECIALISED_SME_BRANCH_Router",
    "Call_down_date": "15/05/2021",
    "Call_down_time": "10:00 AM",
    "Call_Closed_Date": "16/05/2021",
    "Call_Closed_Time": "1:00 PM",
    "StartDate_Time": "15/5/2021 10:00 AM",
    "EndDate_Time": "16/5/2021 1:00 PM"
  },
  {
    "DPCode": 2010,
    "Location": "21010 Shakti Nagar",
    "Call_down_date": "15/05/2021",
    "Call_down_time": "10:05 AM",
    "Call_Closed_Date": "18/05/2021",
    "Call_Closed_Time": "1:15 PM",
    "StartDate_Time": "15/5/2021 10:05 AM",
    "EndDate_Time": "18/5/2021 1:15 PM"
  },
  {
    "DPCode": 3222,
    "Location": "3222_NEW_YAMUNA_VIHAR",
    "Call_down_date": "18/05/2021",
    "Call_down_time": "10:10 AM",
    "Call_Closed_Date": "19/05/2021",
    "Call_Closed_Time": "1:30 PM",
    "StartDate_Time": "18/5/2021 10:10 AM",
    "EndDate_Time": "19/5/2021 1:30 PM"
  },
  {
    "DPCode": 3333,
    "Location": "3333_KARKARDOOMA_SD-WAN",
    "Call_down_date": "19/05/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "24/05/2021",
    "Call_Closed_Time": "10:50 AM",
    "StartDate_Time": "19/5/2021 10:15 AM",
    "EndDate_Time": "24/5/2021 10:50 AM"
  },
  {
    "DPCode": 2983,
    "Location": "2983_NARELA_SD-WAN",
    "Call_down_date": "20/05/2021",
    "Call_down_time": "10:40 AM",
    "Call_Closed_Date": "21/05/2021",
    "Call_Closed_Time": "12:00 PM",
    "StartDate_Time": "20/5/2021 10:40 AM",
    "EndDate_Time": "21/5/2021 12:00 PM"
  },
  {
    "DPCode": 5866,
    "Location": "5866_KONDLI_Router",
    "Call_down_date": "20/05/2021",
    "Call_down_time": "10:40 AM",
    "Call_Closed_Date": "24/05/2021",
    "Call_Closed_Time": "10:00 AM",
    "StartDate_Time": "20/5/2021 10:40 AM",
    "EndDate_Time": "24/5/2021 10:00 AM"
  }
];

function getHours(start, end) {

}

function getTimeStamp(dateTime) {
  dateTime = new Date(dateTime).getTime();
}

function formatHolidays(data) {
  data = data.map(i => {
    const year = i.split('.')[2];
    const month = i.split('.')[1];
    const date = i.split('.')[0];
    let finalDate = `${year}-${month}-${date}`;
    finalDate = moment(finalDate).format('YYYY-MM-DD');
    console.log(finalDate);
    return finalDate;
  });
  console.log(data);
  return data;
}

function convertTime12to24 (time12h) {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  (hours === '12' ? hours = '00' : ((modifier === 'PM' || modifier === 'pm') ? hours = parseInt(hours, 10) + 12 : ""));
  return `${hours}:${minutes}`;
}

function timeDiff(dataList) {
  dataList = dataList.map(i => {
    i.Call_down_date = (i.Call_down_date).split("/").reverse().join("-");
    i.Call_Closed_Date = (i.Call_Closed_Date).split("/").reverse().join("-");
    i.Call_down_time = convertTime12to24(i.Call_down_time);
    i.Call_Closed_Time = convertTime12to24(i.Call_Closed_Time);
    i.days = (new Date(i.Call_Closed_Date) - new Date(i.Call_down_date)) / (1000 * 60 * 60 * 24);
    i.start = `${i.Call_down_date} ${i.Call_down_time}`;
    i.end = `${i.Call_Closed_Date} ${i.Call_Closed_Time}`;
    let msDifference =  new Date(i.end).getTime() - new Date(i.start).getTime();
    i = {...i};
    i.diff = msDifference;
    console.log(i);
    return i;
  });
}

// formatHolidays(holiday);
const dataNew = timeDiff(actualData);
console.log(dataNew); 
// console.log(h);
