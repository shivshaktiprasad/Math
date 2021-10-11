import {Component } from "@angular/core"
import { Context } from '../app.model/context.model'

@Component({
    selector: "matrix",
    templateUrl: "./matrix.component.html",
    styleUrls: ["./matrix.component.css"]
})
export /**
 * MatrixComponent
 */
class MatrixComponent {
    constructor(public context: Context) {
        
    }
}