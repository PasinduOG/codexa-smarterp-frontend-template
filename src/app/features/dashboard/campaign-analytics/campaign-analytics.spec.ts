import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignAnalytics } from './campaign-analytics';

describe('CampaignAnalytics', () => {
  let component: CampaignAnalytics;
  let fixture: ComponentFixture<CampaignAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
