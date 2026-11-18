# 18 November 2026 — The World in One Image

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/c/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/mihawnk-nft/news-image-20261118/rank.svg)](https://make.fun/c/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/mihawnk-nft/news-image-20261118/reward.svg)](https://make.fun/c/news-image-20261118)

An entry for the [make.fun](https://make.fun/c/news-image-20261118) bounty
"Sum up 18 November's world news in one image".

## The image

`entry.png` is one 1024×1024 picture of Wednesday 18 November 2026,
built from 55 reported stories of that day, from every region and beat:
the Kerch Bridge second strike, the Hormuz tanker mines and the third
US carrier, the Xi–Trump–Putin Shenzhen meeting, the Pentagon's ninth
failed audit, and 51 more — each drawn as its own small panel with a
short label, under a header naming the day.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` into
`$MAKEFUN_OUTPUT_DIR/entry.png`, unchanged. Nothing else is needed:
no network, no drawing at run time, no dependencies.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
