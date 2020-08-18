import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnwserPage } from './anwser.page';

describe('AnwserPage', () => {
  let component: AnwserPage;
  let fixture: ComponentFixture<AnwserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnwserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnwserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
