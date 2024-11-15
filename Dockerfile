FROM oven/bun:1

COPY package.json .
RUN bun i svelte-adapter-bun --production

ENV PORT=9040

COPY . .
RUN sed -i 's#@sveltejs/adapter-static#svelte-adapter-bun#g' svelte.config.js && bun run -b build

CMD [ "bun", "./build/index.js" ]
