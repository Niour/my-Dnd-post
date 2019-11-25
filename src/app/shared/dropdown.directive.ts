import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
//     @HostListener('click') toggleClose() {
//         this.isOpen = !this.isOpen;
//     }
// }
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}
// Relying on direct DOM access creates tight coupling between your applicatio
// n and rendering layers which will make it impossible to separate the two and deploy your application into a web worker.
