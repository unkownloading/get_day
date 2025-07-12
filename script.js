'use strict';

const today = new Date();

function getLocalDateString(zone) {
  return today.toLocaleDateString(zone, { weekday: 'long' });
}

function getTodayMessage() {
  const todayEN = getLocalDateString('en-US');
  const todayTW = getLocalDateString('zh-TW');

  switch (todayEN) {
    case 'Sunday':
      console.log(`${todayTW}，猴子休息日`);

      break;
    case 'Monday':
      console.log(`${todayTW}，猴子穿新衣`);

      break;
    case 'Tuesday':
      console.log(`${todayTW}，猴子肚子餓`);

      break;
    case 'Wednesday':
      console.log(`${todayTW}，猴子去爬山`);

      break;
    case 'Thursday':
      console.log(`${todayTW}，猴子去考試`);

      break;
    case 'Friday':
      console.log(`${todayTW}，猴子去跳舞`);

      break;
    case 'Saturday':
      console.log(`${todayTW}，猴子去斗六`);

      break;
  }
}

getTodayMessage();
