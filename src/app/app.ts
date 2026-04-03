import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Sidebar } from "./common/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  ngOnInit(): void {
    initFlowbite();
  }
  
}
