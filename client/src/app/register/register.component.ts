import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;


  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.intitializeForm();
  }

  intitializeForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(), 
      confirmPassword: new FormControl(),
    })
  }


  register() {
    console.log(this.registerForm.value)
    // this.accountService.register(this.model).subscribe(response => {
    //   console.log(response);
    //   this.cancel();
    // }, error => {
    //   console.log(error);
    //   this.toastr.error(error.error);
    // })
  }


  cancel(){
    console.log("cancelled");
    this.cancelRegister.emit(false);
  }

}
