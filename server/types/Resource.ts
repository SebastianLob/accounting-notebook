import {Router} from './ExpressTypes';
export default interface Resource {
  path: string,
  importedResource: Router
}