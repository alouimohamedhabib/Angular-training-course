import { Component, OnInit } from "@angular/core";
import { db } from "./services/db";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "googlegraveyard";
  graveyardData: any;
  dataBackup: any;

  ngOnInit() {
    this.dataBackup = this.graveyardData = db;
  }

  /**
   * Search for product
   * @param data
   */
  searchProduct(data) {
    const keyword:string = data.target.value;
    if (keyword.trim().length == 0) {
      this.graveyardData = this.dataBackup;
      return;
    }
    // filter the data object
    this.graveyardData = this.dataBackup.filter(function(item) {
      let lowerKeyword = keyword.toLowerCase();
      return item.name.toLowerCase().indexOf(lowerKeyword) > -1;
    });
  }
}
