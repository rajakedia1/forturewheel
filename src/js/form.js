import * as func from './func';
import {main} from '../main';

export function teamNumber(evt) {
	func.Team.set(evt.value);
	func.TeamId.set([...Array(parseInt(evt.value)).keys()].map(x => ++x));
	main();
}