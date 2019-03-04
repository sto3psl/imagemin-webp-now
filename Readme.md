This is a test repo for [ìmagemin](https://github.com/imagemin/imagemin) and the [imagemin-webp](https://github.com/imagemin/imagemin-webp) plugin on [now.sh](https://zeit.co/now).

This is a service that converts all kinds of images to `webp` and serves the optimized `webp` file. This is accomplished with the above mentioned packages. Locally everything works but after deploying to now.sh, I get the following errors for `jpg` and `png` files respectively:

```
curl 'https://imagemin-webp-now-d5mnaefey.now.sh/?img=https://imagemin-webp-now-d5mnaefey.now.sh/img/sto3psl.jpeg'

JPEG support not compiled. Please install the libjpeg development package before building.
Error! Could not process file /tmp/355075bf-32c8-41b0-b701-34b2e8bb8b01
Error! Cannot read input picture file '/tmp/355075bf-32c8-41b0-b701-34b2e8bb8b01'
```

```
curl 'https://imagemin-webp-now-d5mnaefey.now.sh/?img=https://imagemin-webp-now-d5mnaefey.now.sh/img/sto3psl.png'

PNG support not compiled. Please install the libpng development package before building.
Error! Could not process file /tmp/5b9e21e7-e9f8-494d-8668-feaf45a69a7f
Error! Cannot read input picture file '/tmp/5b9e21e7-e9f8-494d-8668-feaf45a69a7f'
```

`webp` input files work just fine and serve the `webp image`.

```
curl 'https://imagemin-webp-now-d5mnaefey.now.sh/?img=https://imagemin-webp-now-d5mnaefey.now.sh/img/sto3psl.webp'
```
