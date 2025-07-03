import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PromotionService } from '../../services/promotion-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  currentAd!: string;
  mySub1!: Subscription;
  constructor(
    private promotion: PromotionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mySub1 = this.promotion.getCurrentAd().subscribe({
      next: (response) => {
        console.log(response);
        this.currentAd = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnDestroy(): void {
    this.mySub1.unsubscribe();
  }
}
