import { User } from './user';

export interface SearchResult {
  total_count: number,
  incomplete_results: boolean,
  items: Array<User>
}
