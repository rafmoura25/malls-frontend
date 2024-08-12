import { Component, OnInit } from '@angular/core';
import { MallService } from '../../services/mall.service';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.scss'],
})
export class MallsComponent implements OnInit {
  malls: any[] = [];

  constructor(private mallService: MallService) {}

  ngOnInit(): void {
    this.loadMalls();
  }

  loadMalls() {
    this.mallService.getMalls().subscribe((result: any) => {
      this.malls = result.data.malls;
    });
  }

  toggleStatus(mall: any) {
    this.mallService
      .toggleMallStatus(mall.id, !mall.isActive)
      .subscribe(() => this.loadMalls());
  }
}
