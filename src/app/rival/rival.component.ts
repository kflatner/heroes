// rival.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-rival',
  templateUrl: './rival.component.html',
  styleUrls: ['./rival.component.css']
})
export class RivalComponent implements OnInit {
  rival?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.getRival();
  }

  getRival(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(rival => this.rival = rival);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.rival) {
      this.heroService.updateHero(this.rival)
        .subscribe(() => this.goBack());
    }
  }

  navigateToRival(): void {
    if (this.rival && this.rival.rivalId) {
      this.router.navigate(['/rival', this.rival.rivalId]); // Navigate with rival ID
    }
  }
}

