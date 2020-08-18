import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Schedule4Page } from './schedule4.page';

describe('Schedule4Page', () => {
  let component: Schedule4Page;
  let fixture: ComponentFixture<Schedule4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Schedule4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
