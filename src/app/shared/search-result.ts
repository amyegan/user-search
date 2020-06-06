import { User } from './user';
import { UserDetails } from './user-details';

export interface SearchResult {
  total_count: number,
  incomplete_results: boolean,
  items: Array<User>
  users?: Array<UserDetails>
}
