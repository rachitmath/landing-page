import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Industries {
  id: number;
  src: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public industries: Industries[] = [];
  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });

    this.industries = [
      {
        id: 1,
        src: 'best.png'
      },
      {
        id: 2,
        src: 'cashea.png'
      },
      {
        id: 3,
        src: 'moody.png'
      },
      {
        id: 4,
        src: 'fitch.png'
      },
      {
        id: 5,
        src: 'sp.png'
      },
      {
        id: 6,
        src: 'thesurety.png'
      },
      {
        id: 7,
        src: 'sio.png'
      },
      {
        id: 8,
        src: 'fiscal.png'
      }
    ];
  }

  // tslint:disable-next-line: typedef
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem('userData', JSON.stringify(this.loginForm.value));
      this.router.navigate(['/dashboard']);
    }
  }
}
