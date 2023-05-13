export type Performance = {
  playID: string;
  audience: number;
};

export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Play = {
  name: string;
  type: string;
};

export type Plays = { [key: string]: Play };

export type StatementData = {
  customer: string;
  performances: PerformanceEnriched[];
  totalAmount: number;
  totalVolumeCredits: number;
};

export type PerformanceEnriched = Performance & {
  play: Play;
  amount: number;
  volumeCredits: number;
};