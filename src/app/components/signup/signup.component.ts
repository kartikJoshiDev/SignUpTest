import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  isSubmited: boolean;

  constructor(private formBuild : FormBuilder,private commonService: CommonService,private route: Router) { }

  ngOnInit(): void {

    this.formValidation();


  }

  get username(){
    return this.signupForm.get('username');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get fullname(){
    return this.signupForm.get('fullName');
  }

  get password(){
    return this.signupForm.get('password');
  }

  formValidation(){
    this.signupForm = this.formBuild.group({
      username:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}')]],
      fullName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]]
    });
  }  

  submitSignupForm(){
    
    this.isSubmited = true;
    if(this.signupForm.valid){
      this.commonService.signUpUser({...this.signupForm.value,...{devices:[{deviceId : "1234",deviceType:"I" , deviceToken:"1234"}]}}).subscribe((res:any)=>{
        if(res.result){
          this.commonService.saveToken(res.result.token);
          this.route.navigateByUrl('/dashboard');
        }
        else{
          alert(res.message);
        }
      },(err)=>{

        alert(err);
      });
      this.isSubmited = false;
    }
  }

}
