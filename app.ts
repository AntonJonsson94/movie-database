const submitButton = document.querySelector("button") as HTMLButtonElement;
const searchByTitle = document.querySelector(".search") as HTMLInputElement;
const container = document.querySelector(".container") as HTMLDivElement;
const releaseDateContainer = document.querySelector(
    ".release"
) as HTMLParagraphElement;
const runTimeContainer = document.querySelector(
    ".runtime"
) as HTMLParagraphElement;
const boxOfficeContainer = document.querySelector(
    ".box-office"
) as HTMLParagraphElement;
const awardsContainer = document.querySelector(
    ".awards"
) as HTMLParagraphElement;
const releaseData = document.querySelector(
    ".release-data"
) as HTMLParagraphElement;
const runtTimeData = document.querySelector(
    ".runtime-data"
) as HTMLParagraphElement;
const boxOfficeData = document.querySelector(
    ".box-office-data"
) as HTMLParagraphElement;
const awardsData = document.querySelector(
    ".awards-data"
) as HTMLParagraphElement;
const apiUrl = "http://www.omdbapi.com/?t=";
const movie = searchByTitle;
const apiKey = "&apikey=765ad4bd";
const posterApi = "http://img.omdbapi.com/?t=";

async function GetData() {
    const response = await fetch(apiUrl + movie.value + apiKey);
    const data = await response.json();
    const release = data.Released;
    const runTime = data.Runtime;
    const boxOffice = data.BoxOffice;
    const awards = data.Awards;

    releaseData.innerHTML = release;
    runtTimeData.innerHTML = runTime;
    boxOfficeData.innerHTML = boxOffice;
    awardsData.innerHTML = awards;

    console.log(data);
}
async function getPoster() {
    const response = await fetch(posterApi + movie.value + apiKey);
    const data = await response.json();
    console.log(data);
    const posterCard = document.createElement("img") as HTMLImageElement;
    posterCard.setAttribute("src", data);
}
submitButton.addEventListener("click", () => {
    searchByTitle.innerText = "";
    GetData();
});
