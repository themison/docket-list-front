import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.page.html',
  styleUrls: ['./pomodoro.page.scss'],
})
export class PomodoroPage implements OnInit, OnDestroy {
  public radius = 100;

  public percent = 100;

  public timeTitle: string;

  public timer: Observable<number>;

  public timeStart: number;

  private unsubscriber$ = new Subject<void>();

  constructor() {}

  ngOnInit() {
    this.startTimer();
    this.calculateRadius();
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  private calculateRadius(): void {
    const bodyDOM = document.getElementsByTagName('body')[0];
    this.radius = Math.sqrt((bodyDOM.clientHeight * bodyDOM.clientWidth) / (2 * 2 * Math.PI));
    // setInterval(() => (this.percent -= 1), 1000);
  }

  private startTimer(duration = 30000): void {
    this.timeStart = Date.now();
    this.timer = timer(0, 1000);
    this.timer.pipe(takeUntil(this.unsubscriber$)).subscribe(() => {
      this.percent = 100 - ((Date.now() - this.timeStart) / duration) * 100;
      console.log(this.msToDate(this.timeStart + duration - Date.now()));
      console.log(100 - ((Date.now() - this.timeStart) / duration) * 100);
    });
  }

  private msToDate(duration: number): void {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor(duration / (1000 * 60));
    if (minutes <= 0 && seconds <= 0) {
      this.formatTime(minutes, seconds);
      this.percent = 0;
      this.unsubscriber$.next();
      return;
    }
    this.formatTime(minutes, seconds);
  }

  private formatTime(minutes: number, seconds: number): void {
    const minutesString = minutes < 10 ? '0' + minutes : minutes;
    const secondsString = seconds < 10 ? '0' + seconds : seconds;

    this.timeTitle = minutesString + ':' + secondsString;
  }
}
