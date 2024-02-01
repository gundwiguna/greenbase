import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MqService } from '../services/mq.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-core-navigation',
  templateUrl: './core-navigation.component.html',
  styleUrl: './core-navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgFor,
    MatGridListModule,
    MatBadgeModule
  ]
})
export class CoreNavigationComponent {
  public mq = inject(MqService);
  constructor(private maticon: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.maticon.addSvgIcon('greenbase-notification',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/toolbar/notification.svg'));
    this.maticon.addSvgIcon('greenbase-chat',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/toolbar/chat.svg'));
  }

  activeMenu: string = 'Knowledge Base';
  setActiveMenu(newMenu: string): void {
    this.activeMenu = newMenu;
  }

  menuItems: any[] = [
    { label: 'Dashboard', iconUrl: 'assets/menu/dashboard.svg' },
    { label: 'Orders', iconUrl: 'assets/menu/orders.svg', badge: 16 },
    { label: 'Products', iconUrl: 'assets/menu/products.svg' },
    { label: 'Categories', iconUrl: 'assets/menu/categories.svg' },
    { label: 'Customers', iconUrl: 'assets/menu/customers.svg' },
    { label: 'Reports', iconUrl: 'assets/menu/reports.svg' },
    { label: 'Coupons', iconUrl: 'assets/menu/coupons.svg' },
    { label: 'Inbox', iconUrl: 'assets/menu/inbox.svg' },
    { label: 'Other Information' },
    { label: 'Knowledge Base', iconUrl: 'assets/menu/knowledge-base.svg' },
    { label: 'Product Updates', iconUrl: 'assets/menu/product-updates.svg' },
    { label: 'Settings' },
    { label: 'Personal Settings', iconUrl: 'assets/menu/personal-settings.svg' },
    { label: 'Global Settings', iconUrl: 'assets/menu/global-settings.svg' },
  ];

  knowledgeItems: any[] = [
    {
      title: 'Getting Started',
      bullets: [
        'Guide to get started faster',
        'Video tutorials for beginners',
        'Moving to Bolt system',
      ],
      icon: 'assets/kb/gettingStarted.svg'
    },
    {
      title: 'Personal Settings',
      bullets: [
        'Setting up your profile',
        'Changing business name',
        'Changing email address',
      ],
      icon: 'assets/kb/personalSetting.svg'
    },
    {
      title: 'Billing',
      bullets: [
        'Payment declined',
        'Get a refund',
        'Subscriptions',
      ],
      icon: 'assets/kb/billing.svg'
    },
    {
      title: 'Commerce',
      bullets: [
        'Add products',
        'Selling guide',
        'Create categories',
      ],
      icon: 'assets/kb/commerce.svg'
    }
  ];
  socialItem: any[] = [
    {
      title: 'Community Forum',
      content: ' Get help from community members, ask any questions and get answers faster.'
    },
    {
      title: 'Webinars',
      content: 'Join our series of webinars where you can ask questions live and see a presentation.'
    }
  ];
}
