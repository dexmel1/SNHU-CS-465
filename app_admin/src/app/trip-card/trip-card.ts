import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip';
import { Authentication } from '../services/authentication';
import { TripData } from '../services/trip-data';


@Component({
  selector: 'app-trip-card',
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authentication: Authentication,
    private tripData: TripData
  ) {}


  ngOnInit(): void {
    
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn()
  {
    return this.authentication.isLoggedIn();
  }

  public deleteTrip(tripCode: string): void {
    if (confirm(`Are you sure you want to delete trip ${tripCode}?`)) {
      this.tripData.deleteTrip(tripCode).subscribe({
        next: (res) => {
          console.log(`Trip ${tripCode} deleted successfully`);
          window.location.reload();
        },
        error: (err) => {
          console.error('Failed to delete trip:', err);
          alert('Failed to delete trip');
        }
      });
    }
  }
}
