import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) {}

  selectedMenu: string = 'Discover';
  selectedSubmenu: string = '';
  selectedContentType: string = 'Live';
  selected:string='';

  drawerMenus: Array<any> = [
    {
      menuId: 0,
      menuName: 'Discover',
      icon: "fa-solid fa-globe",
    },
    {
      menuId: 1,
      menuName: 'Category',
      icon: "fa-solid fa-grip",
      subMenus: [
        "Gaming", "Music", "Esports", "Podcast"
      ],
    },
    {
      menuId: 2,
      menuName: 'Following',
      icon: "fa-regular fa-user",
    },
    {
      menuId: 3,
      menuName: 'Your Videos',
      icon: "fa-solid fa-video",
    },
  ];

  categories: Array<string> = ['Action PG', 'Open World', 'Open World', 'Adventure'];

  contentTypes: Array<string> = ['Live', 'Video', 'Clips', 'Events'];

  contentDetails: Array<any> = [
    {
      imagePath: '/assets/images/witcher_1.jpg',
      contentTitle: 'Epic Battle and Monster Hunts',
      views: "1,2K",
      date: '3',
      uploadedby: 'Marvin McKinney',
      duration: "03:02"
    },
    {
      imagePath: '/assets/images/witcher_1.jpg',
      contentTitle: 'Epic Battle and Monster Hunts',
      views: "1,2K",
      date: '3',
      uploadedby: 'Marvin McKinney',
      duration: "03:02"
    },
    {
      imagePath: '/assets/images/witcher_1.jpg',
      contentTitle: 'Epic Battle and Monster Hunts',
      views: "1,2K",
      date: '3',
      uploadedby: 'Marvin McKinney',
      duration: "03:02"
    },
    {
      imagePath: '/assets/images/witcher_1.jpg',
      contentTitle: 'Epic Battle and Monster Hunts',
      views: "1,2K",
      date: '3',
      uploadedby: 'Marvin McKinney',
      duration: "03:02"
    }
  ];

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }

  selectSubmenu(subMenu: string) {
    this.selectedSubmenu = subMenu;
  }

  selectContentType(contentType: string) {
    this.selectedContentType = contentType;
  }

  navToFoco(){
    this.router.navigate(['/foco']);
  }
}