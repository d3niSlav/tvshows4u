export class Actor {
  name: string;
  bio: string = '';
  actorImage: string;
  thumbnail: string;
  birthdate: string;
  character: string;

  constructor(actorData: {
    name: string,
    bio: string,
    actorImage: string,
    thumbnail: string,
    birthdate: string,
    character: string
  }) {
    this.name = actorData.name;
    this.bio = actorData.bio;
    this.actorImage = actorData.actorImage || '';
    this.thumbnail = actorData.thumbnail;
    this.birthdate = actorData.birthdate;
    this.character = actorData.character;
  }
}