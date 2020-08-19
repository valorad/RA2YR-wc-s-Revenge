import {
  std_fs,
  std_path,
  media_types,
  ini
} from './deps.ts';

import deepMerge from './deepMerge.ts';

const {walk} = std_fs;
const {extname} = std_path;
const {contentType} = media_types;
const {encode, decode} = ini;

class App {
  files: std_fs.WalkEntry[] = [];

  deserializedObjects: any[] = [];

  markFiles = async () => {
    for await (const entry of walk("./in")) {
      if (entry.isFile && extname(entry.name) === ".ini") {

        const mime = contentType(entry.path);

        if (mime && mime.includes("text/plain")) {
          this.files.push(entry);
        }
        
      }
    }
  };

  deserializeFiles = async () => {

    for (let file of this.files) {
      const text = await Deno.readTextFile(file.path);
      this.deserializedObjects.push(decode(text));
    }

    // this.deserializedObjects = this.files.map(async (file) => {
    //   const text = await Deno.readTextFile(file.path);
    //   console.log(`about to decode`);
      
    //   return decode(text);
    // });
  };

  merge = () => {
    return this.deserializedObjects.reduce((prev, curr) => {
      return deepMerge(prev, curr);
    });
  };

  serializeResult = async () => {
    await Deno.writeTextFile("./out/result.ini", encode(this.merge()));
  };

  initialize = async () => {
    await this.markFiles();
    await this.deserializeFiles();
    await this.serializeResult();
  }

  /**
   *  Merge INI
   */
  constructor() {
    this.initialize();
  }

}

export default new App();