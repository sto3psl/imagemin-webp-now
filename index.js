const url = require('url')

const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const { query } = url.parse(req.url, true)

  if (!query.img) {
    res.statusCode = 400
    res.end()
    return
  }

  const image = await fetch(query.img)
  const buffer = await image.buffer()

  try {
    const optimizedBuffer = await imagemin.buffer(buffer, {
      plugins: [imageminWebp()]
    })

    res.setHeader('Content-Type', 'image/webp')
    res.end(optimizedBuffer)
  } catch (error) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        error
      })
    )
  }
}
