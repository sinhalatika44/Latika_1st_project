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
    "DPCode": 2743,
    "Location": "2743_SAKET_SD-WAN",
    "Call_down_date": "24/06/2021",
    "Call_down_time": "1:30 PM",
    "Call_Closed_Date": "25/06/2021",
    "Call_Closed_Time": "1:30 PM",
    "StartDate_Time": "24/6/2021 1:30 PM",
    "EndDate_Time": "25/6/2021 1:30 PM"
  },
  {
    "DPCode": 268,
    "Location": "268_EAST_OF_KAILASH_SD-WAN",
    "Call_down_date": "24/06/2021",
    "Call_down_time": "3:40 PM",
    "Call_Closed_Date": "25/06/2021",
    "Call_Closed_Time": "12:00 PM",
    "StartDate_Time": "24/6/2021 3:40 PM",
    "EndDate_Time": "25/6/2021 12:00 PM"
  },
  {
    "DPCode": 2414,
    "Location": "2414_SPECIALISED_SME_BRANCH_SD-WAN",
    "Call_down_date": "26/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "01/07/2021",
    "Call_Closed_Time": "12:45 PM",
    "StartDate_Time": "26/6/2021 9:50 AM",
    "EndDate_Time": "1/7/2021 12:45 PM"
  },
  {
    "DPCode": 5421,
    "Location": "5421_VISHWAS_NAGAR_SD-WAN",
    "Call_down_date": "25/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "28/06/2021",
    "Call_Closed_Time": "1:00 PM",
    "StartDate_Time": "25/6/2021 9:50 AM",
    "EndDate_Time": "28/6/2021 1:00 PM"
  },
  {
    "DPCode": 2925,
    "Location": "2925_BURARI_SD-WAN",
    "Call_down_date": "25/06/2021",
    "Call_down_time": "3:15 PM",
    "Call_Closed_Date": "26/06/2021",
    "Call_Closed_Time": "2:00 PM",
    "StartDate_Time": "25/6/2021 3:15 PM",
    "EndDate_Time": "26/6/2021 2:00 PM"
  },
  {
    "DPCode": 2592,
    "Location": "2592_MODEL_TOWN_SD-WAN",
    "Call_down_date": "25/06/2021",
    "Call_down_time": "3:15 PM",
    "Call_Closed_Date": "26/06/2021",
    "Call_Closed_Time": "2:00 PM",
    "StartDate_Time": "25/6/2021 3:15 PM",
    "EndDate_Time": "26/6/2021 2:00 PM"
  },
  {
    "DPCode": 2384,
    "Location": "2384_KIRTI_NAGAR_Router",
    "Call_down_date": "28/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "01/07/2021",
    "Call_Closed_Time": "5:30 PM",
    "StartDate_Time": "28/6/2021 9:50 AM",
    "EndDate_Time": "1/7/2021 5:30 PM"
  },
  {
    "DPCode": 2011,
    "Location": "2011_GT_ROAD_KAMLANAGAR_Router",
    "Call_down_date": "28/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "29/06/2021",
    "Call_Closed_Time": "4:45 PM",
    "StartDate_Time": "28/6/2021 9:50 AM",
    "EndDate_Time": "29/6/2021 4:45 PM"
  },
  {
    "DPCode": 2024,
    "Location": "2024_TRINAGAR_SD-WAN",
    "Call_down_date": "28/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "01/07/2021",
    "Call_Closed_Time": "4:15 PM",
    "StartDate_Time": "28/6/2021 9:50 AM",
    "EndDate_Time": "1/7/2021 4:15 PM"
  },
  {
    "DPCode": 8546,
    "Location": "8546_INST.OF_CO.SECRETARIES_OF_INDIA_SD-WAN",
    "Call_down_date": "28/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "29/06/2021",
    "Call_Closed_Time": "11:30 AM",
    "StartDate_Time": "28/6/2021 9:50 AM",
    "EndDate_Time": "29/6/2021 11:30 AM"
  },
  {
    "DPCode": 387,
    "Location": "387_WAZIRPUR_SD-WAN",
    "Call_down_date": "28/06/2021",
    "Call_down_time": "12:40 PM",
    "Call_Closed_Date": "29/06/2021",
    "Call_Closed_Time": "1:30 PM",
    "StartDate_Time": "28/6/2021 12:40 PM",
    "EndDate_Time": "29/6/2021 1:30 PM"
  },
  {
    "DPCode": 5913,
    "Location": "5913_ADARSH_NAGAR_SD-WAN",
    "Call_down_date": "30/06/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "01/07/2021",
    "Call_Closed_Time": "3:20 PM",
    "StartDate_Time": "30/6/2021 9:50 AM",
    "EndDate_Time": "1/7/2021 3:20 PM"
  },
  {
    "DPCode": 2016,
    "Location": "2016_KESHAVPURAM_(LAWRENCE_ROAD)_SD-WAN",
    "Call_down_date": "01/07/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "05/07/2021",
    "Call_Closed_Time": "3:00 PM",
    "StartDate_Time": "1/7/2021 9:50 AM",
    "EndDate_Time": "5/7/2021 3:00 PM"
  },
  {
    "DPCode": 5799,
    "Location": "5799_BADARPUR_MOHAN_COOP_SOCIETY_Router",
    "Call_down_date": "01/07/2021",
    "Call_down_time": "9:50 AM",
    "Call_Closed_Date": "06/07/2021",
    "Call_Closed_Time": "2:15 PM",
    "StartDate_Time": "1/7/2021 9:50 AM",
    "EndDate_Time": "6/7/2021 2:15 PM"
  },
  {
    "DPCode": 272,
    "Location": "272_QUAZI_HAUZ_SD-WAN",
    "Call_down_date": "01/07/2021",
    "Call_down_time": "12:50 PM",
    "Call_Closed_Date": "07/02/2021",
    "Call_Closed_Time": "3:30 PM",
    "StartDate_Time": "1/7/2021 12:50 PM",
    "EndDate_Time": "7/2/2021 3:30 PM"
  },
  {
    "DPCode": 1956,
    "Location": "1956_MAYUR_VIHAR_PHASE_II_SD-WAN",
    "Call_down_date": "02/07/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "03/07/2021",
    "Call_Closed_Time": "2:30 PM",
    "StartDate_Time": "2/7/2021 10:15 AM",
    "EndDate_Time": "3/7/2021 2:30 PM"
  },
  {
    "DPCode": 6204,
    "Location": "6204_SHAHDARA_SD-WAN",
    "Call_down_date": "02/07/2021",
    "Call_down_time": "10:15 AM",
    "Call_Closed_Date": "05/07/2021",
    "Call_Closed_Time": "5:00 PM",
    "StartDate_Time": "2/7/2021 10:15 AM",
    "EndDate_Time": "5/7/2021 5:00 PM"
  },
  {
    "DPCode": 5020,
    "Location": "5020_HARSH_VIHAR_Router",
    "Call_down_date": "02/07/2021",
    "Call_down_time": "4:00 PM",
    "Call_Closed_Date": "03/07/2021",
    "Call_Closed_Time": "12:10 PM",
    "StartDate_Time": "2/7/2021 4:00 PM",
    "EndDate_Time": "3/7/2021 12:10 PM"
  },
  {
    "DPCode": 2743,
    "Location": "2743_SAKET_SD-WAN",
    "Call_down_date": "03/07/2021",
    "Call_down_time": "3:50 PM",
    "Call_Closed_Date": "05/07/2021",
    "Call_Closed_Time": "4:00 PM",
    "StartDate_Time": "3/7/2021 3:50 PM",
    "EndDate_Time": "5/7/2021 4:00 PM"
  },
  {
    "DPCode": 2413,
    "Location": "2413_WAZIRPUR_SME_BRANCH_SD-WAN",
    "Call_down_date": "03/07/2021",
    "Call_down_time": "3:50 PM",
    "Call_Closed_Date": "05/07/2021",
    "Call_Closed_Time": "3:45 PM",
    "StartDate_Time": "3/7/2021 3:50 PM",
    "EndDate_Time": "5/7/2021 3:45 PM"
  },
  {
    "DPCode": 1445,
    "Location": "1445_HAUZ_KHAS_SD-WAN",
    "Call_down_date": "05/07/2021",
    "Call_down_time": "9:45 AM",
    "Call_Closed_Date": "06/07/2021",
    "Call_Closed_Time": "6:00 PM",
    "StartDate_Time": "5/7/2021 9:45 AM",
    "EndDate_Time": "6/7/2021 6:00 PM"
  },
  {
    "DPCode": 5421,
    "Location": "5421_VISHWAS_NAGAR_SD-WAN",
    "Call_down_date": "05/07/2021",
    "Call_down_time": "9:45 AM",
    "Call_Closed_Date": "06/07/2021",
    "Call_Closed_Time": "2:15 PM",
    "StartDate_Time": "5/7/2021 9:45 AM",
    "EndDate_Time": "6/7/2021 2:15 PM"
  },
  {
    "DPCode": 5021,
    "Location": "5021_SPECIALISED_SME_BRANCH_Router Okhla",
    "Call_down_date": "06/07/2021",
    "Call_down_time": "4:30 PM",
    "Call_Closed_Date": "07/07/2021",
    "Call_Closed_Time": "12:30 PM",
    "StartDate_Time": "6/7/2021 4:30 PM",
    "EndDate_Time": "7/7/2021 12:30 PM"
  },
  {
    "DPCode": 6064,
    "Location": "6064_LAJPATNAGAR_CENTRAL_MARKET_SD-WAN",
    "Call_down_date": "06/07/2021",
    "Call_down_time": "5:00 PM",
    "Call_Closed_Date": "07/07/2021",
    "Call_Closed_Time": "4:05 PM",
    "StartDate_Time": "6/7/2021 5:00 PM",
    "EndDate_Time": "7/7/2021 4:05 PM"
  },
  {
    "DPCode": 2593,
    "Location": "2593_JANAKPURI_SD-WAN",
    "Call_down_date": "07/07/2021",
    "Call_down_time": "3:30 PM",
    "Call_Closed_Date": "08/07/2021",
    "Call_Closed_Time": "10:00 AM",
    "StartDate_Time": "7/7/2021 3:30 PM",
    "EndDate_Time": "8/7/2021 10:00 AM"
  },
  {
    "DPCode": 5799,
    "Location": "BADARPUR",
    "Call_down_date": "08/07/2021",
    "Call_down_time": "10:20 AM",
    "Call_Closed_Date": "12/07/2021",
    "Call_Closed_Time": "3:30 PM",
    "StartDate_Time": "8/7/2021 10:20 AM",
    "EndDate_Time": "12/7/2021 3:30 PM"
  },
  {
    "DPCode": 4889,
    "Location": "4889_NANGLOI_JAT_SD-WAN",
    "Call_down_date": "08/07/2021",
    "Call_down_time": "5:00 PM",
    "Call_Closed_Date": "09/07/2021",
    "Call_Closed_Time": "4:40 PM",
    "StartDate_Time": "8/7/2021 5:00 PM",
    "EndDate_Time": "9/7/2021 4:40 PM"
  },
  {
    "DPCode": 8670,
    "Location": "8670_NEW_KALINDI_COLLEGE_SD-WAN",
    "Call_down_date": "08/07/2021",
    "Call_down_time": "5:00 PM",
    "Call_Closed_Date": "09/07/2021",
    "Call_Closed_Time": "4:40 PM",
    "StartDate_Time": "8/7/2021 5:00 PM",
    "EndDate_Time": "9/7/2021 4:40 PM"
  },
  {
    "DPCode": 1974,
    "Location": "1974_GANDHINAGAR_SD-WAN",
    "Call_down_date": "09/07/2021",
    "Call_down_time": "10:20 AM",
    "Call_Closed_Date": "12/07/2021",
    "Call_Closed_Time": "11:15 AM",
    "StartDate_Time": "9/7/2021 10:20 AM",
    "EndDate_Time": "12/7/2021 11:15 AM"
  },
  {
    "DPCode": 2593,
    "Location": "2593_JANAKPURI_SD-WAN",
    "Call_down_date": "09/07/2021",
    "Call_down_time": "10:20 AM",
    "Call_Closed_Date": "12/07/2021",
    "Call_Closed_Time": "3:00 PM",
    "StartDate_Time": "9/7/2021 10:20 AM",
    "EndDate_Time": "12/7/2021 3:00 PM"
  },
  {
    "DPCode": 5421,
    "Location": "5421_VISHWAS_NAGAR_SD-WAN",
    "Call_down_date": "13/07/2021",
    "Call_down_time": "12:10 PM",
    "Call_Closed_Date": "14/07/2021",
    "Call_Closed_Time": "4:30 PM",
    "StartDate_Time": "13/7/2021 12:10 PM",
    "EndDate_Time": "14/7/2021 4:30 PM"
  },
  {
    "DPCode": 2016,
    "Location": "2016_KESHAVPURAM_(LAWRENCE_ROAD)_SD-WAN",
    "Call_down_date": "14/07/2021",
    "Call_down_time": "1:40 PM",
    "Call_Closed_Date": "15/07/2021",
    "Call_Closed_Time": "2:45 PM",
    "StartDate_Time": "14/7/2021 1:40 PM",
    "EndDate_Time": "15/7/2021 2:45 PM"
  },
  {
    "DPCode": 3333,
    "Location": "3333_KARKARDOOMA_SD-WAN",
    "Call_down_date": "15/07/2021",
    "Call_down_time": "12:25 PM",
    "Call_Closed_Date": "16/07/2021",
    "Call_Closed_Time": "4:00 PM",
    "StartDate_Time": "15/7/2021 12:25 PM",
    "EndDate_Time": "16/7/2021 4:00 PM"
  },
  {
    "DPCode": 2016,
    "Location": "2016_KESHAVPURAM_(LAWRENCE_ROAD)_SD-WAN",
    "Call_down_date": "16/07/2021",
    "Call_down_time": "9:45 AM",
    "Call_Closed_Date": "19/07/2021",
    "Call_Closed_Time": "4:20 PM",
    "StartDate_Time": "16/7/2021 9:45 AM",
    "EndDate_Time": "19/7/2021 4:20 PM"
  },
  {
    "DPCode": 2592,
    "Location": "2592_MODEL_TOWN_SD-WAN",
    "Call_down_date": "16/07/2021",
    "Call_down_time": "9:45 AM",
    "Call_Closed_Date": "17/07/2021",
    "Call_Closed_Time": "4:00 PM",
    "StartDate_Time": "16/7/2021 9:45 AM",
    "EndDate_Time": "17/7/2021 4:00 PM"
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
  if(modifier === 'PM' && parseInt(hours, 10) !== 12) {
    hours = parseInt(hours, 10) + 12;
  }
  //(hours === '12' ? hours = '00' : ((modifier === 'PM' || modifier === 'pm') ? hours = parseInt(hours, 10) + 12 : ""));
  return `${hours}:${minutes}`;
}

function dateRange(startDate, endDate, steps = 1) {
  let dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }
  dateArray = dateArray.map(i => moment(i).format('YYYY-MM-DD'));
  return dateArray;
}

function timeDiff(dataList) {
  dataList = dataList.map(i => {
    i.Call_down_date = (i.Call_down_date).split("/").reverse().join("-");
    i.Call_Closed_Date = (i.Call_Closed_Date).split("/").reverse().join("-");
    i.actualStart = i.Call_down_time;
    i.actualEnd = i.Call_Closed_Time;
    i.allDates = dateRange(i.Call_down_date, i.Call_Closed_Date);
    i.newDates = (i.allDates).filter(item => !holiday.includes(item));
    i.Call_down_time = convertTime12to24(i.Call_down_time);
    i.Call_Closed_Time = convertTime12to24(i.Call_Closed_Time);
    i.days = (new Date(i.Call_Closed_Date) - new Date(i.Call_down_date)) / (1000 * 60 * 60 * 24);
    i.daysMinusHolidays = ((i.newDates).length) - 1;
    i.start = `${i.Call_down_date} ${i.Call_down_time}`;
    i.start_last = `${i.Call_down_date} 18:00`;
    i.end_first = `${i.Call_Closed_Date} 09:00`;
    i.end = `${i.Call_Closed_Date} ${i.Call_Closed_Time}`;
    i.startDiff = (new Date(i.start_last).getTime() - new Date(i.start).getTime()) / 1000 / 60;
    i.endDiff = (new Date(i.end).getTime() - new Date(i.end_first).getTime()) / 1000 / 60 || 0;
    let msDifference =  (new Date(i.end).getTime() - new Date(i.start).getTime()) / 1000 / 60 || 0;
    i = {...i};
    if(i.daysMinusHolidays === 1) {
      i.finalMinutes = i.startDiff + i.endDiff;
    } else {
      i.finalMinutes = i.startDiff + i.endDiff + ((i.daysMinusHolidays - 1) * 540);
    }
    i.diff = msDifference;
    console.log(i);
    return i;
  });
  console.log(dataList);
}

// formatHolidays(holiday);
const dataNew = timeDiff(actualData);
console.log(dataNew); 
// console.log(h);
