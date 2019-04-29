import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ChartType, Chart } from "chart.js";
import { SingleDataSet, Label, Color } from "ng2-charts";
import { config } from "./config/config";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "ChartJs";
  url = "http://www.somaku.com/todos";

  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = "doughnut";
  public bgColor: Color[] = [
    {
      // grey
      backgroundColor:
        "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
      borderColor: "purple",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  @ViewChild("myChart") myChart: ElementRef;
  @ViewChild("cityName") cityName: ElementRef;
  cityData: any = null;
  cityNameFromInput = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  ngAfterViewInit() {
    /*  this.http.get(this.url).subscribe((todos: any) => {
      let dataFiltred: any = todos.filter((item, key) => {
        // console.log(item)
        if (key > 6 && key < 12) return true;
      });
      dataFiltred = dataFiltred.map((item: any) =>
        item.completed === false ? "-10" : "10"
      );
      // Return values 10 or -10
      //...dataFiltred
      const ctx = (<HTMLCanvasElement>this.myChart.nativeElement).getContext(
        "2d"
      );
      const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
      purple_orange_gradient.addColorStop(1, "rgba(199, 150, 239, 0.1)");
      purple_orange_gradient.addColorStop(0, "rgba(199, 150, 239, 1)");

      const bar_chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["A", "B", "C", "D"],
          datasets: [
            {
              label: "# of Votes",
              data: [...dataFiltred],
              backgroundColor: purple_orange_gradient,
              hoverBackgroundColor: purple_orange_gradient,
              hoverBorderWidth: 2,
              hoverBorderColor: "purple",
              borderWidth: 5,
              borderColor: "#a77efc"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    });*/
    // initialise the chart
  }

  /**
   * Search for weather forcast by city: string
   */
  searchWeather() {
    this.cityNameFromInput = this.cityName.nativeElement.value;

    const url =
      config.ENDPOINT_URL +
      this.cityNameFromInput +
      "&APPID=" +
      config.WEATHER_API_KEY;
    this.http.get(url).subscribe(data => {
      this.cityData = data;
    });
  }
}
