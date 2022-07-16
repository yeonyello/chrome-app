const quotes = [
    {
        quote: "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라",
        author: "도서 '어떤 하루'",
    },
    {
        quote: "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다",
        author: "도서 '프린세스, 라 브라바!'",
    },
    {
        quote: "이것 또한 지나가리라",
        author: "랜터 윌슨 스미스",
    },
    {
        quote: "열정을 잃고 실패에서 실패로 걸어가는 것이 성공이다",
        author: "윈스턴 처칠",
    },
    {
        quote: "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
        author: "엘리너 루즈벨트",
    },
    {
        quote: "성공이 노력보다 먼저 나타나는 유일한 곳은 사전이다",
        author: "비달 사순",
    },
    {
        quote: "조금도 도전하지 않으려 하는 것이 인생에서 가장 위험한 일이다",
        author: "오프라 윈프리",
    },
    {
        quote: "노력하는 사람에게 불가능이란 없다",
        author: "알렉산더 대왕",
    },
    {
        quote: "태도는 사소한 것이지만 그것이 만드는 차이는 엄청나다",
        author: "윈스턴 처칠",
    },
    {
        quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
        author: "제임스 딘",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText =  todaysQuote.quote;
author.innerText = todaysQuote.author;