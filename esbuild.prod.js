require('esbuild').build({
    entryPoints: ['./src/index.js','./src/ima/ima3.js','./src/style/style.css'],
    outdir:"dist",
    allowOverwrite: true,
    bundle: true,
    sourcemap: true,
    sourcesContent: false,
    minify:true
  })