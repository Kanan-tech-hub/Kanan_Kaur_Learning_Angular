import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car';
import { Content } from '../models/content';

@Component({
  selector: 'app-modify-car-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-car-item.html',
})
export class ModifyCarItem implements OnInit {
  carForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // This creates the form object that the HTML will bind to
    this.carForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      creator: ['', Validators.required],
      type: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.carService.getContentItem(id).subscribe(car => {
        if (car) {
          this.isEditMode = true;
          this.carForm.patchValue(car);
          this.carForm.get('id')?.disable();
        }
      });
    }
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const carData: Content = this.carForm.getRawValue();
      if (this.isEditMode) {
        this.carService.updateContent(carData).subscribe(() => this.finish());
      } else {
        this.carService.addContent(carData).subscribe(() => this.finish());
      }
    }
  }

  private finish(): void {
    this.carForm.reset();
    this.router.navigate(['/home']);
  }
}