import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ChartJs";
  url = "http://www.somaku.com/todos";
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  public lineChartType = "line";
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private http: HttpClient) {}

  ngOnInit() { 
      this.http.get(this.url).subscribe((todos: any) => {
        let dataFiltred: any = todos.filter((item, key) => {
          // console.log(item)
          if (key > 6 && key < 12) return true;
        });
        dataFiltred = dataFiltred.map((item: any) =>
          item.completed === false ? "-10" : "10"
        );
        // Return values 10 or -10
        this.lineChartData = [
          {
            data: [...dataFiltred],
            label: "this is an updated label"
          }
        ];
      })
    
  }
}
