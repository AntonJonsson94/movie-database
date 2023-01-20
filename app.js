"use strict";
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
const submitButton = document.querySelector("button");
const searchByTitle = document.querySelector(".search");
const container = document.querySelector(".container");
const releaseDate = document.querySelector(".release");
const runTime = document.querySelector(".runtime");
const boxOffice = document.querySelector(".box-office");
const awards = document.querySelector(".awards");
const apiUrl = "http://www.omdbapi.com/?t=";
const movie = searchByTitle;
const apiKey = "&apikey=765ad4bd";
const posterApi = "http://img.omdbapi.com/?t=";
function GetData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrl + movie.value + apiKey);
        const data = yield response.json();
        const releaseDate = document.createElement("p");
        const runTime = document.createElement("p");
        releaseDate.innerHTML = data.Released;
        runTime.innerHTML = data.Runtime;
        releaseDate.appendChild(releaseDate);
        container.appendChild(runTime);
        console.log(data);
    });
}
function getPoster() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(posterApi + movie.value + apiKey);
        const data = yield response.json();
        console.log(data);
        const posterCard = document.createElement("img");
        posterCard.setAttribute("src", data);
    });
}
submitButton.addEventListener("click", (event) => {
    event.preventDefault;
    GetData();
    getPoster();
});
