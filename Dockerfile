FROM oven/bun:1

COPY package.json .
RUN bun i svelte-adapter-bun

ENV PORT=9040

COPY . .
RUN sed -i 's#@sveltejs/adapter-auto#svelte-adapter-bun#g' svelte.config.js && bun run build

CMD [ "bun", "./build/index.js" ]
