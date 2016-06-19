import {Component, Input} from '@angular/core';

@Component({
	selector:				'ng-menu',
	template:	`
		<div class="dropdown">
			<i class="{{menu.icon}}" data-toggle="dropdown"></i>
			<ul class="dropdown-menu" [ngClass]="{'dropdown-menu-right': menu.menuRight}" aria-labelledby="dropdownMenu1">
				<li *ngFor="let item of menu.items" (click)="item.action(item)"><a href="#">{{item.label}}</a></li>
			</ul>
		</div>
	`,
	styles:		[`
		.dropdown-menu {
			position:		absolute;
		}
	`],
	host:			{
		style:	`
		position:		relative;
		`
	}
})

export class Menu {
	@Input("menu-object") menu;
}