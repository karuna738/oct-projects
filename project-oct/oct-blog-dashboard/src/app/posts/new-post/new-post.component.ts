import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  imgSrc: any = './assets/placeholder.svg';
  constructor(private fb: FormBuilder) {}
  myForm!: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      title: '',
      permalink: '',
      excerpt: '',
      category: '',
      image: '',
      content: ''
    });
  }
  
  onSubmit(){
    console.log('postData',this.myForm.value)
  }

}
