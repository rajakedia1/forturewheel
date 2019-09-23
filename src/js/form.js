import * as func from './func';
import {main} from '../main';

export function teamNumber(evt) {
	func.Team.set(evt.value);
	main();
}