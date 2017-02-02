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
  viewsettings: boolean = false;
  checkbox: boolean = false;
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
    var count = f.value['number'];
    var sentence = f.value['resumeSentence']
    var info:any = {text: text, count: count, sentence: sentence};
    console.log(f.value['fast']);
    this.checkbox = f.value['fast'];
      this.summary.send(info)
        .subscribe((res: Response) => { 
          this.result = res;
          console.log(this.result);
          // this.result = Observable
          //         .from(this.result)
          //         .scan((acc :any, curr: any)=> acc + curr)
          //         .zip(Observable.interval(20), (x)=> x);      
      })
  
     
    }
    settings() {
      if(this.viewsettings) {
        this.viewsettings = false;
      } else {
        this.viewsettings = true;
      }
    }
}
