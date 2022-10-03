import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Medicine } from 'src/app/Models/MedicideModel';
import { Category } from 'src/app/Models/CategoryModel';
import { MedicineType } from 'src/app/Models/TypesModel';
import { CategoryTypeServiceService } from 'src/app/Services/category-type-service.service';
import { MedicineServiceService } from 'src/app/Services/medicine-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  medicineList: Medicine[] = [];
  types: MedicineType[] = [];
  categories: Category[] = [];

  filters: any = {
    category: 'all',
    type: 'all',
  };


  constructor(
    private MedicineService: MedicineServiceService,
    private CategoryTypeService: CategoryTypeServiceService,
    private ActRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.types = this.CategoryTypeService.getTypes();
    this.categories = this.CategoryTypeService.getCategories();
    
    this.ActRouter.paramMap.subscribe((params) => {
      this.filters.category = params.get('category');
      this.filters.type = params.get('type');
      this.medicineList = this.MedicineService.GetMedicines(
        this.filters.category,
        this.filters.type
      );
    });
  }

  typeAndCategory() {
    this.router.navigate([
      '/products',
      this.filters.type,
      this.filters.category,
    ]);
  }
}