import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ProductService } from '@src/app/main/market/shared/service/product.service';

export interface Product {
  id: string | number;
  title: string;
  description?: string;
  imagePath?: string;
  labels: EProductLabel;
  price: number;
}

export enum EProductLabel {
  NOVO = 'NOVO',
  USADO = 'USADO',
  SEMINOVO = 'SEMINOVO',
  COLECIONADOR = 'COLECIONADOR'
}

export const products: Product[] = [
  { id: 1, title: 'Kingdom Hearts', imagePath: 'assets/kingdom.jpg', labels: EProductLabel.SEMINOVO, price: 10.0 },
  { id: 2, title: 'Metal Gear', imagePath: 'assets/mgs.jpg', labels: EProductLabel.NOVO, price: 10.0 },
  { id: 3, title: 'Streets of Rage', imagePath: 'assets/street.jpg', labels: EProductLabel.COLECIONADOR, price: 10.0 },
  { id: 4, title: 'Sunset Riders', imagePath: 'assets/sunset.jpg', labels: EProductLabel.COLECIONADOR, price: 30.0 },
  { id: 5, title: 'Death Stranding', imagePath: 'assets/dstranding.jpg', labels: EProductLabel.NOVO, price: 20.0 },
];

@Component({
  selector: 'app-market-shell',
  templateUrl: './market-shell.component.html',
  styleUrls: ['./market-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketShellComponent implements OnInit {
  productList$: Observable<any>;
  searchText$ = new Subject();

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productList$ = of(products);

    this.searchText$.subscribe((text) => {
      console.log(`game-trade.com/api/products?strSearch=${text}`);
    });
  }

  onSearchTextChanged(searchText: string): void {
    this.searchText$.next(searchText);
  }
}
