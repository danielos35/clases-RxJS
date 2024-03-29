import { ajax } from "rxjs/ajax";
import { endWith, startWith } from "rxjs";
const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Cargando...";

const body = document.querySelector("body");

ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true), endWith(false))
  .subscribe((res) => {
    if (res === true) {
      body.append(loadingDiv);
    } else {
      document.querySelector(".loading").remove();
    }
    console.log(res);
  });
