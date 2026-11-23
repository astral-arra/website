/** One card's reading in one language – the fixed structure of every daily card. */
export type CardText = {
  name: string;
  /** Three keywords, separated by " · ". */
  keys: string;
  /** Archetypal message – the core symbolism of the card. */
  archetype: string;
  /** Energy of the day – the processes, attitudes and circumstances it stands for. */
  energy: string;
  /** Hidden message – the less obvious, metaphysical perspective. */
  hidden: string;
  /** Shadow of the card – what may stay outside our awareness. */
  shadow: string;
  /** Message to the Higher Self – the aspect of consciousness we can integrate. */
  higherSelf: string;
  /** Question for reflection – to meditate on through the day. */
  question: string;
  /** Advice – one concrete step. */
  advice: string;
};

export type CardEntry = { id: string; bg: CardText; en: CardText };
