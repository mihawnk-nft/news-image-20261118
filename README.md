# 18 November 2026 — The World in One Image

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/c/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/mihawnk-nft/news-image-20261118/rank.svg)](https://make.fun/c/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/mihawnk-nft/news-image-20261118/reward.svg)](https://make.fun/c/news-image-20261118)

An entry for the [make.fun](https://make.fun/c/news-image-20261118) bounty
"Sum up 18 November's world news in one image".

## The image

`entry.png` is one 1024×1024 picture of Wednesday 18 November 2026,
built from 46 reported stories of that day, from 7 regions — every story
first reported on 18 November, each checked against its source and its
date:

- **Xi greets Trump on the tarmac in Shenzhen**, the first airport welcome
  Xi has given a visiting leader; the Trump–Xi–Putin tri-summit follows
  on Thursday.
- **Kuwait and Bahrain intercept Iranian drones** aimed at US forces,
  reported overnight; the US strike on Qeshm was Tuesday, so it is not
  shown as Wednesday's news.
- **Voyager 1 reaches one light-day from Earth** — 25.9 billion km, the
  farthest any human-made object has ever been.
- The EU proposes a **€45bn loan to fund Kyiv in 2027**; Russia fires
  141 drones at Ukraine and 126 are downed; the Fed minutes point to
  more hikes and the Dow falls 1.1%; **GTA VI goes on sale** after a
  13-year wait; Cyclone Akvan bears down on Odisha; Anthropic prices
  its IPO at $83 a share — and 35 more stories.

The page is built to read at three sizes: the date and the three lead
stories at thumbnail size, 11 hand-drawn illustrations at half size,
all 46 stories at full size. It carries a UTC timeline, a world map
with numbered pins, per-story source tags, and a DATE CHECK box listing
what was left out because it was first reported on 17 November, and
what was not yet news on Wednesday.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` into
`$MAKEFUN_OUTPUT_DIR/entry.png`, unchanged. Nothing else is needed:
no network, no drawing at run time, no dependencies.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
