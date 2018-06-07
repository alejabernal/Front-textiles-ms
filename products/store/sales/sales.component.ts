import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sales-service/sale.service';
import { BillProduct } from '../../models/billProduct.model';
import { ProductService } from '../sales-service/product.service';
import { Product } from '../../models/product.model';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: BillProduct[];	

  constructor(	private saleService: SaleService,
  				private productService: ProductService ) { }

  ngOnInit() {
  	this.getSales();
  }


  getSales(){
  	this.saleService.getBillProducts('sales-products').subscribe(sales => this.sales = sales);
  }

}
