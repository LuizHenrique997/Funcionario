import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Schedule5Page } from './schedule5.page';

describe('Schedule5Page', () => {
  let component: Schedule5Page;
  let fixture: ComponentFixture<Schedule5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Schedule5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
