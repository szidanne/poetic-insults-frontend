import { getRandomElement } from "../lib/random";

// Our pools of fire-forged verbs, adjectives, nouns, and endings.
const POOLS = {
  verbs: [
    "whisper",
    "shiver",
    "flutter",
    "stagger",
    "quiver",
    "murmur",
    "implode",
    "echo",
  ] as const,
  adjectives: [
    "ashen",
    "half-hearted",
    "luminous",
    "rusted",
    "sleep-drunk",
    "tremulous",
    "wilted",
    "frost-bitten",
  ] as const,
  nouns: [
    "memory",
    "reverie",
    "promise",
    "daydream",
    "lament",
    "mirage",
    "wistfulness",
    "phantom",
  ] as const,
  endings: [
    "beneath a fog of stale ambition",
    "like a candle in mourning",
    "among the ruins of your own sighs",
    "draped in yesterday’s regrets",
    "held together by broken lullabies",
    "under the weight of borrowed glory",
    "in the echo chamber of your doubts",
    "beside the ashes of faded hope",
  ] as const,
};

// Choose "an" if the next word starts with a vowel sound
function getArticle(word: string): "a" | "an" {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

export function generateInsult(): string {
  const { verbs, adjectives, nouns, endings } = POOLS;
  const verb = getRandomElement(verbs);
  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const ending = getRandomElement(endings);

  const article = getArticle(adjective);
  return `You ${verb} like ${article} ${adjective} ${noun} ${ending}.`;
}
