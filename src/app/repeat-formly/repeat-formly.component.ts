import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import * as data from "forms/formArray.json";

@Component({
  selector: "app-repeat-formly",
  templateUrl: "./repeat-formly.component.html",
  styleUrls: ["./repeat-formly.component.less"],
})
export class RepeatFormlyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let sortedFormlyArray = data.ngxForm[0].fieldArray.fieldGroup;

    let naw = sortedFormlyArray.sort(
      (a, b) => 0 - (a.order > b.order ? -1 : 1)
    );

    this.fields[0].fieldArray.fieldGroup = naw;
  }

  form = new FormGroup({});
  model = {
    investments: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = data.ngxForm;

  submit() {
    alert(JSON.stringify(this.model));
    console.log(this.fields);
  }
}
