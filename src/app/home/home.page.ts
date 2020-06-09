import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private http: HttpClient) {}

  todayStats;

  ngOnInit() {
    this.covidToday();
  }

  covidToday() {
    this.http
      .get("https://covid19.th-stat.com/api/open/today")
      .subscribe((data) => {
        this.todayStats = data;
        console.log(this.todayStats);
      });
  }
}
