import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import  *  as  data  from  'forms/register.json';

@Component({
  selector: 'app-load-formly',
  templateUrl: './load-formly.component.html',
  styleUrls: ['./load-formly.component.less']
})
export class LoadFormlyComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = data.ngxForm;

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}
