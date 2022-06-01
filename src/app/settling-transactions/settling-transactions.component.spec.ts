import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlingTransactionsComponent } from './settling-transactions.component';

describe('SettlingTransactionsComponent', () => {
  let component: SettlingTransactionsComponent;
  let fixture: ComponentFixture<SettlingTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlingTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
