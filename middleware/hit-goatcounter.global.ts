export default defineNuxtRouteMiddleware(to => {
  // skip middleware on server
  if (import.meta.server) return

  setTimeout(() => {
    window.goatcounter.count({
        // path: to.path,
    })
  }, 500)
})
