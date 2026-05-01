const STORAGE_KEY = 'kaizen-guide-progress';

export type GuideProgressMap = Record<string, Record<number, boolean>>;

function readAll(): GuideProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as GuideProgressMap) : {};
  } catch {
    return {};
  }
}

function writeAll(map: GuideProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

export function loadGuideProgress(slug: string): Record<number, boolean> {
  const map = readAll();
  return map[slug] ?? {};
}

export function toggleStepComplete(slug: string, stepIndex: number, done: boolean) {
  const map = readAll();
  const cur = { ...(map[slug] ?? {}) };
  if (done) cur[stepIndex] = true;
  else delete cur[stepIndex];
  map[slug] = cur;
  writeAll(map);
}

export function progressPercent(slug: string, stepCount: number): number {
  if (stepCount <= 0) return 0;
  const cur = loadGuideProgress(slug);
  const completed = Object.keys(cur).filter(k => cur[Number(k)]).length;
  return Math.min(100, Math.round((completed / stepCount) * 100));
}

export function isGuideComplete(slug: string, stepCount: number): boolean {
  return progressPercent(slug, stepCount) >= 100;
}
