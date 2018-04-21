import {Comment} from './comments';
import {User} from './user';

export class Photo {
  public photoId: number;
  public photoName: string;
  public title: string;
  public description: string;
  public user: string;
  public imageName: string;
  public likedByUserList: User[];
  public likes: number;
  public commentList: Comment[];
  public created: Date;
}
