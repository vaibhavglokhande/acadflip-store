import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UserInfo {
  firstname: string;
  lastname?: string;
  age: number;
}

@Component({
  selector: 'app-reactive-form-advanced',
  templateUrl: './reactive-form-advanced.component.html',
  styleUrls: ['./reactive-form-advanced.component.css']
})
export class ReactiveFormAdvancedComponent implements OnInit {

  concertSignUpForm: FormGroup;

  concertRegistrationForm: FormGroup;

  ticketType = [
    { id: 1, price: 500, type: 'Silver' },
    { id: 2, price: 1000, type: 'Gold' },
    { id: 3, price: 1500, type: 'Platinum' },
  ]


  userSelectedTicketTypeId;

  ticketValue: number;

  discount: number = 0;

  tax: number = 0;

  grandTotal: number = 0;

  ticketTotal: number = 0;

  userCount: number = 0;

  intermediateTicketTotal: number = 0;

  userSelectedTicketType;

  private readonly DISCOUNT_VALUE: number = 0.1;

  private readonly TAX_VALUE: number = 0.18;

  constructor(private formBuilder: FormBuilder, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.initConcertSignUpForm();
    this.initConcertRegistrationForm();
  }

  /**
   * Initialize the concert sign up form - Used in Step 1
   *
   * @memberof ReactiveFormAdvancedComponent
   */
  initConcertSignUpForm() {
    this.concertSignUpForm = this.formBuilder.group({
      userInfo: this.getUserInfoFormControl(),
      ticketType: [this.ticketType[2].id, [Validators.required]]
    });
  }

  /**
   * Initialize the concert registration form - Used in Step 2
   *
   * @memberof ReactiveFormAdvancedComponent
   */
  initConcertRegistrationForm() {
    this.concertRegistrationForm = this.formBuilder.group({
      users: this.formBuilder.array([])
    });
  }

  /**
   *
   * Initialize the User Info Form Group.
   * @param {UserInfo} [userInfo={ firstname: '', lastname: '', age: 18 }]
   * @returns {FormGroup}
   * @memberof ReactiveFormAdvancedComponent
   */
  getUserInfoFormControl(userInfo: UserInfo = { firstname: '', lastname: '', age: 18 }) {
    return this.formBuilder.group({
      firstname: [userInfo.firstname, [Validators.required]],
      lastname: [userInfo.lastname],
      age: [userInfo.age, [Validators.min(5)]]
    });
  }

  /**
   *
   *
   * @memberof ReactiveFormAdvancedComponent
   */
  submitConcertSignUpForm() {
    this.userSelectedTicketTypeId = this.concertSignUpForm.controls.ticketType.value;
    const userInfo: UserInfo = this.concertSignUpForm.controls.userInfo.value;
    if ((this.concertRegistrationForm.controls.users as FormArray).length > 0) {
      (this.concertRegistrationForm.controls.users as FormArray).at(0).setValue(userInfo);
    } else {
      (this.concertRegistrationForm.controls.users as FormArray).push(this.getUserInfoFormControl(userInfo));
    }

  }

  /**
   * Total Calculation
   * 
   * 
   * discounted_ticket_value = (total_ticket_value - discount)
   * 
   * total = sum of all total_ticket_value
   * 
   * grand_total = discounted_ticket_value + tax
   * 
   * Discount Calculation
   * if user age <=15 discount =  ticket_value*discount_value
   * 
   * Tax Calculation
   * tax = total* tax_value
   * 
   * Total Ticket Value
   * for each user => total_ticket_value = isDiscountAllowed? discounted_ticket_value: ticket_value
   * @memberof ReactiveFormAdvancedComponent
   */
  submitConcertRegistrationForm() {

    this.discount = 0;

    this.tax = 0;

    this.grandTotal = 0;

    this.ticketTotal = 0;

    this.userCount = 0;

    this.intermediateTicketTotal = 0;

    const ticket = this.ticketType.find(item => item.id === this.userSelectedTicketTypeId);
    this.ticketValue = ticket.price;
    this.userSelectedTicketType = ticket.type;
    const discountValue = ticket.price * this.DISCOUNT_VALUE; // Calculate Discount


    (this.concertRegistrationForm.controls.users.value as UserInfo[]).forEach(user => {
      if (user.age <= 15) {
        this.ticketTotal += ticket.price - discountValue;
        this.discount += discountValue;
      }
      else {
        this.ticketTotal += ticket.price;
      }
      this.intermediateTicketTotal += ticket.price; // Bug fix: Add ticket price to previous intermediateTicketTotal.
    }); // Calculate ticket value.

    this.tax = this.ticketTotal * this.TAX_VALUE;

    this.userCount = (this.concertRegistrationForm.controls.users.value as UserInfo[]).length;

    this.grandTotal = this.ticketTotal + this.tax;
  }

  addUser() {
    (this.concertRegistrationForm.controls.users as FormArray).push(this.getUserInfoFormControl());
  }

  removeUser(index: number) {
    if (index === 0) {
      this.snackbar.open('You cannot remove the first person.', 'Ok.');
    } else {
      (this.concertRegistrationForm.controls.users as FormArray).removeAt(index);
    }
  }


}
