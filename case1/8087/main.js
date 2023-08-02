((
  file = http.File.from('index.html')
) => pipy({
})

.listen(8087)
.demuxHTTP().to(
  $=>$.replaceMessage(
    msg => (
      file.toMessage(msg.head?.headers?.['accept-encoding'])
    )
  )
)

)()
