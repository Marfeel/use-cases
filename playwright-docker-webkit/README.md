# Playwright + Docker + Webkit + Scroll

This repository showcase a bug where playwright/webkit is failing in docker but not in the host.

# Steps to reproduce

After cloning this repository, go to the playwright-docker-webkit directory, run the test with Docker and watch it fail.

```
docker run -it --rm -v ${PWD}:/app -w /app mcr.microsoft.com/playwright:v1.5.2-focal /bin/bash -c "npm i && npm t"
```

Now, in the same directory, run the test directly on the host and watch it pass.

```
npm t
```
