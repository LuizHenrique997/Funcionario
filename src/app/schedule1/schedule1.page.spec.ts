import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Schedule1Page } from './schedule1.page';

describe('Schedule1Page', () => {
  let component: Schedule1Page;
  let fixture: ComponentFixture<Schedule1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Schedule1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
