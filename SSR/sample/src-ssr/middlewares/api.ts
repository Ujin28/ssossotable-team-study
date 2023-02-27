import { ssrMiddleware } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(async ({ app , resolve /*, publicPath, render */ }) => {
  // something to do with the server "app"
  app.get(resolve.urlPath('/api/:method'), (req, res) => {
    const method = req.params.method
    let returnData: {
      time: string | any
    } = {
      time: undefined
    }
    switch (method) {
      case 'time':
        returnData.time = JSON.stringify(new Date())
        res.send(returnData)
        break
    }
  })
})
