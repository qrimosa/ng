import { Service, signal } from '@angular/core';
import data from '../../../data/menu.json';
import { Menu } from '../models/menu.models';

@Service()
export class Menus {
    readonly data = signal<Menu[]>(data as Menu[]);

    getAll(): Menu[] {
        return this.data();
    }

    getbyId(id: number): Menu | undefined {
        return this.data().find((menu) => menu.id === id);
    }
}
