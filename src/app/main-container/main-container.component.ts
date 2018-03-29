import {
    Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {SurveysListComponent} from "./surveys-list/surveys-list.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {PlaceholderDirective} from "./palceholder-directive";
import {ChildComponent} from "./child-component";

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
    currentComponentData: any = null;
    currentComponentidentifier: String = null;
    componentRef = null;

    @ViewChild(PlaceholderDirective) placeHolder: PlaceholderDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.loadComponent(null);
    }

    @Input()
    set data(d) {
        this.currentComponentData = d;
        this.loadComponent(this.currentComponentidentifier);
    }

    @Input()
    set currentComponentName(name: String) {
        this.currentComponentidentifier = name;
        this.loadComponent(name)
    }

    loadComponent(currentComponentName) {
        if (!currentComponentName) return false;

        let currentComponent = null,
            viewContainerRef = this.placeHolder.viewContainerRef;


        switch (currentComponentName) {
            case "survey":
                currentComponent = SurveysListComponent;
                break;
            case "map":
                currentComponent = MapViewComponent;
                break;
            default:
                currentComponent = null;
        }

        if (!currentComponent) return false;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef
            .createComponent(this.componentFactoryResolver.resolveComponentFactory(currentComponent));

        (<ChildComponent>this.componentRef.instance).data = this.currentComponentData;

    }

}
