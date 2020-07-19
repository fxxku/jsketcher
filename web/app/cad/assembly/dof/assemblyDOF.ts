import Vector from "math/vector";
import {FaceTouchAlignConstraint} from "../constraints/faceTouchAlign";
import {EdgeAlignConstraint} from "../constraints/edgeAlign";
import {DEG_RAD} from "../../../math/math";
import {Matrix3} from "math/matrix";

export const ANGULAR_ALLOWANCE = 10 * DEG_RAD;

export enum ModificationResponse {

  SUCCESS, FIXED, REJECTED

}

export interface AssemblyDOF {

  description: string;

  translate(dir: Vector, location: Matrix3, strict: boolean): ModificationResponse;

  rotate(axis: Vector, angle: number, location: Matrix3, strict: boolean): ModificationResponse;

  applyTouchAlign(constr: FaceTouchAlignConstraint): AssemblyDOF;

  applyEdgeAlign(constr: EdgeAlignConstraint): AssemblyDOF;

}