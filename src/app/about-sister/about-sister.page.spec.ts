import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutSisterPage } from './about-sister.page';

describe('AboutSisterPage', () => {
  let component: AboutSisterPage;
  let fixture: ComponentFixture<AboutSisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
