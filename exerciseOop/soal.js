// Playlist music 
  /*
    play () - mainkan music yg pertama
    playlists = []
    next() -> mainkan music selanjutnya 
    prev() -> mainkan music sebelumnya 
    shuffle()
  */

// Music 
   /*
    title 
    author 
   */
class Music {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

class Playlist {
  constructor() {
    this.list = [];
    this.playing = null;
  }
  addMusic(music) {
    this.list.push(music);
  }
  showList() {
    return this.list;
  }
  play() {
    if (this.playing == null) {
      this.playing = this.list[0];
    }
    return `${this.playing.title} by ${this.playing.artist} is now playing`;
  }
  next() {
    for (let i = 0; i < this.list.length; i++) {
      if (this.playing == this.list[i]) {
        if (i == this.list.length - 1) {
          this.playing = this.list[0];
          //return `${this.playing.title} by ${this.playing.artist} is now playing`;
        } else {
          this.playing = this.list[i + 1];
          
        }
        return `${this.playing.title} by ${this.playing.artist} is now playing`;
      }
    }
  }
  prev() {
    for (let i = 0; i < this.list.length; i++) {
      if (this.playing == this.list[i]) {
        if (i == 0) {
          this.playing = this.list[this.list.length - 1];
          return `${this.playing.title} by ${this.playing.artist} is now playing`;
        } else {
          this.playing = this.list[i - 1];
          return `${this.playing.title} by ${this.playing.artist} is now playing`;
        }
      }
    }
  }
  shuffle() {
    this.playing = this.list[Math.floor(Math.random() * this.list.length)];
    return `${this.playing.title} by ${this.playing.artist} is now playing`;
  }
}

let music1 = new Music("Cupid", "FIFTY FIFTY");
let music2 = new Music("Sunflower", "Post Malone");
let music3 = new Music("Viva La Vida", "ColdPlay");
let music4 = new Music("Mariposa", "Peach Tree Rascals");
let music5 = new Music("Loverboy", "A-Wall");

let playlist1 = new Playlist();
playlist1.addMusic(music1);
playlist1.addMusic(music2);
playlist1.addMusic(music3);
playlist1.addMusic(music4);
playlist1.addMusic(music5);
console.log(playlist1.play());
console.log(playlist1.next());
console.log(playlist1.prev());
console.log(playlist1.shuffle());