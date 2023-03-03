import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CghistComponent } from './cghist.component';

describe('CghistComponent', () => {
  let component: CghistComponent;
  let fixture: ComponentFixture<CghistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CghistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CghistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
