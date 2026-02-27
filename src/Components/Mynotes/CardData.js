import {Usernotes} from '../../Service/Api.js';

export async function getusernotes() {
  try {
    const result = await Usernotes();
     return result
  } catch (error) {
    console.log("Error fetching notes:", error);
    return null;
  }
}

