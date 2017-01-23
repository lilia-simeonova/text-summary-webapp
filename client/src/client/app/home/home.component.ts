import { NameListService } from '../shared/index';
import { Component, ElementRef, ViewChild, Renderer, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Observable }     from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SummaryService } from './summary.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
//import summary = require('text-summary');
//const summary: any = require('text-summary');
//import * as txt from 'text-summary';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent  {
  constructor(private summary: SummaryService, private renderer: Renderer) { }; 
  result: any;
  modify(value: any) {
    console.log(value.newText);
      this.summary.send(value.newQuestion)
        .subscribe((res: Response) => { 
          this.result = res;
          console.log(this.result);
        })
    }
  onSubmit(f: NgForm) {
    var text = f.value['newText'];
    this.summary.send(text)
        .subscribe((res: Response) => { 
          this.result = res;
          this.result = Observable
        .from(this.result)
        .scan((acc, curr)=> acc + curr)
        .zip(Observable.interval(20), (x)=> x);
        })
        
}

}
