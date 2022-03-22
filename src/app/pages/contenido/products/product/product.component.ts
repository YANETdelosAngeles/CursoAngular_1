import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  @Output() addToCardClick = new EventEmitter<Product>();//evento personalizado
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    //console.log("Click",this.product)
    this.addToCardClick.emit(this.product);
  }

}
