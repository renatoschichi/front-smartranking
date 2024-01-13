import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlayersComponent } from './favorite-players.component';

describe('FavoritePlayersComponent', () => {
  let component: FavoritePlayersComponent;
  let fixture: ComponentFixture<FavoritePlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritePlayersComponent]
    });
    fixture = TestBed.createComponent(FavoritePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
