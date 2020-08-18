import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Schedule3Page } from './schedule3.page';

describe('Schedule3Page', () => {
  let component: Schedule3Page;
  let fixture: ComponentFixture<Schedule3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Schedule3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
