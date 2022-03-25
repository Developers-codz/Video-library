/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
import {
  holi,
  fivemincraft,
  jumpingfrog,
  craftideas,
  sunset,
  bestoutofwaste,
} from "../../Assets/gifs";

export const videos = [
  {
    _id: uuid(),
    title: "Pinting using Holi Colors",
    gif: holi,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "M.F Hussain",
    categoryName: "Paintings",
  },
  {
    _id: uuid(),
    title: "5 minutes crafts",
    gif: fivemincraft,
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Craft Ideas",
  },
  {
    _id: uuid(),
    title: "Jumping Frog  crafts",
    gif: jumpingfrog,
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Craft Ideas",
  },
  {
    _id: uuid(),
    title: "11 easy craft Ideas",
    gif: craftideas,
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Best Out of Waste",
  },
  {
    _id: uuid(),
    title: "Best Out of Waste Craft Ideas",
    gif: bestoutofwaste,
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Best Out of Waste",
  },
  {
    _id: uuid(),
    title: "Easy Golden Sunset Poster color Painting",
    gif: sunset,
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Paintings",
  },
];
