require('esbuild').buildSync({
    entryPoints: ['./src/index.tsx'],
    bundle :true,
    minify : false,
    sourcemap : true,
    target : ['chrome58'],
    outdir : './dist'
})
