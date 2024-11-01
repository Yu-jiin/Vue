let date = new Date();

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  const emojiData = JSON.parse(localStorage.getItem('emojis') || '{}');

  // 날짜와 이모지를 표시하는 부분
  const dateElements = dates.map((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
    const dateKey = `${viewYear}-${viewMonth + 1}-${date}`;
    const emoji = emojiData[dateKey] ? `<span class="emoji">${emojiData[dateKey]}</span>` : '';
    return `<div class="date"><span class="${condition}">${date}</span>${emoji}</div>`;
  }).join('');

  document.querySelector('.dates').innerHTML = dateElements;

  // 오늘 날짜 표시
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

renderCalender();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalender();
}

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalender();
}

const goToday = () => {
  date = new Date();
  renderCalender();
};

let selectedDate = null;

// 날짜 클릭 시 이모지 선택 모달 표시
document.querySelector('.dates').addEventListener('click', (event) => {
  if (event.target.classList.contains('this')) {
    selectedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${event.target.innerText}`;
    document.getElementById('emojiModal').style.display = 'block';
  }
});

// 이모지 선택 시 날짜에 이모지 표시 및 저장
function selectEmoji(emoji) {
  document.getElementById('emojiModal').style.display = 'none';
  const emojiData = JSON.parse(localStorage.getItem('emojis') || '{}');
  emojiData[selectedDate] = emoji;
  localStorage.setItem('emojis', JSON.stringify(emojiData));
  renderCalender();  // 달력 다시 그려서 이모지 반영
}
