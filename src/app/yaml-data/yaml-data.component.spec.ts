import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlDataComponent } from './yaml-data.component';

describe('YamlDataComponent', () => {
  let component: YamlDataComponent;
  let fixture: ComponentFixture<YamlDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YamlDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YamlDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
